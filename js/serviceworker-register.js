if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceworker.js")
      .then(function(registration) { // Registration was successful
        console.log("ServiceWorker registration successful with scope: ", registration.scope);
      })
      .catch(function (err) { // registration failed :(
        console.error("ServiceWorker registration failed: ", err);
      });
}