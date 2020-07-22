console.log(
  'Task Renew has begun searching for new tasks and will notify you when found'
);
function send_serching_dialog() {
  chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      title: 'Task Renew has begun!',
      message: 'Task Renew has begun searching for tasks.',
      iconUrl: 'src/icon48.png',
      type: 'basic',
    },
  });
}
send_serching_dialog();

let interval = config.time_int;
let myInterval = setInterval(checkTask, interval);
function checkTask() {
  console.log('Task Renew is searching...');
  let acquire_task_button = document.getElementById(
    'gwt-debug-acquire_task_button'
  );
  acquire_task_button.addEventListener('click', () => {
    let no_tasks_available = document.getElementById(
      'gwt-debug-butter-bar-text'
    ).textContent;
    if (!no_tasks_available) {
      clearInterval(myInterval);
      send_notification();
      send_email();
    }
  });
  acquire_task_button.click();
}

/* function stop_refresh() {
  clearInterval(myInterval);
  send_notification();
  send_email();
} */

/* function isTaskAvailable() {
  if (no_tasks_available !== 'No tasks are available.') {
    stop_refresh();
  }
} */

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

let notification_email = config.email_name;
function send_email() {
  let data = new FormData();
  data.set('name', notification_email);
  let base_url = 'https://mattaz.dev/mailer.php';
  let xhr = new XMLHttpRequest();
  xhr.open('POST', base_url);
  xhr.send(data);
}
