function doSomething() {
  ("hello world!");
  LOG;
}

doSomething();

function LOG(s) {
  console.log(s);
}
