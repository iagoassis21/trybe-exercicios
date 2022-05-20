const numeroApostado = 2;

const realizaSorteio = (numero, callback) => {

    const win = 'Parabéns você ganhou';
    const lose = 'Tente novamente';
    const numeroSorteado = Math.floor(Math.random() * 5) + 1;

    if(callback(numero, numeroSorteado)){
        return win;
    }
        return lose;
}

const checarSeGanhou = (numero, numeroDoSorteio) => numero === numeroDoSorteio ? true : false;

console.log(realizaSorteio(numeroApostado, checarSeGanhou))
