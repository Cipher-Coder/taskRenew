console.log(
  'Task Renew has begun searching for new tasks and will notify you when found'
);
let interval = 5 * 1000;
let myInterval = setInterval(checkTask, interval);
function checkTask() {
  console.log('This is working!!');
  document.getElementById('gwt-debug-acquire_task_button').click();
  isTaskAvailable();
  send_notification();
  send_email();
}

let no_tasks_available = document.getElementById('gwt-debug-butter-bar-text')
  .value;

function stop_refresh() {
  clearInterval(myInterval);
}

function isTaskAvailable() {
  if (no_tasks_available !== 'No tasks are available.') {
    stop_refresh();
  }
}

function send_notification() {
  chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      title: 'Tasks Found!!',
      message: 'Please return to your computer. Tasks have been found!',
      iconUrl: 'src/icon48.png',
      type: 'basic',
    },
  });
}

function send_email() {
  let data = new FormData();
  data.append('email', notification_email);
  let base_url = 'https://mattaz.dev/mailer.php';
  let xhr = new XMLHttpRequest();
  xhr.open('POST', base_url);
  xhr.setRequestHeader(
    'Content-Type',
    'application/x-www-form-urlencoded; charset=UTF-8'
  );
  xhr.send(data);
}
