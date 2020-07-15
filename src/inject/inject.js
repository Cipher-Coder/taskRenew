console.log(
  'Task Renew has begun searching for new tasks and will notify you when found'
);

let myInterval = setInterval(checkTask, timeout);
function checkTask() {
  console.log('This is working!!');
  /*document.getElementById('gwt-debug-acquire_task_button').click();
  isTaskAvailable();*/
  send_notification();
}

/*let no_tasks_available = document.getElementById('gwt-debug-butter-bar-text')
  .value;*/

function stop_refresh() {
  clearInterval(myInterval);
}

/*function isTaskAvailable() {
  if (no_tasks_available !== 'No tasks are available.') {
    stop_refresh();
  }
}*/

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
