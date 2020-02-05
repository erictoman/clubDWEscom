var leersoloNumeros = require("./tecladoSoloNumeros");

leersoloNumeros("Escribe un numero \n").then(numero => {
  console.log("Numero: " + numero);
});
