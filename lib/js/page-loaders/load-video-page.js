function visitVideoPage(videoID) {
    event.preventDefault()
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    if (!videoID) {
        console.error('Video ID is required.');
        return;
    }

    window.history.pushState({}, '', `/video/${videoID}`);

    document.querySelector('.container').innerHTML = `
        <div class="row">
            <div class="col-md-8">
                <div class="track-data" id="track-data"></div>
                <div class="video-artist-data" id="video-artist-data"></div>
                <div class="description" id="description-container" style="display: none;">
                    <p class="description-text" id="description-text"></p>
                </div>
            </div>
            <div class="col-md-4">
                <h2>More from <span id="author-display">null</span></h2>
                <div class="more-from-author" id="more-from-author"></div>
            </div>
        </div>
    `;

    fetch(`https://api.clippsly.app/endpoints/data/video?id=${videoID}`, {
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
    .then(video => {
        document.title = `${video.releaseName} | Clippsly`;
    
        const videoTitle = video.isExplicit ? `${video.releaseName} 🅴` : video.releaseName;
        const verifiedBadge = video.releaseAuthor.authorVerified ? `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" title="Verified Badge">
                <circle cx="12" cy="12" r="10" stroke-width="2" fill="#1E90FF"/>
                <path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none"/>
            </svg>` : '';
    
        const videoHTML = `
            <div class="video-container" style="position: relative; width: 100%; padding-top: 56.25%; background: #000;">
                <video id="video-player" controls style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 100%; max-height: 100%; width: auto; height: auto;">
                    <source src="${video.additionalData.videoFile}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `;

        const authorHTML = `
            <div class="track-details">
                <h2 class="track-title">${videoTitle}</h2>
                <div class="video-author">
                    <img src="${video.releaseAuthor.authorAvatar}" 
                        alt="${video.releaseAuthor.authorDisplay}" 
                        class="author-avatar" 
                        onerror="this.onerror=null; this.src='https://cdn.clippsly.app/brand_assets/icons/default-artist.png';">
                    <p class="author-name">
                        <a href="/users/${video.releaseAuthor.authorUsername}" onclick="visitUserProfile('${video.releaseAuthor.authorUsername}')">
                            ${video.releaseAuthor.authorDisplay} ${verifiedBadge}<span class="author-username">@${video.releaseAuthor.authorUsername}</span>
                        </a>
                    </p>
                </div>
            </div>
        `;
    
        document.getElementById('track-data').innerHTML = videoHTML;
        document.getElementById('video-artist-data').innerHTML = authorHTML;
    
        updateDescription(video);
        
        document.getElementById('author-display').textContent = video.releaseAuthor.authorDisplay;
        loadMoreFromAuthor(video.releaseAuthor.authorUsername);
    })
    .catch(error => {
        console.error('Fetch error:', error);
        visitErrorPage(404);
    });    
}

function updateDescription(video) {
    const descriptionText = document.getElementById('description-text');
    const descriptionContainer = document.getElementById('description-container');

    let descriptionHTML = '';

    function formatDescriptionText(text) {
        text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+|mailto:[^\)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
        text = text.replace(/\[\[([^\]]+)\]\]/g, '<strong>$1</strong>');
        text = text.replace(/@([a-zA-Z0-9_]+)/g, '<a href="/users/$1" onclick="visitUserProfile(\'$1\')>@$1</a>');
        text = text.replace(/\\n/g, '<br>');

        return text;
    }

    if (video.additionalData.releaseDescription) {
        let formattedDescription = formatDescriptionText(video.additionalData.releaseDescription);

        descriptionHTML = `
            <div class="description-content">
                <p class="description-heading">Description</p>
                <p class="description-text">${formattedDescription}</p>
            </div>
        `;
        descriptionContainer.style.display = 'block';
    } else {
        descriptionContainer.style.display = 'none';
    }

    document.getElementById('description-container').innerHTML = descriptionHTML;
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