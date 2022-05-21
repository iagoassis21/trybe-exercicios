const { number } = require('yargs');
const myFizzBuzz = require('./myFizzBuzz');

// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, 
// retorna "fizz" se for divisível apenas por 3, 
// retorna "buzz" se divisível apenas por 5, 
// retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número.


describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
    
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect('fizzbuzz').toMatch(myFizzBuzz(15))
    });

    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect('fizz').toMatch(myFizzBuzz(6))
    });

    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect('buzz').toMatch(myFizzBuzz(10))
    });

    it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(8).toBe(myFizzBuzz(8))
    });

    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(false).toBeFalsy()
    });
});