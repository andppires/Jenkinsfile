const welcome = require('../src/welcome');

test('A função de boas-vindas retorna a mensagem correta', () => {
    expect(welcome()).toBe('Bem-vindo ao mundo!');
});