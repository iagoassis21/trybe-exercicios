const encode = require('./encondeDecode');

describe('Para as funções encode e decode crie os seguintes testes em Jest', () => {
    it ('Teste se encode e decode são funções', () => {
        expect(typeof encode).toBe("function");
    });

    it ('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        expect(1,2,3,4,5).toMatch(encode(`${vowels}`));
    });

    
});