function requestSearchQuery(query) {
    event.preventDefault()
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    
    document.querySelector('.container').innerHTML = `
        <div class="search-results" id="search-results">
            <div class="user-list" id="users-results"></div>
            <div class="track-list" id="tracks-results"></div>
        </div>
    `;

    window.history.pushState({}, '', `/search?query=${query}`);
    document.title = `${query} | Clippsly`;

    fetch(`https://api.clippsly.app/endpoints/functions/search-results?query=${query}`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${sessionToken}`
        }
    })
        .then(response => response.json())
        .then(data => {
            displayUsers(data.users);
            displayTracks(data.tracks);
        })
        .catch(error => console.error('Error:', error));
}

function displayUsers(users) {
    const usersResults = document.getElementById('users-results');
    usersResults.innerHTML = '';

    const tierClasses = ['label-lite', 'label-standard', 'label-producer'];

    users.forEach(user => {
        const verifiedBadge = user.authorVerified ? `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" title="Verified Badge">
            <circle cx="12" cy="12" r="10" stroke-width="2" fill="#1E90FF"/>
            <path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none"/>
        </svg>` : '';

        const truncatedDisplayName = user.authorDisplay.length > 10
            ? user.authorDisplay.substring(0, 10) + '...'
            : user.authorDisplay;

        const membershipTier = user.authorMembershipTier;
        const displayClass = tierClasses[membershipTier] || '';

        const userHTML = `
            <div class="user">
                <div class="avatar">
                    <a href="/users/${user.authorUsername}" onclick="visitUserProfile('${user.authorUsername}')">
                        <img src="${user.authorAvatar}" 
                            alt="${user.authorDisplay}" 
                            onerror="this.onerror=null; this.src='https://cdn.clippsly.app/brand_assets/icons/default-artist.png';">
                    </a>
                </div>
                <div class="user-details">
                    <p class="displayname ${displayClass}">${truncatedDisplayName} ${verifiedBadge}</p>
                    <p class="username">@${user.authorUsername}</p>
                </div>
            </div>
        `;
        usersResults.innerHTML += userHTML;
    });
}

function displayTracks(tracks) {
    const tracksResults = document.getElementById('tracks-results');
    tracksResults.innerHTML = '';

    tracks.forEach(track => {
        const verifiedBadge = track.releaseAuthor.authorVerified ? `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" title="Verified Badge">
            <circle cx="12" cy="12" r="10" stroke-width="2" fill="#1E90FF"/>
            <path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none"/>
        </svg>` : '';

        const truncatedTitle = track.releaseName.length > 10 ? track.releaseName.substring(0, 10) + '...' : track.releaseName;
        const truncatedArtist = track.releaseAuthor.authorDisplay.length > 10 ? track.releaseAuthor.authorDisplay.substring(0, 10) + '...' : track.releaseAuthor.authorDisplay;

        const trackHTML = `
            <div class="track">
                <div class="cover">
                    <a href="/track/${track.releaseID}" onclick="visitTrackPage(${track.releaseID})">
                        <img src="${track.additionalData.releaseCoverArt || 'https://cdn.clippsly.app/brand_assets/icons/default-artist.png'}" 
                            alt="Track Cover" 
                            onerror="this.onerror=null; this.src='https://cdn.clippsly.app/brand_assets/icons/default-artist.png';">
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
                        <img src="${track.releaseAuthor.authorAvatar}" 
                            alt="${truncatedArtist}" 
                            class="profile-pic" 
                            onerror="this.onerror=null; this.src='https://cdn.clippsly.app/brand_assets/icons/default-artist.png';">
                    </a>
                    <div class="text">
                        <a href="/track/${track.releaseID}" onclick="visitTrackPage(${track.releaseID})"><p class="track-title">${truncatedTitle}</p></a>
                        <a href="/users/${track.releaseAuthor.authorUsername}" onclick="visitUserProfile('${track.releaseAuthor.authorUsername}')"><p >${truncatedArtist} ${verifiedBadge}</p></a>
                    </div>
                </div>
            </div>
        `;
        tracksResults.innerHTML += trackHTML;
    });
}

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        requestSearchQuery(searchInput.value);
    }
});