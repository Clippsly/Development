async function visitSettingsPage(queryParams) {
    event.preventDefault();
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    document.title = `Settings | Clippsly`;
    window.history.pushState({}, '', '/settings');

    if (!(queryParams instanceof URLSearchParams)) {
        queryParams = new URLSearchParams();
    }

    const code = queryParams.get('code');
    const state = queryParams.get('state');

    const apiUrl = 'https://api.clippsly.app/endpoints/data/current-session';
    const headers = {
        'Authorization': `Bearer ${sessionToken}`
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData = await response.json();

        const robloxConnected = userData?.connections?.roblox ? true : false;
        const youtubeConnected = userData?.connections?.youtube ? true : false;
        const twitchConnected = userData?.connections?.twitch ? true : false;
        const soundcloudConnected = userData?.connections?.soundcloud ? true : false;
        const discordConnected = userData?.connections?.discord ? true : false;
        const twitterConnected = userData?.connections?.twitter ? true : false;
        const steamConnected = userData?.connections?.steam ? true : false;

        if (code && state) {
            document.querySelector('.container').innerHTML = `
                <div class="container mt-5">
                    <div id="auth-finalizing" class="row">
                        <div class="col-md-6 offset-md-3">
                            <h2 class="text-center">Finalizing Authentication...</h2>
                            <p class="text-center">Please wait while we complete the sign in process.</p>
                        </div>
                    </div>
                </div>
            `;
            finalizeOAuthConnection(code, state);
        } else {

            document.querySelector('.container').innerHTML = `
                <h1>Settings</h1>
                <div class="container mt-5">
                    <div id="login-section" class="row">
                        <div class="col-md-6 offset-md-3">
                            <h2 class="text-center">Change Username</h2>
                            <form id="username-settings-form">
                                <div class="form-group">
                                    <label for="new_username">New username</label>
                                    <input type="text" class="form-control" id="new_username" required>
                                </div>
                                <button type="submit" id="submitUsername" class="login-btn default">Change</button>
                            </form>
                        </div>

                        <div class="col-md-6 offset-md-3">
                            <h2 class="text-center">Change Display Name</h2>
                            <form id="displayname-settings-form">
                                <div class="form-group">
                                    <label for="new_displayname">New display name</label>
                                    <input type="text" class="form-control" id="new_displayname" required>
                                </div>
                                <button type="submit" id="submitDisplayname" class="login-btn default">Change</button>
                            </form>
                        </div>

                        <div class="col-md-6 offset-md-3">
                            <h2 class="text-center">Change Description</h2>
                            <form id="description-settings-form">
                                <div class="form-group">
                                    <label for="new_displayname">New description</label>
                                    <textarea class="form-control" id="new_description" required></textarea>
                                </div>
                                <button type="submit" id="submitDescription" class="login-btn default">Change</button>
                            </form>
                        </div>

                        <div class="col-md-6 offset-md-3">
                            <h2 class="text-center">Change Email</h2>
                            <form id="email-settings-form">
                                <div class="form-group">
                                    <label for="new_email">New email</label>
                                    <input type="email" class="form-control" id="new_email" required>
                                </div>
                                <button type="submit" id="submitEmail" class="login-btn default">Change</button>
                            </form>
                        </div>

                        <div class="col-md-6 offset-md-3">
                            <h2 class="text-center">Change Password</h2>
                            <form id="password-settings-form">
                                <div class="form-group">
                                    <label for="new_password">New password</label>
                                    <input type="password" class="form-control" id="new_password" required>
                                    <small class="form-text text-muted">
                                        Password must be at least 8 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character (!@#$%^&*()-_=+).
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="new_password_repeat">Confirm new password</label>
                                    <input type="password" class="form-control" id="new_password_repeat" required>
                                </div>
                                <div id="password-error" class="mt-2 text-danger"></div>
                                <button type="submit" id="submitPassword" class="login-btn default">Change Password</button>
                            </form>
                        </div>

                        <div class="col-md-6 offset-md-3">
                            <h2 class="text-center">Authentication Settings</h2>
                            <form id="auth-settings-form">
                                <div class="form-group">
                                    <label for="auth_type">Authentication Method</label>
                                    <select class="form-control" id="auth_type">
                                        <option value="none">None</option>
                                        <option value="email">Email Verification</option>
                                        <option value="2fa">Two-Factor Authentication (2FA)</option>
                                    </select>
                                    <small class="form-text text-muted">
                                        <strong>None:</strong> No additional verification when logging in.<br>
                                        <strong>Email:</strong> Verify via email when logging in from a new device.<br>
                                        <strong>2FA:</strong> Require authenticator app code for all logins.
                                    </small>
                                </div>
                                <button type="submit" id="submitAuthType" class="login-btn default">Update Authentication Method</button>
                                <div id="auth-type-error" class="mt-2 text-danger"></div>
                            </form>
                        </div>

                        <div class="col-md-6 offset-md-3">
                            <h2 class="text-center">Setup 2FA</h2>
                            <form id="2fa-settings-form">
                                <button type="submit" id="submitAuthType" class="login-btn default">Start setup</button>
                            </form>
                        </div>

                        <div class="col-md-6 offset-md-3">
                            <h2 class="text-center">Change Avatar</h2>
                            <form id="avatar-settings-form">
                                <div class="form-group">
                                    <label for="new_avatar">New avatar</label>
                                    <input type="file" class="form-control" id="new_avatar" accept=".png,.jpg,.jpeg" required>
                                </div>
                                <button type="submit" id="submitAvatar" class="login-btn default">Change</button>
                            </form>
                        </div>

                        <div class="col-md-6 offset-md-3">
                            <h2 class="text-center">Change Banner</h2>
                            <form id="banner-settings-form">
                                <div class="form-group">
                                    <label for="new_banner">New banner</label>
                                    <input type="file" class="form-control" id="new_banner" required>
                                </div>
                                <button type="submit" id="submitBanner" class="login-btn default">Change</button>
                            </form>
                        </div>

                        <div class="col-md-6 offset-md-3">
                            <h2 class="text-center">Connections</h2>
                            <button id="${youtubeConnected ? 'disconnect-youtube' : 'connect-youtube'}" class="login-btn youtube">
                                ${youtubeConnected ? 'Disconnect YouTube' : 'Connect YouTube'}
                            </button>
                            <button id="${twitchConnected ? 'disconnect-twitch' : 'connect-twitch'}" class="login-btn twitch">
                                ${twitchConnected ? 'Disconnect Twitch' : 'Connect Twitch'}
                            </button>
                            <button id="${robloxConnected ? 'disconnect-roblox' : 'connect-roblox'}" class="login-btn roblox">
                                ${robloxConnected ? 'Disconnect Roblox' : 'Connect Roblox'}
                            </button>
                            <button id="${soundcloudConnected ? 'disconnect-soundcloud' : 'connect-soundcloud'}" class="login-btn soundcloud">
                                ${soundcloudConnected ? 'Disconnect SoundCloud' : 'Connect SoundCloud'}
                            </button>
                            <button id="${discordConnected ? 'disconnect-discord' : 'connect-discord'}" class="login-btn discord">
                                ${discordConnected ? 'Disconnect Discord' : 'Connect Discord'}
                            </button>
                            <button id="${twitterConnected ? 'disconnect-twitter' : 'connect-twitter'}" class="login-btn twitter">
                                ${twitterConnected ? 'Disconnect Twitter' : 'Connect Twitter'}
                            </button>
                        </div>
                        <div class="col-md-6 offset-md-3">
                            <h2 class="text-center">Advanced actions</h2>
                            <button id="deactivate-account" class="login-btn default">
                                Deactivate Account
                            </button>
                            <button id="close-account" class="login-btn default">
                                Close Account
                            </button>
                        </div>
                    </div>
                </div>
            `;
            setupConnectionEventHandlers(queryParams);
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }

    // Add submit event listener once
    if (!document.submitListenerAdded) {
        document.addEventListener('submit', handleFormSubmit);
        document.submitListenerAdded = true;
    }

    function finalizeOAuthConnection(code, state) {
        $.ajax({
            url: 'https://api.clippsly.app/endpoints/authentication/account-social-connect',
            method: 'POST',
            contentType: 'application/json',
            headers: {
                'Authorization': `Bearer ${sessionToken}`
            },
            data: JSON.stringify({
                type: 'callback',
                version: 'production',
                state: state,
                code: code
            }),
            success: function(response) {
                console.log("OAuth Finalization Response (raw):", response);
    
                let parsedResponse;
                if (typeof response === 'string') {
                    try {
                        parsedResponse = JSON.parse(response);
                    } catch (e) {
                        console.error("Error parsing the response as JSON:", e);
                        showConnectionFailedMessage('An unexpected error occurred while parsing the response.');
                        return;
                    }
                } else {
                    parsedResponse = response;
                }

                if (parsedResponse.code === 200) {
                    console.log('Success:', parsedResponse);
                    window.close();
                } else {
                    console.error('Unexpected response:', parsedResponse);
                    showConnectionFailedMessage(parsedResponse.error || 'An unexpected error occurred.');
                }
            },
            error: function(xhr, status, error) {
                console.error("AJAX Error:", status, error);
                console.error("Response Text:", xhr.responseText);
                showConnectionFailedMessage(xhr.responseText || 'An unexpected error occurred.');
            }
        });
    }

    function showConnectionFailedMessage(errorMessage = 'An error occurred during the connecting process. Please try again.') {
        document.querySelector('.container').innerHTML = `
            <div class="container mt-5">
                <div id="auth-error" class="row">
                    <div class="col-md-6 offset-md-3">
                        <h2 class="text-center text-danger">Connection Failed</h2>
                        <p class="text-center">${errorMessage}</p>
                    </div>
                </div>
            </div>
        `;
    }

    function setupConnectionEventHandlers(queryParams) {
        $(document).ready(function() {
            window.addEventListener('storage', function(event) {
                if (event.key === 'sessionToken') {
                    window.location.reload();
                }
            });

            // Show 2FA setup section when 2FA is selected in dropdown
            $('#auth_type').on('change', function() {
                if ($(this).val() === '2fa') {
                    $('#2fa-setup').show();
                } else {
                    $('#2fa-setup').hide();
                }
            });
            
            // Handle 2FA setup button click
            $('#setup2fa').on('click', function(e) {
                e.preventDefault();
                const sessionToken = getCookie('CLIPSESSIONTOKEN');
                
                // Show loading state
                $(this).prop('disabled', true).text('Loading...');
                
                // Make API request to generate 2FA secret and QR code
                fetch('https://api.clippsly.app/endpoints/settings/update-2fa', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${sessionToken}`,
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.success) {
                        // Display QR code and secret
                        $('#qr-code-image').attr('src', data.qr_code_url);
                        $('#secret-key').text(data.secret);
                        $('#qr-code-container').show();
                        
                        // Reset button state
                        $('#setup2fa').prop('disabled', false).text('Add 2FA app');
                        
                        // Show success message
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: data.message || 'QR code generated successfully. Please scan it with your authenticator app.',
                            confirmButtonText: 'Got it!'
                        });
                    } else {
                        throw new Error(data.message || 'Failed to generate 2FA QR code');
                    }
                })
                .catch(error => {
                    // Reset button state
                    $('#setup2fa').prop('disabled', false).text('Add 2FA app');
                    
                    // Show error message
                    let errorMessage = 'Failed to set up 2FA. Please try again.';
                    
                    if (error.response) {
                        if (error.response.status === 400) {
                            errorMessage = 'Invalid or missing authorization header.';
                        } else if (error.response.status === 403) {
                            errorMessage = 'Invalid or expired session. Please log in again.';
                        } else if (error.response.status === 500) {
                            errorMessage = 'Server error. Please try again later.';
                        }
                    }
                    
                    Swal.fire({
                        icon: 'error',
                        title: 'Oopsie!',
                        text: errorMessage,
                        confirmButtonText: 'Awww!'
                    });
                });
            });

            function removeOAuth(platform) {
                $.ajax({
                    url: 'https://api.clippsly.app/endpoints/authentication/account-social-connect',
                    method: 'POST',
                    contentType: 'application/json',
                    headers: {
                        'Authorization': `Bearer ${sessionToken}`
                    },
                    data: JSON.stringify({
                        type: 'disconnect',
                        version: 'production',
                        platform: platform
                    }),
                    success: function(response) {
                        console.log("OAuth API Response (raw):", response);
                        
                        let parsedResponse;
                        if (typeof response === 'string') {
                            try {
                                parsedResponse = JSON.parse(response);
                            } catch (e) {
                                console.error("Error parsing the response as JSON:", e);
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Error parsing the response.',
                                });
                                return;
                            }
                        } else {
                            parsedResponse = response;
                        }
            
                        if (parsedResponse.code) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success!',
                                text: `${parsedResponse.response}`,
                                confirmButtonText: 'Okay'
                            }).then(() => {
                                window.location.reload(); 
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Unexpected response from the server.',
                            });
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error("API Error:", error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Error initiating OAuth flow. Please try again later.',
                        });
                    }
                });
            }            
    
            function initiateOAuth(platform) {
                $.ajax({
                    url: 'https://api.clippsly.app/endpoints/authentication/account-social-connect',
                    method: 'POST',
                    contentType: 'application/json',
                    headers: {
                        'Authorization': `Bearer ${sessionToken}`
                    },
                    data: JSON.stringify({
                        type: 'connection',
                        version: 'production',
                        platform: platform
                    }),
                    success: function(response) {
                        console.log("OAuth API Response (raw):", response);
                
                        let parsedResponse;
                        if (typeof response === 'string') {
                            try {
                                parsedResponse = JSON.parse(response);
                            } catch (e) {
                                console.error("Error parsing the response as JSON:", e);
                                return;
                            }
                        } else {
                            parsedResponse = response;
                        }
                
                        if (parsedResponse.oauth_url) {
                            let oauthUrl = decodeURIComponent(parsedResponse.oauth_url);
                            console.log("Decoded OAuth URL:", oauthUrl);
                
                            const oauthWindow = window.open(oauthUrl, 'OAuthWindow', 'width=500,height=600');
                
                            if (!oauthWindow || oauthWindow.closed || typeof oauthWindow.closed == 'undefined') {
                                window.location.href = oauthUrl;
                            } else {
                                function handleOAuthMessage(event) {
                                    if (event.origin === 'https://clippsly.app') {
                                        if (event.data.type === 'oauthSuccess' && event.data.session_token) {
                                            Swal.fire({
                                                icon: 'success',
                                                title: 'Success!',
                                                text: `Your ${platform} account has been connected!`,
                                                confirmButtonText: 'Yippee!'
                                            }).then(() => {
                                                oauthWindow.close();
                                                window.location.reload();
                                            });
                                        } else if (event.data.type === 'oauthFailure') {
                                            oauthWindow.document.body.innerHTML = `
                                                <div class="container mt-5">
                                                    <div id="auth-error" class="row">
                                                        <div class="col-md-6 offset-md-3">
                                                            <h2 class="text-center text-danger">Connection Failed</h2>
                                                            <p class="text-center">${event.data.message}</p>
                                                            <p class="text-center">You can close this window.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            `;
                                        }
                                    }
                                }
                                window.addEventListener('message', handleOAuthMessage);
            
                                oauthWindow.addEventListener('beforeunload', function() {
                                    window.removeEventListener('message', handleOAuthMessage);
                                });
                            }
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'OAuth URL not found in the response.',
                            });
                        }
                    },
                    error: function(xhr, status, error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Error initiating OAuth flow. Please try again later.',
                        });
                    }
                });
            }        
    
            $('#connect-youtube').on('click', function() {
                initiateOAuth('youtube');
            });
    
            $('#connect-twitch').on('click', function() {
                initiateOAuth('twitch');
            });
    
            $('#connect-roblox').on('click', function() {
                initiateOAuth('roblox');
            });

            $('#connect-soundcloud').on('click', function() {
                initiateOAuth('soundcloud');
            });

            $('#connect-discord').on('click', function() {
                initiateOAuth('discord');
            });

            $('#connect-twitter').on('click', function() {
                initiateOAuth('twitter');
            });

            $('#disconnect-youtube').on('click', function() {
                removeOAuth('youtube');
            });
    
            $('#disconnect-twitch').on('click', function() {
                removeOAuth('twitch');
            });
    
            $('#disconnect-roblox').on('click', function() {
                removeOAuth('roblox');
            });

            $('#disconnect-soundcloud').on('click', function() {
                removeOAuth('soundcloud');
            });

            $('#disconnect-discord').on('click', function() {
                removeOAuth('discord');
            });

            $('#disconnect-twitter').on('click', function() {
                removeOAuth('twitter');
            });

            $('#deactivate-account').on('click', function() {
                accountAction('deactivateAccount');
            });

            $('#close-account').on('click', function() {
                accountAction('closeAccount');
            });
        });
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    if (e.target && e.target.id === 'username-settings-form') {
        submitUsernameForm(e);
    } else if (e.target && e.target.id === 'displayname-settings-form') {
        submitDisplaynameForm(e);
    } else if (e.target && e.target.id === 'description-settings-form') {
        submitDescriptionForm(e);
    } else if (e.target && e.target.id === 'avatar-settings-form') {
        submitAvatarForm(e);
    } else if (e.target && e.target.id === 'banner-settings-form') {
        submitBannerForm(e);
    } else if (e.target && e.target.id === 'email-settings-form') {
        submitEmailForm(e);
    } else if (e.target && e.target.id === 'password-settings-form') {
        submitPasswordForm(e);
    } else if (e.target && e.target.id === 'auth-settings-form') {
        submitAuthTypeForm(e);
    } else if (e.target && e.target.id === '2fa-settings-form') {
        submit2faForm(e);
    }
}

function submitUsernameForm(event) {
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    event.preventDefault();

    var newUserName = document.getElementById("new_username").value.trim();
    document.getElementById("submitUsername").style.display = "none";

    if (newUserName === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oopsie!',
            text: 'Please enter a username.',
            confirmButtonText: 'Awww!'
        }).then(() => {
            document.getElementById("submitUsername").style.display = "block";
        });
        return;
    }

    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: 'Are you sure you want to change your username? You won\'t be able to change it back for the next 7 days.',
        showCancelButton: true,
        confirmButtonText: 'Yes, change it!',
        cancelButtonText: 'No, keep it as is'
    }).then((result) => {
        if (result.isConfirmed) {
            var formData = {
                new_username: newUserName
            };

            axios.post('https://api.clippsly.app/endpoints/settings/update-user', formData, {
                headers: {
                    'Authorization': `Bearer ${sessionToken}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.data)
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your username has been changed!',
                    confirmButtonText: 'Yippee!'
                }).then(() => {
                    document.getElementById("submitUsername").style.display = "block";
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oopsie!',
                    text: error.message,
                    confirmButtonText: 'Awww!'
                }).then(() => {
                    document.getElementById("submitUsername").style.display = "block";
                });
            });
        } else {
            document.getElementById("submitUsername").style.display = "block";
        }
    });
}

