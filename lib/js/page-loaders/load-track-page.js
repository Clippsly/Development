function visitTrackPage(trackID) {
    event.preventDefault()
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    if (!trackID) {
        console.error('Track ID is required.');
        return;
    }

    window.history.pushState({}, '', `/track/${trackID}`);

    document.querySelector('.container').innerHTML = `
        <div class="row">
            <div class="col-md-8">
                <div class="track-data" id="track-data"></div>
                <div class="description" id="description-container" style="display: none;">
                    <div class="description-content">
                        <p class="description-heading">Description</p>
                        <p class="description-text" id="description-text"></p>
                    </div>
                    <div class="information-content" id="information-content" style="display: none;">
                        <p class="information-heading">Information</p>
                        <p class="information-text" id="information-text"></p>
                    </div>
                </div>
                <div class="comments-section" id="comments-section">
                    <div class="comment-input-container">
                        <input type="text" id="comment-input" class="comment-input" placeholder="Write a comment...">
                        <button id="send-comment-btn" class="btn-secondary">Post</button>
                    </div>
                    <div id="comments-container"></div>
                </div>
            </div>
            <div class="col-md-4">
                <h2>More from <span id="author-display">null</span></h2>
                <div class="more-from-author" id="more-from-author"></div>
            </div>
        </div>
    `;

    fetch(`https://api.clippsly.app/endpoints/data/track?id=${trackID}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${sessionToken}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(track => {
        document.title = `${track.releaseName} | Clippsly`;

        if (track.isPrivate) {
            const privateAlertHTML = `
                <div class="alert alert-warning" role="alert">
                    This track is private, only you can interact with it.
                </div>
            `;
            document.querySelector('#track-data').insertAdjacentHTML('beforebegin', privateAlertHTML);
        }
    
        const trackTitle = track.isExplicit ? `${track.releaseName} 🅴` : track.releaseName;
        const verifiedBadge = track.releaseAuthor.authorVerified ? `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" title="Verified Badge">
                <circle cx="12" cy="12" r="10" stroke-width="2" fill="#1E90FF"/>
                <path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none"/>
            </svg>` : '';
    
        const trackHTML = `
            <div class="track-cover">
                <img src="${track.additionalData.releaseCoverArt}" 
                    alt="${track.releaseName} Cover Art" 
                    onerror="this.onerror=null; this.src='https://cdn.clippsly.app/brand_assets/icons/default-artist.png';">
            </div>
            <div class="track-details">
                <h2 class="track-title">${trackTitle}</h2>
                <div class="track-author">
                    <img src="${track.releaseAuthor.authorAvatar}" 
                        alt="${track.releaseAuthor.authorDisplay}" 
                        class="author-avatar" 
                        onerror="this.onerror=null; this.src='https://cdn.clippsly.app/brand_assets/icons/default-artist.png';">
                    <p class="author-name">
                        <a href="/users/${track.releaseAuthor.authorUsername}" onclick="visitUserProfile('${track.releaseAuthor.authorUsername}')">
                            ${track.releaseAuthor.authorDisplay} ${verifiedBadge}<span class="author-username">@${track.releaseAuthor.authorUsername}</span>
                        </a>
                    </p>
                </div>
                <p class="track-duration">${track.additionalData.audioDuration || ''}</p>
                ${
                    track.additionalData.audioFile ? `
                        <div class="play-button">
                            <button id="play-btn" data-audio="${track.additionalData.audioFile}" data-cover="${track.additionalData.releaseCoverArt}" data-title="${track.releaseName}" data-artist="${track.releaseAuthor.authorDisplay}" data-duration="${track.additionalData.audioDuration}" onclick="playRequestedTrack(${trackID})">Play</button>
                        </div>
                    ` : track.additionalData.premiereDate ? `
                        <p class="release-date">Releases on: ${track.additionalData.premiereDate}</p>
                    ` : ''
                }
            </div>
        `;
    
        document.getElementById('track-data').innerHTML = trackHTML;
    
        updateDescription(track);
        
        document.getElementById('author-display').textContent = track.releaseAuthor.authorDisplay;
        loadMoreFromAuthor(track.releaseAuthor.authorUsername);
    
        if (!track.commentsOff) {
            loadComments(trackID);
        } else {
            document.getElementById('comments-section').innerHTML = '<p>Comments have been disabled.</p>';
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
        visitErrorPage(404);
    });    

    document.getElementById('send-comment-btn').addEventListener('click', function() {
        const commentInput = document.getElementById('comment-input');
        const comment = commentInput.value.trim();
        if (comment) {
            this.style.display = 'none';

            fetch('https://api.clippsly.app/endpoints/functions/comment-add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionToken}`
                },
                body: JSON.stringify({
                    comment_trackid: trackID,
                    comment: comment
                })
            })            
            .then(response => response.json())
            .then(response => {
                commentInput.value = '';
                loadComments(trackID);
                this.style.display = 'block';
            })
            .catch(error => {
                this.style.display = 'block';
            });
        }
    });
}

