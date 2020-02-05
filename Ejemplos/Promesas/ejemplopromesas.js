var suma = (n1, n2) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(n1 + n2);
    }, 2000);
  });
};

var sumas = [];
sumas.push(suma(5, 5));
sumas.push(suma(4, 4));
sumas.push(suma(3, 3));
sumas.push(suma(2, 2));

Promise.all(sumas).then(arreglosumas => {
  console.log(arreglosumas);
});

console.log("UWU");
