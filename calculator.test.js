const { sum, sub, div, mult, square} = require('./calculator');

// Teste unitário para a função subtração

test('subtração de 5 e 3 deve ser 2', () => {
    expect(sub(5, 3)).toBe(2);
});

test('subtração de 10 e 7 deve ser 3', () => {
    expect(sub(10, 7)).toBe(3);
});

// Teste unitário para a função soma
test('soma de 2 e 3 deve ser 5', () => {
    expect(sum(2, 3)).toBe(5);
});
test('soma de 5 e 7 deve ser 12', () => {
    expect(sum(5, 7)).toBe(12);
});

// Teste unitário para a função divisão
test('divisão de 6 por 2 deve ser 3', () => {
    expect(div(6, 2)).toBe(3);
});
test('divisão de 10 por 5 deve ser 2', () => {
    expect(div(10, 5)).toBe(2);
});

// Teste unitário para a função multiplicação
test('multiplicação de 3 e 4 deve ser 12', () => {
    expect(mult(3, 4)).toBe(12);
});
test('multiplicação de 5 e 6 deve ser 30', () => {
    expect(mult(5, 6)).toBe(30);
});

// Teste unitário para a função square

test('square of 2 should be 4', () => {
	expect(square(2)).toBe(4);
});

test('square of 3 should be 9', () => {
    expect(square(3)).toBe(9);
});



module.exports = {
    sum,
    sub,
    div,
    mult,
    square
};
