/* let bellDing = new Audio('bell.mp3');

const subObserver = new MutationObserver(function (mutations) {
    for (let k = 0; k < mutations.length; k++) {
        // Start publish confirmation handler
        let emberModal = document.querySelector('div.ember-view');
        console.log('emberModal');
        console.log(emberModal);
        if (emberModal == null) {
            return;
        } else {
            let successfulPublishModal = document.querySelector('div.toast.alert-box.success');
            if (successfulPublishModal == null) {
                return
            } else {
                console.log('successfulPublishModal');
                console.log(successfulPublishModal);
                    if (successfulPublishModal.innerText.includes('publish')) {
                        window.alert('Test');
                        bellDing.play();
                        console.log("yeeeeeeet");
                        console.log(successfulPublishModal.innerText());
                    }
                }
            }
        }
        // End publish confirmation handler
    }
);

subObserver.observe(document.querySelector('body'), {
    childList: true,
    subtree: true
})

console.log("Loaded CMS_General"); */