function visitVideoUploadPage() {
    event.preventDefault();
    const sessionToken = getCookie('CLIPSESSIONTOKEN');

    document.title = `Upload Video | Clippsly`;
    window.history.pushState({}, '', `/upload/video`);

    checkMembership();

    document.querySelector('.container').innerHTML = `
        <form id="submission-form" method="POST" enctype="multipart/form-data">
            <h1>Upload Video (Beta)</h1>

            <div class="form-group">
                <label for="thumbNail">Thumbnail (.png, .jpg) *</label><br>
                <input type="file" class="form-control" id="thumbNail" name="thumbNail" accept=".png,.jpg" required>
                <img id="preview" src="#" alt="Preview" class="img-fluid mt-2 upload-preview-image" style="display:none;">
            </div>

            <div class="form-group">
                <label for="videoTitle">Video Title *</label>
                <input type="text" class="form-control" id="videoTitle" name="videoTitle" placeholder="e.g. My Awesome Video" required>
            </div>

            <div class="form-group">
                <label for="videoDescription">Description (optional)</label>
                <textarea class="form-control" id="videoDescription" name="videoDescription" rows="3" placeholder="[[text]] - bold\n[text](link) - hyperlink\n@user - tagging\n'\\n' - line down"></textarea>
            </div>

            <div class="form-group">
                <label for="releaseVideo">Video File (.mp4) * (Max 8MB, 10 minutes)</label>
                <input type="file" class="form-control" id="releaseVideo" name="releaseVideo" accept=".mp4" required>
            </div>

            <div class="form-group">
                <label for="video_privacy">Video Privacy *</label>
                <select class="form-control" id="video_privacy" name="videoPrivacy" required>
                    <option value="0">Public</option>
                    <option value="1">Private</option>
                </select>
            </div>

            <div class="acknowledge-checkbox">
                <h3>Acknowledgements *</h3>
                <input type="checkbox" required>
                <label>This video is in accord with our Terms: <strong><a href="https://clippsly.app/terms-of-use">https://clippsly.app/terms-of-use</a></strong></label><br>
                <input type="checkbox" required>
                <label>Any copyright infringing material will be <strong>INSTANTLY</strong> removed, and your account will be terminated.</label>
            </div>

            <button type="submit" class="btn-secondary">Submit</button>
        </form>

        <div class="upload-loading-overlay" style="display: none;">
            <div class="upload-loading-spinner"></div>
        </div>
    `;

    $("#thumbNail").change(function() {
        readURL(this);
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#preview').attr('src', e.target.result).show();
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    $('#submission-form').submit(function(event) {
        event.preventDefault();
        $('.upload-loading-overlay').show();

        const videoFile = $('#releaseVideo')[0].files[0];
        const maxSize = 8 * 1024 * 1024; 

        if (videoFile.size > maxSize) {
            $('.upload-loading-overlay').hide();
            Swal.fire({
                icon: 'error',
                title: 'File Too Large',
                text: 'Video file must not exceed 8MB.',
            });
            return;
        }

        var formData = new FormData(this);

        axios.post('https://api.clippsly.app/endpoints/functions/video-upload', formData, {
            headers: {
                'Authorization': `Bearer ${sessionToken}`
            }
        })
        .then(function(response) {
            $('.upload-loading-overlay').hide();
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Upload Complete!',
                    text: 'Your video has been successfully uploaded!',
                    confirmButtonText: 'Yippee!'
                }).then((result) => {
                    if (result.isConfirmed || result.dismiss === Swal.DismissReason.backdrop) {
                        location.reload();
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response.data.error || 'An unknown error occurred.',
                });
            }
        })
        .catch(function(error) {
            $('.upload-loading-overlay').hide();
            Swal.fire({
                icon: 'error',
                title: 'Upload Failed',
                text: error.response?.data?.error || error.response?.data?.message || error.message || 'An error occurred while uploading. Please try again.',
            }).then((result) => {
                if (result.isConfirmed || result.dismiss === Swal.DismissReason.backdrop) {
                    location.reload();
                }
            });
        });
    });

    function checkMembership() {
        const sessionToken = getCookie('CLIPSESSIONTOKEN');

        fetch('https://api.clippsly.app/endpoints/data/economy', {
            headers: { 'Authorization': `Bearer ${sessionToken}` }
        })
        .then(res => res.json())
        .then(data => {
            const tier = Number(data.membershipTier);
            if (tier !== 2  && tier !== 3) {
                window.location.href = '/error?code=403';
            }
        })
        .catch(() => {
            window.location.href = '/error?code=403';
        });
    }
}