async function fetchUserData() {
    const sessionToken = getCookie('CLIPSESSIONTOKEN');
    if (!sessionToken) {
        handleInvalidSession();
        return;
    }

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

        const isModerated = userData?.status?.isModerated;
        const displayName = userData?.displayName;
        const membershipTier = userData?.status?.membershipTier;
        const isVerified = userData?.status?.isVerified;

        if (isModerated === undefined || displayName === undefined || isVerified === undefined) {
            handleInvalidSession();
            return;
        }

        document.getElementById('profile-pic').src = userData?.avatar || 'https://cdn.clippsly.app/brand_assets/icons/default-artist.png';
        document.getElementById('display-name').textContent = displayName.substring(0, 10);

        const tierClasses = ['label-lite', 'label-standard', 'label-producer', 'label-staff'];
        document.getElementById('display-name').classList.add(tierClasses[membershipTier]);

        if (isVerified) {
            document.getElementById('display-name').innerHTML += ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" title="Verified Badge"><circle cx="12" cy="12" r="10" stroke-width="2" fill="#1E90FF"></circle><path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none"></path></svg>';
        }

        const profileLink = document.getElementById('profile-link');
        profileLink.href = `/users/${userData.name}`
        profileLink.onclick = function() {
            visitUserProfile(userData.name);
        };

        document.getElementById('logout-button').dataset.sessionId = sessionToken;

        document.getElementById('logout-button').addEventListener('click', async function() {
            await logout(sessionToken);
        });

        document.getElementById('user-dropdown-menu').classList.remove('d-none');

        if (isModerated) {
            const currentUrl = window.location.href;
            const notApprovedUrl = "https://clippsly.app/not-approved";

            if (!currentUrl.includes(notApprovedUrl)) {
                window.location.href = notApprovedUrl;
            }
        }

        pingServer(sessionToken);

        setInterval(() => {
            pingServer(sessionToken);
        }, 4 * 60 * 1000);

    } catch (error) {
        console.error('Error fetching user data:', error);
        handleInvalidSession();
    }
}

async function pingServer(sessionToken) {
    const apiUrl = 'https://api.clippsly.app/endpoints/data/pulse';
    const headers = {
        'Authorization': `Bearer ${sessionToken}`
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        
        if (responseData.link_email_required === true) {
            showEmailInputPopup(sessionToken);
        }
    } catch (error) {
        console.error('Error pinging the server:', error);
    }
}

function showEmailInputPopup(sessionToken) {
    Swal.fire({
        title: 'Email Verification Required',
        html: `
            <p>Please provide an email address to continue using Clippsly.</p>
            <input type="email" id="swal-email-input" class="swal2-input" placeholder="Your email address">
        `,
        showCancelButton: false,
        confirmButtonText: 'Submit',
        focusConfirm: false,
        preConfirm: () => {
            const email = document.getElementById('swal-email-input').value.trim();
            if (!email) {
                Swal.showValidationMessage('Please enter an email address');
                return false;
            }
            if (!/^\S+@\S+\.\S+$/.test(email)) {
                Swal.showValidationMessage('Please enter a valid email address');
                return false;
            }
            return email;
        }
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            submitEmailToServer(result.value, sessionToken);
        } else {
            showEmailInputPopup(sessionToken);
        }
    });
}

async function submitEmailToServer(email, sessionToken) {
    try {
        const response = await fetch('https://api.clippsly.app/endpoints/settings/update-email', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ new_email: email })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to update email');
        }

        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your email has been successfully linked to your account.',
            confirmButtonText: 'Great!'
        });
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message,
            confirmButtonText: 'Try Again'
        }).then(() => {
            showEmailInputPopup(sessionToken);
        });
    }
}

async function logout(sessionToken) {
    const apiUrl = 'https://api.clippsly.app/endpoints/data/logout';
    const headers = {
        'Authorization': `Bearer ${sessionToken}`
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        window.location.reload(true);
    } catch (error) {
        console.error('Error during logout:', error);
    }
}

function handleInvalidSession() {
    document.getElementById('profile-pic').src = 'https://cdn.clippsly.app/brand_assets/icons/default-artist.png';
    document.getElementById('display-name').textContent = 'Log In';

    document.getElementById('user-dropdown-menu').classList.add('d-none');

    document.getElementById('profile-pic').addEventListener('click', visitLoginPage);
    document.getElementById('display-name').addEventListener('click', visitLoginPage);
}

document.addEventListener('DOMContentLoaded', fetchUserData);