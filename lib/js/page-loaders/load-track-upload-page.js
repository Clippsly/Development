function visitTrackUploadPage() {
    event.preventDefault();
    const sessionToken = getCookie('CLIPSESSIONTOKEN');

    document.title = `Track Upload | Clippsly`;
    window.history.pushState({}, '', `/upload/track`);

    checkMembership();

    document.querySelector('.container').innerHTML = `
        <form id="submission-form" method="POST" enctype="multipart/form-data">
            <h1>Upload (Beta)</h1>

            <div class="form-group">
                <label for="artcover">Art Cover (.png, .jpg) *</label><br>
                <input type="file" class="form-control" id="artcover" name="artCover" accept=".png,.jpg" required>
                <img id="preview" src="#" alt="Preview" class="img-fluid mt-2 upload-preview-image" style="display:none;">
            </div>

            <div class="form-group">
                <label for="release_date">Release Date *</label>
                <input type="date" class="form-control" id="release_date" name="uploadReleaseDate" required>
            </div>

            <div class="form-group">
                <label for="comments_enabled">Comments enabled *</label>
                <select class="form-control" id="comments_enabled" name="uploadComments" required>
                    <option value="0">Yes</option>
                    <option value="1">No</option>
                </select>
            </div>

            <div id="tracks-section">
                <h3>Tracks *</h3>
                <div id="tracks-container"></div>
                <button type="button" class="btn btn-primary mt-3" id="add-track-btn">Add Track</button>
            </div><br>

            <div class="acknowledge-checkbox">
                <h3>Acknowledgements *</h3>
                <input type="checkbox" required>
                <label>This release is in accord with our Terms: <strong><a href="https://clippsly.app/terms-of-use">https://clippsly.app/terms-of-use</a></strong></label><br>
                <input type="checkbox" required>
                <label>All tracks are checked for copyright using <strong>ACRCloud</strong>. Any copyright infringing material will be <strong>INSTANTLY</strong> removed, and your account will be terminated.</label>
                <input type="checkbox" required>
                <label><strong>This WON'T post the track to Roblox.</strong></label><br>
            </div>

            <button type="submit" class="btn-secondary">Submit</button>
        </form>

        <div class="upload-loading-overlay" style="display: none;">
            <div class="upload-loading-spinner"></div>
        </div>
    `;

    $("#artcover").change(function() {
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

    $('#add-track-btn').click(function() {
        var trackCount = $('.upload-track').length;
        if (trackCount < 3) {
            addTrack();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Limit Reached',
                text: 'You can add a maximum of 3 tracks.',
            });
        }
    });

    function addTrack() {
        var trackCount = $('.upload-track').length + 1;
        var trackHtml = `
            <div class="upload-track" data-track-id="${trackCount}">
                <h5>Track ${trackCount}</h5>
                <button type="button" class="btn btn-danger delete-track-btn">Delete Track</button>
                <div class="form-group">
                    <label for="track_title_${trackCount}">Track Title *</label>
                    <input type="text" class="form-control" id="track_title_${trackCount}" name="trackTitle[]" placeholder="e.g. Title (Feat. BBL Drizzy, Prod. Twoja Stara)" required>
                </div>
                <div class="form-group">
                    <label for="track_isrc_${trackCount}">ISRC (Optional)</label>
                    <input type="text" class="form-control" id="track_isrc_${trackCount}" name="trackISRC[]" placeholder="e.g. GX8PC2400000">
                </div>
                <div class="form-group">
                    <label for="track_file_${trackCount}">Track File (.mp3, .ogg) *</label>
                    <input type="file" class="form-control track-file" id="track_file_${trackCount}" name="trackAudio[]" accept=".mp3, .ogg" required>
                </div>
                <div class="form-group">
                    <label for="track_description_${trackCount}">Description (optional)</label>
                    <textarea class="form-control" id="track_description_${trackCount}" name="trackDescription[]" rows="3" placeholder="[[text]] - bold\n[text](link) - hyperlink\n@user - tagging\n'\\n' - line down"></textarea>
                </div>
                <div class="form-group">
                    <label for="track_explicit_${trackCount}">Explicit Content *</label>
                    <select class="form-control" id="track_explicit_${trackCount}" name="trackExplicit[]" required>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="track_genre_${trackCount}">Genre *</label>
                    <select class="form-control" id="track_genre_${trackCount}" name="trackGenre[]" required>
                        <option value="Afrobeat">Afrobeat</option>
                        <option value="Afropop">Afropop</option>
                        <option value="Alternative">Alternative</option>
                        <option value="Big Band">Big Band</option>
                        <option value="Blues">Blues</option>
                        <option value="Childrens Music">Childrens Music</option>
                        <option value="Christian/Gospel">Christian/Gospel</option>
                        <option value="Classical">Classical</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Country">Country</option>
                        <option value="Dance">Dance</option>
                        <option value="Electronic">Electronic</option>
                        <option value="Fitness & Workout">Fitness & Workout</option>
                        <option value="Folk">Folk</option>
                        <option value="French Pop">French Pop</option>
                        <option value="German Folk">German Folk</option>
                        <option value="German Pop">German Pop</option>
                        <option value="Hip Hop/Rap">Hip Hop/Rap</option>
                        <option value="Holiday">Holiday</option>
                        <option value="J-Pop">J-Pop</option>
                        <option value="Jazz">Jazz</option>
                        <option value="K-Pop">K-Pop</option>
                        <option value="Latin">Latin</option>
                        <option value="Latin Urban">Latin Urban</option>
                        <option value="Metal">Metal</option>
                        <option value="New Age">New Age</option>
                        <option value="Pop">Pop</option>
                        <option value="Punk">Punk</option>
                        <option value="R&B/Soul">R&B/Soul</option>
                        <option value="Reggae">Reggae</option>
                        <option value="Rock">Rock</option>
                        <option value="Singer/Songwriter">Singer/Songwriter</option>
                        <option value="Soundtrack">Soundtrack</option>
                        <option value="Spoken Word">Spoken Word</option>
                        <option value="Vocal">Vocal</option>
                        <option value="World">World</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="track_ai_${trackCount}">Artificially Generated (AI) *</label>
                    <select class="form-control" id="track_ai_${trackCount}" name="trackAI[]" required>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="track_privacy_${trackCount}">Track Privacy *</label>
                    <select class="form-control" id="track_privacy_${trackCount}" name="trackPrivacy[]" required>
                        <option value="0">Public</option>
                        <option value="1">Private</option>
                    </select>
                </div>
            </div>
        `;
        $('#tracks-container').append(trackHtml);

        $('.delete-track-btn').last().click(function() {
            deleteTrack($(this).closest('.upload-track'));
        });
    }

    function deleteTrack(trackElement) {
        trackElement.remove();
        updateTrackNumbers();
    }

    function updateTrackNumbers() {
        $('.upload-track').each(function(index) {
            $(this).attr('data-track-id', index + 1);
            $(this).find('h5').text('Track ' + (index + 1));
        });
    }

    $('#submission-form').submit(function(event) {
        event.preventDefault();
        $('.upload-loading-overlay').show();
    
        var formData = new FormData(this);
        var totalTracks = $('.upload-track').length;
    
        if (totalTracks < 1) {
            $('.upload-loading-overlay').hide();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please add at least one track.',
            });
            return;
        }
    
        axios.post('https://api.clippsly.app/endpoints/functions/track-upload', formData, {
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
                    text: 'Your track has been successfully uploaded!',
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
            if (tier !== 1 && tier !== 2 && tier !== 3) {
                window.location.href = '/error?code=403';
            }
        })
        .catch(() => {
            window.location.href = '/error?code=403';
        });
    }
}