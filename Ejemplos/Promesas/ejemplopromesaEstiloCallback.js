var suma = (n1, n2) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(n1 + n2);
    }, 2000);
  });
};

suma(5, 5).then(resultado1 => {
  suma(4, 4).then(resultado2 => {
    suma(3, 3).then(resultado3 => {
      suma(2, 2).then(resultado4 => {
        console.log(resultado1);
        console.log(resultado2);
        console.log(resultado3);
        console.log(resultado4);
      });
    });
  });
});
