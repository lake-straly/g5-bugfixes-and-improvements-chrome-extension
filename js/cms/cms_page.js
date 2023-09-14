/* temporarily disabling this JS, bugging out for some reason
let modalOverlay = document.querySelector('#modal-overlays');
let modalHeaderName;
let currentModal;

const observer = new MutationObserver(function (mutations) {
    for (let i = 0; i < mutations.length; i++) {
        setTimeout(() => {
        modalHeaderName = document.querySelector('.modal-header-name');
        if (modalHeaderName === null) {
            return;
        } else {
            for (let j = 0; j < modalHeaderName.childNodes.length; j++) {
                currentModal = modalHeaderName.childNodes[j].nodeValue.toLowerCase();
                    if (currentModal.includes('html')) {
                        htmlWidget();
                    } else if (currentModal.includes('photo') || currentModal.includes('gallery')) {
                        addRemovePhotoButton();
                    }
                }
            }
        }, 1000);
    }
});

const subObserver = new MutationObserver(function (mutations) {
    for (let k = 0; k < mutations.length; k++) {

        // WYSISWYG Handler
        let wysiwygConatiner = document.querySelector('.cke_wysiwyg_frame');
        if (wysiwygConatiner == null) {
            return;
        } else {
            let linkSubModal = document.querySelector('.cke_dialog_title');
            if (linkSubModal == null) {
                return;
            } else {
                if (linkSubModal.innerText.includes('Link')) {
                    let linkInput = linkSubModal.parentNode.childNodes[3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[0];
                    setTimeout(() => {
                        linkInput.focus();
                        linkInput.select();                    
                    }, 500);
                }
            }
        }
        // End WYSIWYG Handler
        // Start publish confirmation handler
        let successfulPublishModal = document.querySelector('div.toast.alert-box.success.active');
        if (successfulPublishModal == null) {
            return;
        } else {
                if (successfulPublishModal.innerText.includes('publish')) {
                    window.alert('Test');
                    console.log("yeeeeeeet");
                }
            }
        }
        // End publish confirmation handler
    }
);

// Calls the mutationObserver to determine which CMS modal is open.
function callObserver() {
    observer.observe(modalOverlay, {
        childList: true,
        subtree: true
    });
}
callObserver();

// Handler for HTML modal.
subObserver.observe(document.querySelector('body'), {
    childList: true,
    subtree: true
})


// Clicks on all of the 'X' marks on photos in photo galleries.
function removePhotos() {
    let xMark = document.querySelector('i.fa.fa-remove').length;
    while (xMark !== '' || xMark !== undefined || xMark !== null) {
        document.querySelector('i.fa.fa-remove').click();
    }
}

// Adds button to photo galleries that calls the removePhotos function on click.
function addRemovePhotoButton() {
    let quickUploadButton = document.querySelector('.cloudinary-bulk-asset');
    if (document.body.contains(document.querySelector('.remove-all-photos-btn'))) {
        return;
    } else {
        observer.disconnect();
        if (quickUploadButton !== null) {
            quickUploadButton.insertAdjacentHTML('afterend', '<a style="color: #BF616A; border-color: #BF616A;" href="#" class="remove-all-photos-btn publish-button cloudinary-asset-btn cloudinary-bulk-asset btn confirm cloudinary-upload">Remove Images <i class="fa fa-trash" aria-hidden="true"></i></a>');
            let removePhotoButton = document.querySelector('.remove-all-photos-btn');
            removePhotoButton.addEventListener('click', function() {removePhotos()});
        }
    }
    callObserver();
} */