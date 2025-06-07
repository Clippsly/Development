function visitUserProfile(username) {
    event.preventDefault()
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    if (username) {
        
        document.querySelector('.container').innerHTML = `
        <div class="users" id="user-profile"></div>
            <div class="pagination" id="tabs" style="gap: 20px;">
                <button class="tab-button btn-secondary" id="tracks-tab">Tracks</button>
                <button class="tab-button btn-secondary" id="videos-tab">Videos</button>
                <button class="tab-button btn-secondary" id="posts-tab">Posts</button>
            </div>
            <div class="track-list" id="track-list"></div>
            <div class="track-list" id="video-list" style="display: none;"></div>
            <div class="post-list" id="post-list" style="margin-top: 20px; display: none;">
                <div class="posts-section" id="posts-section">
                    <div id="post-input-container" class="comment-input-container" style="display: none;">
                        <input type="text" id="post-input" class="comment-input" placeholder="Write a post... (max 300 characters)">
                        <button id="post-community" class="btn-secondary">Post</button>
                    </div>
                    <div id="posts-container"></div>
                </div>
            </div>
        `;
        
        document.getElementById('tracks-tab').addEventListener('click', function() {
            document.getElementById('track-list').style.display = '';
            document.getElementById('video-list').style.display = 'none';
            document.getElementById('post-list').style.display = 'none';
            loadTracks(username);
        });

        document.getElementById('videos-tab').addEventListener('click', function() {
            document.getElementById('track-list').style.display = 'none';
            document.getElementById('video-list').style.display = '';
            document.getElementById('post-list').style.display = 'none';
            loadVideos(username);
        });

        document.getElementById('posts-tab').addEventListener('click', function() {
            document.getElementById('track-list').style.display = 'none';
            document.getElementById('video-list').style.display = 'none';
            document.getElementById('post-list').style.display = 'block';
            loadPosts(username);
        });

        $.ajax({
            url: `https://api.clippsly.app/endpoints/data/user?username=${username}`,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionToken}`
            },
            success: function(response) {
                const user = response;
        
                document.title = `${user.displayName} | Clippsly`;
                window.history.pushState({}, '', `/users/${username}`);
        
                const badges = [];
                if (user.status.isAdmin) badges.push('<a data-tooltip="Administrator" href="/team" target="_blank"><img src="https://cdn.clippsly.app/brand_assets/badges/version_5/Moderators.png" class="badge-icon"></a>');
                if (user.status.isFeedback) badges.push('<a data-tooltip="Community Feedback" href="/contributor" target="_blank"><img src="https://cdn.clippsly.app/brand_assets/badges/version_5/Contributor.png" class="badge-icon"></a>');
                if (user.status.isPlus) badges.push('<a data-tooltip="Member" href="/membership"><img src="https://cdn.clippsly.app/brand_assets/badges/version_5/Plus.png" class="badge-icon"></a>');

                const connections = [];
                if (user.connections.roblox) connections.push(`<a href="https://roblox.com/users/${user.connections.roblox}/profile" target="_blank"><img src="https://cdn.clippsly.app/brand_assets/connection_icons/roblox-connection.png" class="connection-icon"></a>`);
                if (user.connections.youtube) connections.push(`<a href="https://youtube.com/${user.connections.youtube}" target="_blank"><img src="https://cdn.clippsly.app/brand_assets/connection_icons/youtube-connection.png" class="connection-icon"></a>`);
                if (user.connections.soundcloud) connections.push(`<a href="https://soundcloud.com/${user.connections.soundcloud}" target="_blank"><img src="https://cdn.clippsly.app/brand_assets/connection_icons/soundcloud-connection.png" class="connection-icon"></a>`);
                if (user.connections.twitch) connections.push(`<a href="https://twitch.tv/${user.connections.twitch}" target="_blank"><img src="https://cdn.clippsly.app/brand_assets/connection_icons/twitch-connection.png" class="connection-icon"></a>`);
                if (user.connections.twitter) connections.push(`<a href="https://x.com/${user.connections.twitter}" target="_blank"><img src="https://cdn.clippsly.app/brand_assets/connection_icons/twitter-connection.png" class="connection-icon"></a>`);
        
                const verifiedBadge = user.status.isVerified ? `
                    <svg data-tooltip="Verified" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" title="Verified Badge">
                        <circle cx="12" cy="12" r="10" stroke-width="2" fill="#1E90FF"/>
                        <path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none"/>
                    </svg>` : '';
        
                const moderatedBadge = user.status.isModerated ? `<h5><span class="badge badge-danger">Banned</span></h5>` : '';
                const privateBadge = user.status.isPrivate ? `<h5><span class="badge badge-secondary">Private</span></h5>` : '';
        
                const profileHTML = `
                    <div class="profile-banner" style="background-image: url('${user.banner}');">
                        <div class="badges">${badges.join('')}</div>
                        <div class="connections">${connections.join('')}</div>
                    </div>
                    <div class="profile-details">
                        <div class="avatar-container" bis_skin_checked="1">
                            <img class="profile-avatar" 
                            src="${user.avatar}" 
                            alt="${user.displayName}" 
                            onerror="this.onerror=null; this.src='https://cdn.clippsly.app/brand_assets/icons/default-artist.png';" 
                            class="profile-avatar">

                            <span class="online-indicator" id="online-indicator"></span>
                        </div>
                        <h2 id="user-username">${user.displayName} ${verifiedBadge}</h2>
                        ${moderatedBadge}
                        ${privateBadge}
                    </div>
                `;
        
                $('#user-profile').html(profileHTML);

                const tierClasses = ['label-lite', 'label-standard', 'label-producer', 'label-staff'];
                const userUsername = document.getElementById('user-username');
                const currentTier = user.status.membershipTier ?? 0;

                userUsername.classList.add(tierClasses[currentTier]);
        
                const onlineIndicator = document.getElementById('online-indicator');
        
                if (user.status.isOnline) {
                    onlineIndicator.style.backgroundColor = '#00ff00';
                    onlineIndicator.title = 'Online';
                } else {
                    onlineIndicator.style.backgroundColor = '#8c8c8c';
                    const lastOnlineDate = new Date(user.lastOnline * 1000).toLocaleString();
                    onlineIndicator.title = `Last online: ${lastOnlineDate}`;
                }

                const postinput = document.getElementById('post-input-container');
                if (user.status.isAccountOwner) {
                    postinput.style.display = '';
                }

                loadTracks(username);
            },
            error: function() {
                visitErrorPage(404);
            }
        });        
    } else {
        visitErrorPage(404);
    }

    document.getElementById('post-community').addEventListener('click', function() {
        const postInput = document.getElementById('post-input');
        const post = postInput.value.trim();
        if (post) {
            this.style.display = 'none';

            fetch('https://api.clippsly.app/endpoints/functions/user-post-add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionToken}`
                },
                body: JSON.stringify({
                    content: post
                })
            })            
            .then(response => response.json())
            .then(response => {
                postInput.value = '';
                loadPosts(username);
                this.style.display = '';
            })
            .catch(error => {
                this.style.display = '';
            });
        }
    });
}