function updateDescription(track) {
    const descriptionText = document.getElementById('description-text');
    const informationText = document.getElementById('information-text');
    const descriptionContainer = document.getElementById('description-container');
    const informationContent = document.getElementById('information-content');

    let descriptionHTML = '';
    let informationHTML = '';

    function formatDescriptionText(text) {
        text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+|mailto:[^\)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
        text = text.replace(/\[\[([^\]]+)\]\]/g, '<strong>$1</strong>');
        text = text.replace(/@([a-zA-Z0-9_]+)/g, '<a href="/users/\$1\" onclick="visitUserProfile(\'$1\')">@$1</a>');
        text = text.replace(/\\n/g, '<br>');

        return text;
    }

    if (track.additionalData.releaseDescription) {
        let formattedDescription = formatDescriptionText(track.additionalData.releaseDescription);

        descriptionText.textContent = track.additionalData.releaseDescription;
        descriptionHTML = `
            <div class="description-content">
                <p class="description-heading">Description</p>
                <p class="description-text">${formattedDescription}</p>
            </div>
        `;
    }

    if (track.isArtificiallyGenerated || track.isExplicit) {
        if (track.isArtificiallyGenerated) {
            informationHTML += 'Artificially Generated';
        }
        if (track.isExplicit) {
            informationHTML += (informationHTML ? ' · ' : '') + 'Explicit Lyrics';
        }

        informationContent.innerHTML = `
            <div class="information-content">
                <p class="information-heading">Information</p>
                <p class="information-text">${informationHTML}</p>
            </div>
        `;
        descriptionContainer.style.display = 'block';
        informationContent.style.display = 'block';
    } else {
        descriptionContainer.style.display = descriptionHTML ? 'block' : 'none';
    }

    document.getElementById('description-container').innerHTML = descriptionHTML + informationContent.innerHTML;
}

function loadComments(trackID) {
    fetch(`https://api.clippsly.app/endpoints/functions/track-comments?id=${trackID}`)
        .then(response => response.json())
        .then(comments => {
            const commentsContainer = document.getElementById('comments-container');
            commentsContainer.innerHTML = '';
            
            comments.forEach(comment => {
                const verifiedBadge = comment.commentAuthorVerified ? `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" title="Verified Badge">
                        <circle cx="12" cy="12" r="10" stroke-width="2" fill="#1E90FF"/>
                        <path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none"/>
                    </svg>` : '';
            
                const pinnedIcon = comment.commentPinned ? ' · 📌' : '';
                const commentClasses = `comment${comment.commentAuthorHighlighted ? ' highlight' : ''}`;
                
                const commentElement = document.createElement('div');
                commentElement.className = commentClasses;
            
                const avatar = document.createElement('img');
                avatar.src = comment.commentAuthorAvatar;
                avatar.alt = comment.commentAuthor;
                avatar.className = 'comment-avatar';
                avatar.onerror = function () {
                    this.src = 'https://cdn.clippsly.app/brand_assets/icons/default-artist.png';
                };
            
                const content = document.createElement('div');
                content.className = 'comment-content';
            
                const author = document.createElement('p');
                author.className = 'comment-author';
                author.innerHTML = `
                    <a href="/users/${comment.commentAuthorUsername}" onclick="visitUserProfile('${comment.commentAuthorUsername}')">
                        ${comment.commentAuthorDisplay} ${verifiedBadge} <span class="comment-username">@${comment.commentAuthorUsername}</span>
                    </a>
                `;
            
                const text = document.createElement('p');
                text.className = 'comment-text';
                text.textContent = comment.commentContent;
            
                let attachment = null;
                if (comment.commentAttachment) {
                    attachment = document.createElement('div');
                    attachment.className = 'comment-attachment';
                    const attachmentImg = document.createElement('img');
                    attachmentImg.src = comment.commentAttachment;
                    attachmentImg.alt = 'Comment Attachment';
                    attachment.appendChild(attachmentImg);
                }
            
                const date = document.createElement('p');
                date.className = 'comment-date';
                date.textContent = `${formatTimestamp(comment.commentDate)} · ID: ${comment.commentID}${pinnedIcon}`;
            
                content.appendChild(author);
                content.appendChild(text);
                if (attachment) content.appendChild(attachment);
                content.appendChild(date);
            
                commentElement.appendChild(avatar);
                commentElement.appendChild(content);
            
                commentsContainer.appendChild(commentElement);
            });            
        })
        .catch(() => {
            document.getElementById('comments-container').innerHTML = '<p>Comments could not be loaded.</p>';
        });
}

