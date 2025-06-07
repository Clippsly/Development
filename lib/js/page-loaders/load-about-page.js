function visitAboutPage() {
    event.preventDefault();

    document.querySelector('.container').innerHTML = `
        <div class="about-section">
            <h2>About Clippsly</h2>
            <p>Clippsly Ltd, founded in 2022, is a dynamic nonprofit dedicated to the global music community. As a music publisher and sharing platform, we collaborate with talented artists and songwriters worldwide. Our mission is to revolutionize the music industry by offering an innovative space for musicians to showcase their creative work and reach a broader audience. Join us in shaping the future of music.</p>
        </div>

        <div class="online-users">
            <h3>Stats <span class="badge badge-danger">Live</span></h3>
            <div class="container">
                <div class="row justify-content-center g-1 mb-4">
                    <div class="col-auto">
                    <div class="alert alert-info mt-2 mb-0" style="border-radius: 15px; background-color: #1E1E1E; color: white;">
                        <div class="card-custom">User(s) currently online</div>
                        <h3 id="online-users-count"></h3>
                    </div>
                    </div>
                    <div class="col-auto">
                    <div class="alert alert-info mt-2 mb-0" style="border-radius: 15px; background-color: #1E1E1E; color: white;">
                        <div class="card-custom">User(s) active in last 30 days</div>
                        <h3 id="active-users-30days"></h3>
                    </div>
                    </div>
                    <div class="col-auto">
                    <div class="alert alert-info mt-2 mb-0" style="border-radius: 15px; background-color: #1E1E1E; color: white;">
                        <div class="card-custom">Total platform user(s)</div>
                        <h3 id="total-users-count"></h3>
                    </div>
                    </div>
                </div>

                <div class="row justify-content-center g-1">
                    <div class="col-auto">
                    <div class="alert alert-info mt-2 mb-0" style="border-radius: 15px; background-color: #1E1E1E; color: white;">
                        <div class="card-custom">Moderated user(s)</div>
                        <h3 id="moderated-users-count"></h3>
                    </div>
                    </div>
                    <div class="col-auto">
                    <div class="alert alert-info mt-2 mb-0" style="border-radius: 15px; background-color: #1E1E1E; color: white;">
                        <div class="card-custom">Total Clippsly Plus user(s)</div>
                        <h3 id="plus-users-count"></h3>
                    </div>
                    </div>
                    <div class="col-auto">
                    <div class="alert alert-info mt-2 mb-0" style="border-radius: 15px; background-color: #1E1E1E; color: white;">
                        <div class="card-custom">Total ClipCoins in circulation</div>
                        <h3 id="coin-count"></h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="team-section">
            <h3>Meet Our Team</h3>
            <div id="team-members-list" class="user-list"></div>
        </div>

        <div class="feedback-team">
            <h3>Feedback Team</h3>
            <div id="feedback-team-list" class="user-list"></div>
        </div>
    `;

    window.history.pushState({}, '', '/about');
    document.title = `About | Clippsly`;

    fetch('https://api.clippsly.app/endpoints/visual/team')
        .then(response => response.json())
        .then(data => {
            function formatNumber(num) {
                if (num >= 1e9) return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
                if (num >= 1e6) return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
                if (num >= 1e3) return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'k';
                return num;
            }
            
            const onlineUsersCount = data.onlineUsersCount;
            const activePast30Days = data.activePast30Days;
            const totalUsersCount = data.totalUsersCount;
            const moderatedUsersCount = data.moderatedUsersCount;
            const plusUsersCount = data.plusUsersCount;
            const totalBalanceCirculation = data.totalBalanceCirculation;
            
            document.getElementById('online-users-count').innerText = formatNumber(onlineUsersCount);
            document.getElementById('active-users-30days').innerText = formatNumber(activePast30Days);
            document.getElementById('total-users-count').innerText = formatNumber(totalUsersCount);
            document.getElementById('moderated-users-count').innerText = formatNumber(moderatedUsersCount);
            document.getElementById('plus-users-count').innerText = formatNumber(plusUsersCount);
            document.getElementById('coin-count').innerText = formatNumber(totalBalanceCirculation);

            const sortedTeamMembers = data.teamMembers.sort((a, b) => {
                const rankOrder = { 'Lead': 1, 'Management': 2, 'Team': 3, 'Service Account': 4 };
                return rankOrder[a.authorRank] - rankOrder[b.authorRank];
            });

            let teamHTML = '';
            sortedTeamMembers.forEach(member => {
                const truncatedDisplayName = member.authorDisplay.length > 10 ? member.authorDisplay.substring(0, 10) + '...' : member.authorDisplay;

                teamHTML += `
                    <div class="user">
                        <div class="avatar">
                            <a href="/users/${member.authorUsername}" onclick="visitUserProfile('${member.authorUsername}')">
                                <img src="${member.authorAvatar}" alt="${member.authorDisplay}" onerror="this.onerror=null; this.src='https://cdn.clippsly.app/brand_assets/icons/default-artist.png';">
                            </a>
                        </div>
                        <div class="user-details">
                            <p class="displayname">${truncatedDisplayName}</p>
                            <p class="username">@${member.authorUsername}</p>
                        </div>
                    </div>
                `;
            });
            document.getElementById('team-members-list').innerHTML = teamHTML;

            let feedbackHTML = '';
            data.feedbackTeam.forEach(member => {
                const truncatedDisplayName = member.authorDisplay.length > 10 ? member.authorDisplay.substring(0, 10) + '...' : member.authorDisplay;

                feedbackHTML += `
                    <div class="user">
                        <div class="avatar">
                            <a href="/users/${member.authorUsername}" onclick="visitUserProfile('${member.authorUsername}')">
                                <img src="${member.authorAvatar}" alt="${member.authorDisplay}" onerror="this.onerror=null; this.src='https://cdn.clippsly.app/brand_assets/icons/default-artist.png';">
                            </a>
                        </div>
                        <div class="user-details">
                            <p class="displayname">${truncatedDisplayName}</p>
                            <p class="username">@${member.authorUsername}</p>
                        </div>
                    </div>
                `;
            });
            document.getElementById('feedback-team-list').innerHTML = feedbackHTML;

        })
        .catch(error => console.error('Error fetching data:', error));
}

requestPageLoad();