function loadTracks(username) {
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    $.ajax({
        url: `https://api.clippsly.app/endpoints/data/track?username=${username}`,
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${sessionToken}`
        },
        success: function(tracks) {
            const trackListHTML = tracks.reverse().map(track => {
                const verifiedBadge = track.releaseAuthor.authorVerified ? `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" title="Verified Badge">
                    <circle cx="12" cy="12" r="10" stroke-width="2" fill="#1E90FF"/>
                    <path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none"/>
                </svg>` : '';

                const truncatedTitle = track.releaseName.length > 10 ? track.releaseName.substring(0, 10) + '...' : track.releaseName;
                const truncatedArtist = track.releaseAuthor.authorDisplay.length > 10 ? track.releaseAuthor.authorDisplay.substring(0, 10) + '...' : track.releaseAuthor.authorDisplay;
                return `
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
            }).join('');

            $('#track-list').html(trackListHTML);
        },
        error: function() {
            $('#track-list').html('');
        }
    });
}

function loadVideos(username, page = 1, limit = 10) {
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    $.ajax({
        url: `https://api.clippsly.app/endpoints/data/video?username=${username}&page=${page}&limit=${limit}`,
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${sessionToken}`
        },
        success: function(response) {
            const videos = response.videos;
            const pagination = response.pagination;

            const videoListHTML = videos.map(video => {
                const verifiedBadge = video.releaseAuthor.authorVerified ? `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" title="Verified Badge">
                    <circle cx="12" cy="12" r="10" stroke-width="2" fill="#1E90FF"/>
                    <path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none"/>
                </svg>` : '';

                const truncatedTitle = video.releaseName.length > 10 ? video.releaseName.substring(0, 10) + '...' : video.releaseName;
                const truncatedArtist = video.releaseAuthor.authorDisplay.length > 10 ? video.releaseAuthor.authorDisplay.substring(0, 10) + '...' : video.releaseAuthor.authorDisplay;
                
                return `
                    <div class="track">
                        <div class="cover">
                            <a href="/video/${video.releaseID}" onclick="visitVideoPage(${video.releaseID});">
                                <img src="${video.additionalData.releaseCoverArt || 'https://cdn.clippsly.app/brand_assets/icons/default-artist.png'}" 
                                    alt="Video Thumbnail" 
                                    onerror="this.onerror=null; this.src='https://cdn.clippsly.app/brand_assets/icons/default-artist.png';">
                            </a>
                        </div>
                        <div class="details">
                            <a href="/users/${video.releaseAuthor.authorUsername}" onclick="visitUserProfile('${video.releaseAuthor.authorUsername}')">
                                <img src="${video.releaseAuthor.authorAvatar}" 
                                    alt="${truncatedArtist}" 
                                    class="profile-pic" 
                                    onerror="this.onerror=null; this.src='https://cdn.clippsly.app/brand_assets/icons/default-artist.png';">
                            </a>
                            <div class="text">
                                <a href="/video/${video.releaseID}" onclick="visitVideoPage(${video.releaseID});"><p class="track-title">${truncatedTitle}</p></a>
                                <a href="/users/${video.releaseAuthor.authorUsername}" onclick="visitUserProfile('${video.releaseAuthor.authorUsername}')"><p>${truncatedArtist} ${verifiedBadge}</p></a>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            const paginationHTML = pagination.totalPages > 1 ? `
                <div class="pagination-controls">
                    ${Array.from({length: pagination.totalPages}, (_, i) => i + 1).map(pageNum => `
                        <button class="btn-secondary ${pageNum === pagination.currentPage ? 'active' : ''}" 
                                onclick="loadVideos('${username}', ${pageNum}, ${pagination.itemsPerPage})">
                            ${pageNum}
                        </button>
                    `).join('')}
                </div>
            ` : '';

            $('#video-list').html(videoListHTML + paginationHTML);
        },
        error: function() {
            $('#video-list').html('No videos available.');
        }
    });
}

