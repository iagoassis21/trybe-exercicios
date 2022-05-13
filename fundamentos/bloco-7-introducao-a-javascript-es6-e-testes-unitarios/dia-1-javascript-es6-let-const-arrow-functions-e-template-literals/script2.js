// const calc = (num) => { return num === 0 ? 1 : num * calc(num-1) };
// console.log(calc(4));
// const longestWord = ('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const frase = 'Tryber x aqui!';
const myName = 'Iago';
let mySkills = [' Javascript', ' C/C++', ' Html', ' CSS', ' Bootstrap']
mySkills.sort();

const changeName = (string) => {
    let result = frase.replace(/x/g, `${myName}`)
    concatStrings(result)
}

const concatStrings = (changeName) => {
    let result = `${changeName} 
    Minhas cinco principais habilidades são:
    -${mySkills[0]}
    -${mySkills[1]}
    -${mySkills[2]}
    -${mySkills[3]}
    -${mySkills[4]}
    #goTrybe`

    console.log(result)
}


changeName(myName);    