function submitDisplaynameForm(event) {
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    event.preventDefault();

    var newDisplayName = document.getElementById("new_displayname").value.trim();
    document.getElementById("submitDisplayname").style.display = "none";

    if (newDisplayName === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oopsie!',
            text: 'Please enter a display name.',
            confirmButtonText: 'Awww!'
        }).then(() => {
            document.getElementById("submitDisplayname").style.display = "block";
        });
        return;
    }

    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: 'Are you sure you want to change your display name? You won\'t be able to change it back for the next 3 days.',
        showCancelButton: true,
        confirmButtonText: 'Yes, change it!',
        cancelButtonText: 'No, keep it as is'
    }).then((result) => {
        if (result.isConfirmed) {
            var formData = {
                new_displayname: newDisplayName
            };

            axios.post('https://api.clippsly.app/endpoints/settings/update-display', formData, {
                headers: {
                    'Authorization': `Bearer ${sessionToken}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.data)
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your display name has been changed!',
                    confirmButtonText: 'Yippee!'
                }).then(() => {
                    document.getElementById("submitDisplayname").style.display = "block";
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oopsie!',
                    text: error.message,
                    confirmButtonText: 'Awww!'
                }).then(() => {
                    document.getElementById("submitDisplayname").style.display = "block";
                });
            });
        } else {
            document.getElementById("submitDisplayname").style.display = "block";
        }
    });
}

function submitDescriptionForm(event) {
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    event.preventDefault();

    var newDescription = document.getElementById("new_description").value.trim();
    document.getElementById("submitDescription").style.display = "none";

    if (newDescription === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oopsie!',
            text: 'Please enter a description.',
            confirmButtonText: 'Awww!'
        }).then(() => {
            document.getElementById("submitDescription").style.display = "block";
        });
        return;
    }

    var formData = {
        new_description: newDescription
    };

    axios.post('https://api.clippsly.app/endpoints/settings/update-description', formData, {
        headers: {
            'Authorization': `Bearer ${sessionToken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.data)
    .then(data => {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your description has been changed!',
            confirmButtonText: 'Yippee!'
        }).then(() => {
            document.getElementById("submitDescription").style.display = "block";
        });
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Oopsie!',
            text: error.message,
            confirmButtonText: 'Awww!'
        }).then(() => {
            document.getElementById("submitDescription").style.display = "block";
        });
    });
}

function submitEmailForm(event) {
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    event.preventDefault();

    var newEmail = document.getElementById("new_email").value.trim();
    document.getElementById("submitEmail").style.display = "none";

    if (newEmail === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oopsie!',
            text: 'Please enter an email address.',
            confirmButtonText: 'Awww!'
        }).then(() => {
            document.getElementById("submitEmail").style.display = "block";
        });
        return;
    }

    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: 'Are you sure you want to change your email address?',
        showCancelButton: true,
        confirmButtonText: 'Yes, change it!',
        cancelButtonText: 'No, keep it as is'
    }).then((result) => {
        if (result.isConfirmed) {
            var formData = {
                new_email: newEmail
            };

            axios.post('https://api.clippsly.app/endpoints/settings/update-email', formData, {
                headers: {
                    'Authorization': `Bearer ${sessionToken}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.data)
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: data.message || 'Your email has been changed!',
                    confirmButtonText: 'Yippee!'
                }).then(() => {
                    document.getElementById("submitEmail").style.display = "block";
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oopsie!',
                    text: error.response?.data?.error || error.message,
                    confirmButtonText: 'Awww!'
                }).then(() => {
                    document.getElementById("submitEmail").style.display = "block";
                });
            });
        } else {
            document.getElementById("submitEmail").style.display = "block";
        }
    });
}

function submitPasswordForm(event) {
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    event.preventDefault();

    var newPassword = document.getElementById("new_password").value;
    var newPasswordRepeat = document.getElementById("new_password_repeat").value;
    var passwordError = document.getElementById("password-error");
    document.getElementById("submitPassword").style.display = "none";
    passwordError.textContent = "";

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,}$/;

    if (newPassword !== newPasswordRepeat) {
        passwordError.textContent = "Passwords don't match.";
        document.getElementById("submitPassword").style.display = "block";
        return;
    }

    if (!passwordRegex.test(newPassword)) {
        passwordError.textContent = "Password doesn't meet the requirements.";
        document.getElementById("submitPassword").style.display = "block";
        return;
    }

    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: 'Are you sure you want to change your password?',
        showCancelButton: true,
        confirmButtonText: 'Yes, change it!',
        cancelButtonText: 'No, keep it as is'
    }).then((result) => {
        if (result.isConfirmed) {
            var formData = {
                new_password: newPassword,
                new_password_repeat: newPasswordRepeat
            };

            axios.post('https://api.clippsly.app/endpoints/settings/update-password', formData, {
                headers: {
                    'Authorization': `Bearer ${sessionToken}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.data)
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: data.message || 'Your password has been changed!',
                    confirmButtonText: 'Yippee!'
                }).then(() => {
                    document.getElementById("new_password").value = "";
                    document.getElementById("new_password_repeat").value = "";
                    document.getElementById("submitPassword").style.display = "block";
                });
            })
            .catch(error => {
                let errorMessage = 'An error occurred while changing your password.';
                
                if (error.response) {
                    if (error.response.status === 400) {
                        errorMessage = 'Invalid request. Please check your input.';
                    } else if (error.response.status === 403) {
                        errorMessage = 'Invalid or expired session. Please log in again.';
                    } else if (error.response.status === 422) {
                        errorMessage = error.response.data.error || "Password doesn't meet requirements or passwords don't match.";
                    } else {
                        errorMessage = error.response.data.error || error.message;
                    }
                }
                
                Swal.fire({
                    icon: 'error',
                    title: 'Oopsie!',
                    text: errorMessage,
                    confirmButtonText: 'Awww!'
                }).then(() => {
                    document.getElementById("submitPassword").style.display = "block";
                });
            });
        } else {
            document.getElementById("submitPassword").style.display = "block";
        }
    });
}

