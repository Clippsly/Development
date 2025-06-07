function visitPurchasePage(queryParams) {
    event.preventDefault();
    document.title = `Purchase Confirmation | Clippsly`;
    
    // Get the full query string
    const queryString = window.location.search;
    
    // Extract the session_id parameter
    const sessionId = new URLSearchParams(queryString).get('session_id');
    
    // Update the URL in browser history
    window.history.pushState({}, '', `/purchase?session_id=${sessionId}`);
    
    // Set up the container with a loading message
    document.querySelector('.container').innerHTML = `
        <h2>Processing Your Purchase</h2>
        <p>Please wait while we confirm your purchase...</p>
        <div id="purchase-result" class="mt-4"></div>
    `;
    
    // Only proceed if we have a session_id
    if (!sessionId) {
        document.getElementById('purchase-result').innerHTML = `
            <div class="alert alert-danger">
                <h4>Error</h4>
                <p>Missing session ID. Unable to process your purchase.</p>
            </div>
            <a href="/" class="btn btn-primary mt-3">Return to Home</a>
        `;
        return;
    }
    
    // Forward the session_id to the backend API
    const apiUrl = `https://api.clippsly.app/endpoints/payments/payment-complete?session_id=${sessionId}`;
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Display success message
            const resultContainer = document.getElementById('purchase-result');
            
            if (data.delivered === true) {
                resultContainer.innerHTML = `
                    <div class="alert alert-success">
                        <h4>Success!</h4>
                        <p>${data.message}</p>
                        <p>Product: ${data.product_type}</p>
                    </div>
                    <a href="/" class="btn btn-primary mt-3">Return to Home</a>
                `;
            } else {
                resultContainer.innerHTML = `
                    <div class="alert alert-danger">
                        <h4>Something went wrong</h4>
                        <p>${data.message || 'Unable to process your purchase.'}</p>
                    </div>
                    <a href="/" class="btn btn-primary mt-3">Return to Home</a>
                `;
            }
        })
        .catch(error => {
            // Display error message
            document.getElementById('purchase-result').innerHTML = `
                <div class="alert alert-danger">
                    <h4>Error</h4>
                    <p>There was a problem processing your purchase: ${error.message}</p>
                </div>
                <a href="/" class="btn btn-primary mt-3">Return to Home</a>
            `;
        });
}