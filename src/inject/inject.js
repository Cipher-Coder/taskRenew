console.log(
  'Task Renew has begun searching for new tasks and will notify you when found'
);

let myInterval = setInterval(checkTask, timeout);
function checkTask() {
  console.log('this is working!!');
}
