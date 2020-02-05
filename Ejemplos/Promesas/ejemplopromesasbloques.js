var caso2 = n1 => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n1 == 1) {
        resolve(n1);
      } else {
        reject("Wrong number");
      }
    }, 2000);
  });
};

caso2(2)
  .then(num => {
    console.log(num);
  })
  .catch(reason => {
    console.log(reason);
  })
  .finally(() => {
    console.log("Promesa terminada");
  });
