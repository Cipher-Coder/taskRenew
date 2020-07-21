console.log(
  'Task Renew has begun searching for new tasks and will notify you when found'
);
let interval = 120 * 1000;
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
let data = {
  email: notify,
};
function send_email() {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://mattaz.dev/mailer.php', true);
  xhr.setRequestHeader(
    'Content-Type',
    'application/x-www-form-urlencoded; charset=UTF-8'
  );
  xhr.send(data);
}