function submitAuthTypeForm(event) {
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    event.preventDefault();

    var authType = document.getElementById("auth_type").value;
    var authTypeError = document.getElementById("auth-type-error");
    document.getElementById("submitAuthType").style.display = "none";
    authTypeError.textContent = "";

    if (!['none', 'email', '2fa'].includes(authType)) {
        authTypeError.textContent = "Invalid authentication method selected.";
        document.getElementById("submitAuthType").style.display = "block";
        return;
    }

    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: 'Are you sure you want to change your authentication method?',
        showCancelButton: true,
        confirmButtonText: 'Yes, change it!',
        cancelButtonText: 'No, keep it as is'
    }).then((result) => {
        if (result.isConfirmed) {
            var formData = {
                auth_type: authType
            };

            axios.post('https://api.clippsly.app/endpoints/settings/update-auth', formData, {
                headers: {
                    'Authorization': `Bearer ${sessionToken}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.data)
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: data.message || 'Your authentication method has been updated!',
                    confirmButtonText: 'Yippee!'
                }).then(() => {
                    document.getElementById("submitAuthType").style.display = "block";
                });
            })
            .catch(error => {
                let errorMessage = 'An error occurred while updating your authentication method.';
                
                if (error.response) {
                    if (error.response.status === 400) {
                        errorMessage = 'Invalid input or missing data.';
                    } else if (error.response.status === 403) {
                        errorMessage = error.response.data.error || 'You cannot change to this authentication method. Make sure you have the prerequisites (email, password, or 2FA setup).';
                    } else if (error.response.status === 500) {
                        errorMessage = 'Server error. Please try again later.';
                    }
                }
                
                Swal.fire({
                    icon: 'error',
                    title: 'Oopsie!',
                    text: errorMessage,
                    confirmButtonText: 'Awww!'
                }).then(() => {
                    document.getElementById("submitAuthType").style.display = "block";
                });
            });
        } else {
            document.getElementById("submitAuthType").style.display = "block";
        }
    });
}

async function submit2faForm(event) {
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    event.preventDefault();
    try {
        if (!sessionToken) {
            Swal.fire('Error', 'Authorization token is missing.', 'error');
            return;
        }
        
        const response = await fetch('https://api.clippsly.app/endpoints/settings/update-2fa', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionToken}`,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || `Error: ${response.status}`);
        }

        if (data.success) {
            Swal.fire({
                title: '2FA Setup',
                html: `<p>${data.message}</p>
                       <img src="${data.qr_code_url}" alt="2FA QR Code" style="display:block;margin:10px 0;" />
                       <p><strong>Secret Key:</strong> ${data.secret}</p>`,
                icon: 'success'
            });
        } else {
            Swal.fire('Error', data.error || data.message || 'An unexpected error occurred.', 'error');
        }
    } catch (error) {
        console.error('Error setting up 2FA:', error);
        Swal.fire('Error', error.message || 'An error occurred while setting up 2FA.', 'error');
    }
}

function submitAvatarForm(event) {
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    event.preventDefault();

    var newAvatar = document.getElementById('new_avatar').files[0];
    document.getElementById("submitAvatar").style.display = "none";

    if (!newAvatar) {
        Swal.fire({
            icon: 'error',
            title: 'Oopsie!',
            text: 'Please choose a file before submitting.',
            confirmButtonText: 'Awww!'
        }).then(() => {
            document.getElementById("submitAvatar").style.display = "block";
        });
        return;
    }

    var formData = new FormData();
    formData.append('new_avatar', newAvatar);

    axios.post('https://api.clippsly.app/endpoints/settings/update-avatar', formData, {
        headers: {
            'Authorization': `Bearer ${sessionToken}`
        }
    })
    .then(response => response.data)
    .then(data => {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your avatar has been changed!',
            confirmButtonText: 'Yippee!'
        }).then(() => {
            document.getElementById("submitAvatar").style.display = "block";
        });
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Oopsie!',
            text: error.message,
            confirmButtonText: 'Awww!'
        }).then(() => {
            document.getElementById("submitAvatar").style.display = "block";
        });
    });
}

