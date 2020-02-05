var suma = (n1, n2) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(n1 + n2);
    }, 2000);
  });
};

suma(1, 1)
  .then(res => {
    return res;
  })
  .then(res => {
    return res + 1;
  })
  .then(res => {
    return res + 1;
  })
  .then(res => {
    return res + 1;
  })
  .then(res => {
    console.log(res);
  });
