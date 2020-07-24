console.log(
  'Task Renew has begun searching for new tasks and will notify you when found'
);
function send_serching_dialog() {
  chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      title: 'Task Renew has begun!',
      message: 'Task Renew has begun searching for tasks.',
      iconUrl: 'src/taskRenew48.png',
      type: 'basic',
    },
  });
}
send_serching_dialog();
let no_tasks_available = document.getElementById('gwt-debug-butter-bar-text');
let interval = config.time_int;
let myInterval = setInterval(startTask, interval);
function startTask() {
  start_checking();
}

function start_checking() {
  console.log('Task Renew has begun searching...');
  let acquire_task_button = document.getElementById(
    'gwt-debug-acquire_task_button'
  );
  acquire_task_button.click();
  setTimeout(check_for_nta, 2000);
}

function check_for_nta() {
  const NTA = no_tasks_available.textContent;
  if (NTA.localeCompare('No tasks are available.') !== 0) {
    clearInterval(myInterval);
    send_notification();
    send_email();
  }
}

function send_notification() {
  chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      title: 'Tasks Found!!',
      message: 'Please return to your computer. Tasks have been found!',
      iconUrl: 'src/taskRenew48.png',
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
