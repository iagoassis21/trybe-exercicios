const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
const elseScope = 'Não devo ser utilizada fora meu escopo (else)';

const testingScope = (escopo) => {
let testBool = (escopo === true) ? `${ifScope}. Ótimo, fui utilizada no escopo!` : `${elseScope}`;
console.log(testBool)
}
testingScope(false);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(function(a,b){return a-b});
const phrase = `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`
console.log(phrase); // será necessário alterar essa linha 😉


let longestWord = 'Só dando uma testadinha de leve aqui otorrinolaringologista kkk' // retorna 'aconteceu'
let count = longestWord.split(' ');
count.sort(function(a,b){return a.length-b.length})
console.log(count[count.length-1])






