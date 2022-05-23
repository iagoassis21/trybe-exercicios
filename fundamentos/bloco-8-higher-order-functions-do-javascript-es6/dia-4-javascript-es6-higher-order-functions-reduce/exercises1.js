// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  }
  console.log(flatten());
  console.log(arrays)
  