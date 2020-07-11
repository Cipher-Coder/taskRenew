let temp_time = 120;
let update_time = document.getElementById('update_time_interval');

update_time.addEventListener('click', function () {
  let updated_time = document.getElementById('timeInterval').value;
  if ((updated_time = '')) {
    updated_time = temp_time * 1000;
    chrome.storage.local.set({ time_interval: updated_time });
  } else {
    let new_time = updated_time * 1000;
    chrome.storage.local.set({ time_interval: new_time });
  }
});
