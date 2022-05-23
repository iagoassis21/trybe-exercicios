const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  // Adicione o código do exercício aqui:

function containsA() {
    // escreva seu código aqui
    return names.reduce((acc, curr) => acc + curr.toLowerCase().split('').reduce((acc2, word) => word === 'a' ? acc2 += 1 : acc2, 0), 0);
  }

  console.log(containsA())