function loadPosts(username) {
    $.ajax({
        url: `https://api.clippsly.app/endpoints/functions/user-posts?username=${username}&page=1`,
        method: 'GET',
        success: function(response) {
            const user = response.postList;
            const postsHTML = user.map(post => {
                const verifiedBadge = post.userInfo.userVerified ? `
                    <svg data-tooltip="Verified" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" title="Verified Badge">
                        <circle cx="12" cy="12" r="10" stroke-width="2" fill="#1E90FF"/>
                        <path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none"/>
                    </svg>` : '';

                return `
                    <div class="cliptivity">
                        <img src="${post.userInfo.userAvatar}" alt="User Avatar" class="cliptivity-avatar" onerror="this.onerror=null; this.src='https://cdn.clippsly.app/brand_assets/icons/default-artist.png';">
                        <div class="cliptivity-content">
                            <p class="cliptivity-author">
                                <a href="/users/${post.userInfo.userUsername}" onclick="visitUserProfile('${post.userInfo.userUsername}')">
                                    ${post.userInfo.userDisplay}
                                </a>
                                <span class="cliptivity-action">${post.postContent}</span>
                            </p>
                            <p class="cliptivity-date">${new Date(post.postDate * 1000).toLocaleString()}</p>
                        </div>
                    </div>
                `;
            }).join('');

            $('#posts-container').html(postsHTML);
        },
        error: function() {
            $('#posts-container').html('No posts available.');
        }
    });
}