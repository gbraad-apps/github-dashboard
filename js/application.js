var prController = new PullRequestController();
//var storageService = new StorageService();

window.addEventListener('DOMContentLoaded', function(e) {
    prController.Query("crc-org", "crc");
});

document.querySelector('#project-crc').onclick= function(e) {
    prController.Query("crc-org", "crc");
}

document.querySelector('#project-snc').onclick= function(e) {
    prController.Query("crc-org", "snc");
}

document.querySelector('#project-extension').onclick= function(e) {
    prController.Query("crc-org", "crc-extension");
}
