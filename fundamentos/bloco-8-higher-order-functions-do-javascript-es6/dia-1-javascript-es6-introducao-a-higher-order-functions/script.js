const newEmployees = (nome) => {
    const employees = {
      id1: nome('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: nome('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: nome('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const cadastraFunc = (nomeDoFunc) => {
    let addEmail = nomeDoFunc.replace(' ', '.').toLowerCase();
    return{
        Nome: nomeDoFunc,
        email: `${addEmail}@trybe.com`
    };
};

console.log(newEmployees(cadastraFunc));