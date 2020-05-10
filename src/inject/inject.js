chrome.extension.sendMessage({}, function (response) {
  let readyStateCheckInterval = setInterval(function () {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      console.log('Hello. This message was sent from scripts/inject.js');
      // ----------------------------------------------------------
    }
  }, 10);
});

/*let myInt = setInterval(setTime, 1000);

function setTime() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  console.log('Current Time: ' + t);
}*/
