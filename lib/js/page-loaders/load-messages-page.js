let currentPageMessages = 1;

function loadSystemMessagesPage(page) {
    event.preventDefault();
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    currentPageMessages = page;
    window.history.pushState({}, '', `/messages?page=${page}`);
    document.title = `Messages | Clippsly`;

    const container = document.querySelector('.container');

    fetch(`https://api.clippsly.app/endpoints/functions/system-messages?page=${page}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`
        },
        body: JSON.stringify({ type: 'list' })
    })
        .then(response => response.json())
        .then(data => {
            container.innerHTML = `<h1>Messages</h1><br>`;

            console.log("Messages List API Response:", data);

            if (Array.isArray(data.messages) && data.messages.length > 0) {
                data.messages.forEach(message => {
                    const messageDiv = document.createElement('div');
                    messageDiv.classList.add('cliptivity');

                    const avatarURL = message.senderInfo.userAvatar || 'https://cdn.clippsly.app/brand_assets/icons/default-artist.png';

                    messageDiv.innerHTML = `
                        <img src="${avatarURL}" 
                            alt="${message.senderInfo.userDisplay || 'User Avatar'}" 
                            class="cliptivity-avatar" 
                            onerror="this.onerror=null; this.src='https://cdn.clippsly.app/brand_assets/icons/default-artist.png';">
                        <div class="cliptivity-content">
                            <p class="cliptivity-author">
                                <span>
                                    ${message.senderInfo.userDisplay}
                                    ${message.senderInfo.userVerified ? `
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" title="Verified Badge">
                                            <circle cx="12" cy="12" r="10" stroke-width="2" fill="#1E90FF"></circle>
                                            <path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none"></path>
                                        </svg>` : ''}
                                </span>
                                <span class="cliptivity-action" onclick="viewSystemMessage('${message.messageId}')" style="cursor:pointer;">
                                    ${message.messageHeader}
                                </span>
                            </p>
                            <p class="cliptivity-date">${formatTimestamp(message.createdAt)}</p>
                        </div>
                    `;
                    container.appendChild(messageDiv);
                });

                // Pagination controls
                const paginationDiv = document.createElement('div');
                paginationDiv.classList.add('pagination');

                const prevButton = document.createElement('button');
                prevButton.textContent = '< Prev';
                prevButton.className = 'btn-secondary';
                prevButton.style.display = data.pagination.hasPrevious ? 'inline' : 'none';
                prevButton.addEventListener('click', () => loadSystemMessagesPage(currentPageMessages - 1));

                const nextButton = document.createElement('button');
                nextButton.textContent = 'Next >';
                nextButton.className = 'btn-secondary';
                nextButton.style.display = data.pagination.hasNext ? 'inline' : 'none';
                nextButton.addEventListener('click', () => loadSystemMessagesPage(currentPageMessages + 1));

                paginationDiv.appendChild(prevButton);
                paginationDiv.appendChild(nextButton);
                container.appendChild(paginationDiv);

            } else {
                container.innerHTML += '<p>No messages found.</p>';
            }
        })
        .catch(error => {
            console.error('Error loading messages:', error);
            container.innerHTML = '<p>Error loading messages. Please try again.</p>';
        });
}

function viewSystemMessage(messageId) {
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    const container = document.querySelector('.container');

    fetch(`https://api.clippsly.app/endpoints/functions/system-messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`
        },
        body: JSON.stringify({ type: 'message', message: messageId })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Single Message API Response:", data);

            container.innerHTML = `
                <h1>${data.messageHeader}</h1>
                <div class="message-meta">
                    <span>${data.senderInfo.userDisplay}</span>
                    ${data.senderInfo.userVerified ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" title="Verified Badge">
                                            <circle cx="12" cy="12" r="10" stroke-width="2" fill="#1E90FF"></circle>
                                            <path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none"></path>
                                        </svg>` : ''}
                    <span class="message-date">${formatTimestamp(data.createdAt)}</span>
                </div>
                <div class="message-content">
                    <p>${data.messageContent}</p>
                </div>
                <button class="btn-secondary" onclick="loadSystemMessagesPage(${currentPageMessages})">Back</button>
            `;
        })
        .catch(error => {
            console.error('Error loading message:', error);
            container.innerHTML = '<p>Error loading message. Please try again.</p>';
        });
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
}