function submitBannerForm(event) {
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    event.preventDefault();

    var newBanner = document.getElementById('new_banner').files[0];
    document.getElementById("submitBanner").style.display = "none";

    if (!newBanner) {
        Swal.fire({
            icon: 'error',
            title: 'Oopsie!',
            text: 'Please choose a file before submitting.',
            confirmButtonText: 'Awww!'
        }).then(() => {
            document.getElementById("submitBanner").style.display = "block";
        });
        return;
    }

    var formData = new FormData();
    formData.append('new_banner', newBanner);

    axios.post('https://api.clippsly.app/endpoints/settings/update-banner', formData, {
        headers: {
            'Authorization': `Bearer ${sessionToken}`
        }
    })
    .then(response => response.data)
    .then(data => {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your banner has been changed!',
            confirmButtonText: 'Yippee!'
        }).then(() => {
            document.getElementById("submitBanner").style.display = "block";
        });
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Oopsie!',
            text: error.message,
            confirmButtonText: 'Awww!'
        }).then(() => {
            document.getElementById("submitBanner").style.display = "block";
        });
    });
}


function accountAction(action) {
    const sessionToken = getCookie('CLIPSESSIONTOKEN');

    const messages = {
        deactivateAccount: {
            title: 'Are you sure?',
            text: 'Are you sure you want to deactivate your Clippsly account?',
            confirmButtonText: 'Yes, deactivate it!',
        },
        closeAccount: {
            title: 'Are you sure?',
            text: 'Are you sure you want to close your Clippsly account?',
            confirmButtonText: 'Yes, close it!',
            irreversibleText: 'Are you sure you want to do this? This action is irreversible!',
        },
    };

    const sendApiRequest = () => {
        const apiUrl = 'https://api.clippsly.app/endpoints/moderation/account-deactivation';
        const payload = { accountAction: action };

        axios.post(apiUrl, payload, {
            headers: {
                'Authorization': `Bearer ${sessionToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: `Your account has been ${action === 'deactivateAccount' ? 'deactivated' : 'closed'} successfully.`,
                    confirmButtonText: 'OK',
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: error.response?.data?.error || 'Something went wrong. Please try again later.',
                    confirmButtonText: 'OK',
                });
            });
    };

    const showConfirmation = (config, callback) => {
        Swal.fire(config).then((result) => {
            if (result.isConfirmed) {
                callback();
            }
        });
    };

    if (action === 'closeAccount') {
        showConfirmation({
            icon: 'warning',
            title: messages.closeAccount.title,
            text: messages.closeAccount.text,
            showCancelButton: true,
            confirmButtonText: 'Yes, proceed',
            cancelButtonText: 'No, cancel',
        }, () => {
            showConfirmation({
                icon: 'error',
                title: 'Irreversible Action!',
                text: messages.closeAccount.irreversibleText,
                showCancelButton: true,
                confirmButtonText: messages.closeAccount.confirmButtonText,
                cancelButtonText: 'No, cancel',
            }, sendApiRequest);
        });
    } else if (action === 'deactivateAccount') {
        showConfirmation({
            icon: 'warning',
            title: messages.deactivateAccount.title,
            text: messages.deactivateAccount.text,
            showCancelButton: true,
            confirmButtonText: messages.deactivateAccount.confirmButtonText,
            cancelButtonText: 'No, cancel',
        }, sendApiRequest);
    }
}