const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var entradaSoloNumeros = texto => {
  return new Promise(resolve => {
    rl.question(texto, resultado => {
      if (Number(resultado)) {
        rl.close();
        resolve(resultado);
      } else {
        resolve(entradaSoloNumeros(texto));
      }
    });
  });
};

module.exports = entradaSoloNumeros;
