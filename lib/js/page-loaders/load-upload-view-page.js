function visitUploadPage(event) {
    event?.preventDefault?.();

    document.title = `Upload | Clippsly`;
    window.history.pushState({}, '', `/upload`);

    const container = document.querySelector('.container');
    container.innerHTML = `<p>Loading upload options...</p>`;

    const sessionToken = getCookie('CLIPSESSIONTOKEN');

    fetch('https://api.clippsly.app/endpoints/data/economy', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${sessionToken}`,
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        const membership = (data.membershipName || 'lite').toLowerCase();
        const limits = data.limits || {};
        const trackUsed = limits.trackUploads?.used || 0;
        const trackLimit = limits.trackUploads?.limit || 0;
        const videoUsed = limits.videoUploads?.used || 0;
        const videoLimit = limits.videoUploads?.limit || 0;

        if (membership === 'lite') {
            container.innerHTML = `
                <h1>Upload</h1>
                <p>You don’t have access to any upload features. Upgrade your plan to unlock them.</p>
                <div class="mt-5">
                    <a class="btn-massive section-button" href="/membership">View Membership Plans</a>
                </div>
            `;
            return;
        }

        const isTrackDisabled = trackLimit > 0 && trackUsed >= trackLimit;
        const isVideoDisabled = videoLimit > 0 && videoUsed >= videoLimit;

        let html = `
            <h1>Upload</h1>
            <p>Choose what type of content you wish to upload.</p>
            <div class="button-grid mt-5">
        `;

        if (membership === 'standard' || membership === 'producer' || membership === 'staff') {
            html += `
                <a class="section-button ${isTrackDisabled ? 'btn-massive-disabled' : 'btn-massive'}"
                   href="${isTrackDisabled ? '#' : '/upload/track'}">
                   Track Upload <span class="label-standard">(${trackUsed}/${trackLimit} used)</span>
                </a>
            `;
        }

        if (membership === 'producer' || membership === 'staff') {
            html += `
                <a class="section-button ${isVideoDisabled ? 'btn-massive-disabled' : 'btn-massive'}"
                   href="${isVideoDisabled ? '#' : '/upload/video'}">
                   Video Upload <span class="label-producer">(${videoUsed}/${videoLimit} used)</span>
                </a>
            `;
        }

        html += `</div>`;

        // Show reset banner if any limits reached
        if (
            (membership === 'standard' && isTrackDisabled) ||
            (membership === 'producer' && (isTrackDisabled || isVideoDisabled))
        ) {
            html += `
                <div class="banner mt-5">
                    <p>You’ve reached your upload limit for this month. You can reset your quota by upgrading or renewing your plan.</p>
                    <a class="btn-massive" href="/membership">Reset via Membership</a>
                </div>
            `;
        }

        container.innerHTML = html;
    })
    .catch(error => {
        console.error('Error fetching membership data:', error);
        container.innerHTML = '<p>Error loading membership data. Please try again later.</p>';
    });
}
