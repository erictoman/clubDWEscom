var seconds = (startDate, endDate) => {
  return (endDate.getTime() - startDate.getTime()) / 1000;
};

var tiempo = () => {
  return new Promise(resolve => {
    var startDate = new Date();
    setTimeout(() => {
      var endDate = new Date();
      resolve(seconds(startDate, endDate));
    }, 2000);
  });
};

var tiempos = [];
tiempos.push(tiempo());
tiempos.push(tiempo());
tiempos.push(tiempo());
tiempos.push(tiempo());

var startDate = new Date();
Promise.all(tiempos).then(arreglotiempos => {
  var endDate = new Date();
  console.log(seconds(startDate, endDate));
  console.log(arreglotiempos);
});
