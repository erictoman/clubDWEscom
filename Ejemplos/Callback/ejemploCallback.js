var a = callback => {
  setTimeout(() => {
    console.log("A");
    callback();
  }, 5000);
};

var b = () => {
  console.log("B");
};

a(() => {
  b();
});
