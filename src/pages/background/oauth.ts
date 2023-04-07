function init() {
  document.getElementById("auth").addEventListener("click", function () {
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      console.log(token);
    });
  });
}
init();
