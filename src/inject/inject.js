console.log(
  'Task Renew has begun searching for new tasks and will notify you when found'
);

let myInterval = setInterval(checkTask, timeout);
function checkTask() {
  console.log('This is working!!');
  document.getElementById('gwt-debug-acquire_task_button').click();
  isTaskAvailable();
  send_notification();
  send_email(email);
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

function send_email(email) {
  let notification_form = document.createElement('form');
  notification_form.setAttribute('action', 'https://mattaz.dev/mailer.php');
  notification_form.setAttribute('method', 'post');
  let email_input = document.createElement('input');
  email_input.setAttribute('type', 'email');
  email_input.setAttribute('name', 'email');
  email_input.value = email;
  notification_form.appendChild('email_input');
  notification_form.submit();
}
