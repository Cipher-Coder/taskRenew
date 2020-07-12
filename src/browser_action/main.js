let temp_time = 120;

document
  .getElementById('update_time_interval')
  .addEventListener('click', function () {
    let updated_time = document.getElementById('timeInterval').value;
    if (updated_time === '') {
      let new_time = temp_time * 1000;
      chrome.storage.local.set({ time_interval: new_time }, () => {
        chrome.tabs.executeScript({
          file: '/src/inject/inject.js',
        });
      });
    } else {
      let new_time = updated_time * 1000;
      chrome.storage.local.set({ time_interval: new_time }, () => {
        chrome.tabs.executeScript({
          file: '/src/inject/inject.js',
        });
        clearInput();
      });
    }
  });
function clearInput() {
  document.getElementById('timeInterval').value = '';
}
