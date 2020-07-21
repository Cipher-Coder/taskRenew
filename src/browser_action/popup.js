let temp_time = 120;

document
  .getElementById('update_time_interval')
  .addEventListener('click', function () {
    let updated_time = document.getElementById('timeInterval').value;
    let notification_email = document.getElementById('notification_email')
      .value;
    if (updated_time === '' || updated_time < 120) {
      let new_time = temp_time * 1000;
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { time: new_time });
      });
      chrome.storage.local.set({ my_email: notification_email }, () => {
        let myData = {
          email_name: notification_email,
          time_int: new_time,
        };
        chrome.tabs.executeScript(
          {
            code: `let config = ` + JSON.stringify(myData),
          },
          function () {
            chrome.tabs.executeScript({
              file: '/src/inject/inject.js',
            });
          }
        );
      });
    } else {
      let new_time = updated_time * 1000;
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { interval: new_time });
      });
      chrome.storage.local.set({ my_email: notification_email }, () => {
        let myData = {
          email_name: notification_email,
          time_int: new_time,
        };
        chrome.tabs.executeScript(
          {
            code: `let config = ` + JSON.stringify(myData),
          },
          function () {
            chrome.tabs.executeScript({
              file: '/src/inject/inject.js',
            });
          }
        );
        clearInput();
      });
    }
  });
function clearInput() {
  document.getElementById('timeInterval').value = '';
  document.getElementById('notification_email').value = '';
}

document.getElementById('stop_updating').addEventListener('click', () => {
  chrome.tabs.executeScript({
    code:
      'function stop_refresh() {clearInterval(myInterval)}; stop_refresh();',
  });
});
