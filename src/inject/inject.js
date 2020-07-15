console.log(
  'Task Renew has begun searching for new tasks and will notify you when found'
);

let myInterval = setInterval(checkTask, timeout);
function checkTask() {
  console.log('This is working!!' + timeout);
  /*document.getElementById('gwt-debug-acquire_task_button').click();
  isTaskAvailable();*/
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
