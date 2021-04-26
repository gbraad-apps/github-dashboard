var prController = new PullRequestController();
//var storageService = new StorageService();

window.addEventListener('DOMContentLoaded', function(e) {
    prController.Query("code-ready", "crc");
});

document.querySelector('#project-crc').onclick= function(e) {
    prController.Query("code-ready", "crc");
}

document.querySelector('#project-snc').onclick= function(e) {
    prController.Query("code-ready", "snc");
}
