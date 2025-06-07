function visitMembershipPage() {
    event.preventDefault();
    document.title = `Membership | Clippsly`;
    window.history.pushState({}, '', `/membership`);

    document.querySelector('.container').innerHTML = `
        <div class="membership-container">
            <h2 class="membership-title">Membership Status</h2>
            <div class="membership-content">
                <h3 class="tier-title">Current Tier: <span id="current-tier">Loading...</span></h3>
                
                <div class="upload-section">
                    <h3 class="section-title">Monthly Upload Limits</h3>
                    <div class="upload-item">
                        <div class="upload-label">Track Uploads</div>
                        <div class="upload-value"><span id="track-uploads-used">0</span>/<span id="track-uploads-limit">0</span></div>
                    </div>
                    <div class="upload-item">
                        <div class="upload-label">Video Uploads</div>
                        <div class="upload-value"><span id="video-uploads-used">0</span>/<span id="video-uploads-limit">0</span></div>
                    </div>
                    <div class="upload-item">
                        <div class="upload-label">Month Resets:</div>
                        <div class="upload-value"><span id="month-reset-time">Loading...</span></div>
                    </div>
                    <button id="month-reset-button" class="reset-button">Reset Monthly Limits / £2.50 (tax included)</button>
                    <p>By purchasing this service you agree to our <a href="https://support.clippsly.app/knowledgebase.php?article=12" onclick="openExternalWebsite('https://support.clippsly.app/knowledgebase.php?article=12')">Return & Refund Policy</a>
                </div>
            </div>

            <h2 class="membership-title">Compare Memberships</h2>
            <div class="membership-tiers">
                <div class="tier-header">
                    <div class="tier-feature-header">Features</div>
                    <div class="tier-column lite">Lite</div>
                    <div class="tier-column standard">Standard</div>
                    <div class="tier-column producer">Producer</div>
                </div>
                
                <div class="tier-row">
                    <div class="tier-feature">Price</div>
                    <div class="tier-column lite">£0</div>
                    <div class="tier-column standard">£3.70 (tax included)</div>
                    <div class="tier-column producer">£6.20 (tax included)</div>
                </div>
                
                <div class="tier-row">
                    <div class="tier-feature">Payment Type</div>
                    <div class="tier-column lite">Free</div>
                    <div class="tier-column standard">One-time purchase (permanent)</div>
                    <div class="tier-column producer">One-time purchase (permanent)</div>
                </div>
                
                <div class="tier-row">
                    <div class="tier-feature">Monthly Track Uploads</div>
                    <div class="tier-column lite">0</div>
                    <div class="tier-column standard">10 (128kb OGG)</div>
                    <div class="tier-column producer">30 (192kb OGG)</div>
                </div>
                
                <div class="tier-row">
                    <div class="tier-feature">Monthly Video Uploads</div>
                    <div class="tier-column lite">0</div>
                    <div class="tier-column standard">0</div>
                    <div class="tier-column producer">2</div>
                </div>
                
                <div class="tier-row">
                    <div class="tier-feature">Commenting</div>
                    <div class="tier-column lite"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg></div>
                    <div class="tier-column standard"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg></div>
                    <div class="tier-column producer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg></div>
                </div>
                
                <div class="tier-row">
                    <div class="tier-feature">Roblox Distribution</div>
                    <div class="tier-column lite"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor"/></svg></div>
                    <div class="tier-column standard"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg> <span class="feature-detail">Unlimited</span></div>
                    <div class="tier-column producer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg> <span class="feature-detail">Unlimited</span></div>
                </div>
                
                <div class="tier-row">
                    <div class="tier-feature">Profile Customization</div>
                    <div class="tier-column lite"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor"/></svg></div>
                    <div class="tier-column standard"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg></div>
                    <div class="tier-column producer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg></div>
                </div>
                
                <div class="tier-row">
                    <div class="tier-feature">Profile Badge</div>
                    <div class="tier-column lite"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor"/></svg></div>
                    <div class="tier-column standard"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg></div>
                    <div class="tier-column producer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg></div>
                </div>

                <div class="tier-row">
                    <div class="tier-feature">Nametag Style</div>
                    <div class="tier-column lite"><span class="label-lite" id="user-display-lite"></span></div>
                    <div class="tier-column standard"><span class="label-standard" id="user-display-standard"></span></div>
                    <div class="tier-column producer"><span class="label-producer" id="user-display-producer"></span></div>
                </div>
                
                <div class="tier-row">
                    <div class="tier-feature">Profile Posts</div>
                    <div class="tier-column lite"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor"/></svg></div>
                    <div class="tier-column standard"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg></div>
                    <div class="tier-column producer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg></div>
                </div>
                
                <div class="tier-row">
                    <div class="tier-feature">Direct Messages (Soon)</div>
                    <div class="tier-column lite"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor"/></svg></div>
                    <div class="tier-column standard"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg></div>
                    <div class="tier-column producer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg></div>
                </div>
                
                <div class="tier-row">
                    <div class="tier-feature">Early Feature Access</div>
                    <div class="tier-column lite"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor"/></svg></div>
                    <div class="tier-column standard"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor"/></svg></div>
                    <div class="tier-column producer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg></div>
                </div>

                <div class="tier-row tier-buttons">
                    <div class="tier-feature"></div>
                    <div class="tier-column lite">
                        <button id="lite-tier-button" class="tier-button lite-button" disabled>Current</button>
                    </div>
                    <div class="tier-column standard">
                        <button id="standard-tier-button" class="tier-button standard-button">Buy Standard</button>
                    </div>
                    <div class="tier-column producer">
                        <button id="producer-tier-button" class="tier-button producer-button">Buy Producer</button>
                    </div>
                </div>
                <p>By purchasing this service you agree to our <a href="https://support.clippsly.app/knowledgebase.php?article=12" onclick="openExternalWebsite('https://support.clippsly.app/knowledgebase.php?article=12')">Return & Refund Policy</a>
                <!-- New Gifting Section -->
                <div class="gifting-section">
                    <h2 class="membership-title">Gift a Membership</h2>
                    <p>Share the joy of music creation - gift a membership to another user!</p>
                    <div class="gift-buttons">
                        <div class="gift-column">
                            <h3>Standard Membership</h3>
                            <button class="tier-button standard-button" onclick="giftMembership('standard_membership')">Gift Standard (£3.70)</button>
                        </div>
                        <div class="gift-column">
                            <h3>Producer Membership</h3>
                            <button class="tier-button producer-button" onclick="giftMembership('producer_membership')">Gift Producer (£6.20)</button>
                        </div>
                    </div>
                    <div class="gift-input">
                        <label for="gift_username">Recipient's Username</label>
                        <input type="text" id="gift_username" class="form-control" placeholder="Enter username">
                    </div>
                </div>

                <form id="discount-code-form">
                    <div class="form-group">
                        <label for="discount_code">Discount Code</label>
                        <input type="text" class="form-control" id="discount_code" required>
                    </div>
                    <button type="submit" id="submitDiscountCode" class="login-btn default">Apply</button>
                </form>
            </div>
        </div>
    `;

    const sessionToken = getCookie('CLIPSESSIONTOKEN');

    // Fetch membership data from the new API endpoint
    function fetchMembershipData() {
        fetch('https://api.clippsly.app/endpoints/data/economy', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionToken}`,
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => handleMembershipData(data))
        .catch(error => {
            console.error('Error fetching membership data:', error);
            document.querySelector('.container').innerHTML = '<p>Error loading membership data. Please try again later.</p>';
        });
    }

    // Handle the membership data response
    function handleMembershipData(data) {
        const elements = {
            currentTier: document.getElementById('current-tier'),
            trackUsed: document.getElementById('track-uploads-used'),
            trackLimit: document.getElementById('track-uploads-limit'),
            videoUsed: document.getElementById('video-uploads-used'),
            videoLimit: document.getElementById('video-uploads-limit'),
            resetTime: document.getElementById('month-reset-time'),
            resetButton: document.getElementById('month-reset-button'),
            liteBtn: document.getElementById('lite-tier-button'),
            standardBtn: document.getElementById('standard-tier-button'),
            producerBtn: document.getElementById('producer-tier-button'),

            liteDisplayShowcase: document.getElementById('user-display-lite'),
            standardDisplayShowcase: document.getElementById('user-display-standard'),
            producerDisplayShowcase: document.getElementById('user-display-producer'),
        };

        const tierNames = ['Lite', 'Standard', 'Producer', 'Staff'];
        const tierClasses = ['label-lite', 'label-standard', 'label-producer', 'label-staff'];
        const currentTier = data.membershipTier ?? 0;

        // Set user display name to show case tags, and how are you not bored of reading my comments? ~  Blanka
        elements.liteDisplayShowcase.textContent = data.displayName;
        elements.standardDisplayShowcase.textContent = data.displayName;
        elements.producerDisplayShowcase.textContent = data.displayName;

        // Display current tier name and style
        elements.currentTier.textContent = data.membershipName || tierNames[currentTier];
        elements.currentTier.classList.add(tierClasses[currentTier]);

        // Upload usage and limits
        if (data.limits) {
            const { trackUploads, videoUploads, monthStart } = data.limits;

            elements.trackUsed.textContent = trackUploads.used;
            elements.trackLimit.textContent = trackUploads.limit;
            elements.videoUsed.textContent = videoUploads.used;
            elements.videoLimit.textContent = videoUploads.limit;

            // Monthly reset time
            if (monthStart) {
                const now = Math.floor(Date.now() / 1000);
                const nextReset = monthStart + (30 * 24 * 60 * 60);
                const timeLeft = nextReset - now;

                elements.resetTime.textContent = timeLeft > 0
                    ? `${Math.floor(timeLeft / (24 * 60 * 60))} days`
                    : 'Reset available now';
            }

            // Show reset button if limits are reached
            const isTrackLimitReached = trackUploads.used >= trackUploads.limit;
            const isVideoLimitReached = videoUploads.used >= videoUploads.limit;

            if (isTrackLimitReached || isVideoLimitReached) {
                elements.resetButton.style.display = 'block';
                elements.resetButton.onclick = () => startPayment('month_reset');
            } else {
                elements.resetButton.style.display = 'none';
            }
        }

        // Clear existing button handlers
        [elements.liteBtn, elements.standardBtn, elements.producerBtn].forEach(btn => {
            btn.disabled = false;
            btn.textContent = '';
            btn.onclick = null;
        });

        // Handle tier buttons
        if (currentTier === 0) { // Lite
            elements.liteBtn.textContent = 'Current';
            elements.liteBtn.disabled = true;

            elements.standardBtn.textContent = 'Buy Standard';
            elements.standardBtn.onclick = () => startPayment('standard_membership');

            elements.producerBtn.textContent = 'Buy Producer';
            elements.producerBtn.onclick = () => startPayment('producer_membership');

        } else if (currentTier === 1) { // Standard
            elements.liteBtn.textContent = 'Downgrade';
            elements.liteBtn.disabled = true;

            elements.standardBtn.textContent = 'Current';
            elements.standardBtn.disabled = true;

            elements.producerBtn.textContent = 'Upgrade to Producer';
            elements.producerBtn.disabled = false;
            elements.producerBtn.onclick = () => startPayment('producer_upgrade');

        } else if (currentTier === 2) { // Producer
            elements.liteBtn.textContent = 'Downgrade';
            elements.liteBtn.disabled = true;

            elements.standardBtn.textContent = 'Downgrade';
            elements.standardBtn.disabled = true;

            elements.producerBtn.textContent = 'Current';
            elements.producerBtn.disabled = true;
        }
    }

    // Function to start the payment process
    function startPayment(productType) {
        // Get discount code if present
        const discountCode = document.getElementById('discount_code').value.trim();
        
        fetch('https://api.clippsly.app/endpoints/payments/payment-start', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product_type: productType,
                discount_code: discountCode || undefined // Only include if there's a code
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data && data.checkout_url) {
                // Redirect to Stripe checkout
                window.location.href = data.checkout_url;
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Payment Error',
                    text: data.error || 'Unable to start payment process. Please try again later.',
                    confirmButtonText: 'OK'
                });
            }
        })
        .catch(error => {
            console.error('Payment error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Payment Error',
                text: 'An unexpected error occurred. Please try again later.',
                confirmButtonText: 'OK'
            });
        });
    }

    // Remove the discount code form submit handler since we'll use the code directly
    document.getElementById('discount-code-form').remove();
    
    // Add a simpler discount code input
    const discountSection = document.createElement('div');
    discountSection.className = 'discount-section';
    discountSection.innerHTML = `
        <div class="form-group">
            <label for="discount_code">Discount Code (Optional)</label>
            <input type="text" class="form-control" id="discount_code" placeholder="Enter discount code">
        </div>
    `;
    
    // Insert the discount section before the tier buttons row
    const tierButtonsRow = document.querySelector('.tier-buttons').parentElement;
    tierButtonsRow.insertBefore(discountSection, document.querySelector('.tier-buttons'));

    // Initialize the page
    fetchMembershipData();
}


// Add the giftMembership function before fetchMembershipData()
function giftMembership(productType) {
    const giftUsername = document.getElementById('gift_username').value.trim();
    const discountCode = document.getElementById('discount_code').value.trim();

    if (!giftUsername) {
        Swal.fire({
            icon: 'error',
            title: 'Missing Username',
            text: 'Please enter the recipient\'s username',
            confirmButtonText: 'OK'
        });
        return;
    }

    const sessionToken = getCookie('CLIPSESSIONTOKEN');

    fetch('https://api.clippsly.app/endpoints/payments/payment-start', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${sessionToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            product_type: productType,
            is_gift: true,
            gift_username: giftUsername,
            discount_code: discountCode || undefined
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.checkout_url) {
            window.location.href = data.checkout_url;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Gift Error',
                text: data.error || 'Unable to process gift. Please try again later.',
                confirmButtonText: 'OK'
            });
        }
    })
    .catch(error => {
        console.error('Gift error:', error);
        Swal.fire({
            icon: 'error',
            title: 'Gift Error',
            text: 'An unexpected error occurred. Please try again later.',
            confirmButtonText: 'OK'
        });
    });
}