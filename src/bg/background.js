/* chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log('Message Received' + message);
}); */

chrome.runtime.onMessage.addListener((data) => {
  if (data.type === 'notification') {
    chrome.notifications.create('', data.options);
  }
});