function loadMoreFromAuthor(username) {
    fetch(`https://api.clippsly.app/endpoints/data/track?username=${username}`)
        .then(response => response.json())
        .then(tracks => {
            tracks.sort((a, b) => b.releaseID - a.releaseID); 
            const moreFromAuthorContainer = document.getElementById('more-from-author');
            let moreFromHTML = '';

            tracks.slice(0, 3).forEach(track => {
                const verifiedBadge = track.releaseAuthor.authorVerified ? `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" title="Verified Badge">
                        <circle cx="12" cy="12" r="10" stroke-width="2" fill="#1E90FF"/>
                        <path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none"/>
                    </svg>` : '';

                const truncatedTitle = track.releaseName.length > 10 ? track.releaseName.substring(0, 10) + '...' : track.releaseName;
                const truncatedArtist = track.releaseAuthor.authorDisplay.length > 10 ? track.releaseAuthor.authorDisplay.substring(0, 10) + '...' : track.releaseAuthor.authorDisplay;

                moreFromHTML += `
                    <div class="track">
                        <div class="cover">
                            <a href="/track/${track.releaseID}" onclick="visitTrackPage(${track.releaseID})">
                                <img src="${track.additionalData.releaseCoverArt ? track.additionalData.releaseCoverArt : 'https://cdn.clippsly.app/brand_assets/icons/default-artist.png'}" alt="Track Cover">
                            </a>
                            <div class="play-button" onclick="playRequestedTrack(${track.releaseID})">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF">
                                        <path d="M320-222 Q300-240, 300-260 V-700 Q300-720, 320-738 Q340-750, 360-738 L760-518 Q780-500, 780-480 Q780-460, 760-442 L360-222 Q340-210, 320-222 Z" fill="#FFFFFF"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div class="details">
                            <a href="/users/${track.releaseAuthor.authorUsername}" onclick="visitUserProfile('${track.releaseAuthor.authorUsername}')">
                                <img src="${track.releaseAuthor.authorAvatar ? track.releaseAuthor.authorAvatar : 'https://cdn.clippsly.app/brand_assets/icons/default-artist.png'}" alt="Profile Picture" class="profile-pic">
                            </a>
                            <div class="text">
                                <a href="/track/${track.releaseID}" onclick="visitTrackPage(${track.releaseID})"><p class="track-title">${truncatedTitle}</p></a>
                                <a href="/users/${track.releaseAuthor.authorUsername}" onclick="visitUserProfile('${track.releaseAuthor.authorUsername}')"><p class="track-artist">${truncatedArtist} ${verifiedBadge}</p></a>
                            </div>
                        </div>
                    </div>
                `;
            });

            moreFromAuthorContainer.innerHTML = moreFromHTML;
        })
        .catch(() => {
            document.getElementById('more-from-author').innerHTML = '<p>Could not load tracks from this author.</p>';
        });
}