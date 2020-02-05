var prom = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });
};

var f1 = async () => {
  var val1 = await prom();
  var val2 = await prom();
  var val3 = await prom();
  var val4 = await prom();
  var val5 = await prom();
  return [val1, val2, val3, val4, val5];
};

f1().then(res => {
  console.log(res);
});
