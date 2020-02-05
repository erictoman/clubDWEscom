var suma = (n1, n2, callback) => {
  setTimeout(() => {
    callback(n1 + n2);
  }, 2000);
};

suma(5, 1, resultado1 => {
  suma(resultado1, 1, resultado2 => {
    suma(resultado2, 2, resultado3 => {
      suma(resultado3, 3, resultado4 => {
        console.log(resultado4);
      });
    });
  });
});
