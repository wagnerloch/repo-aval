const sum = require('./calculator').sum;
const sub = require('./calculator').sub;
const div = require('./calculator').div;
const mult = require('./calculator').mult;
const square = require('./calculator').square;

test('É esperado a soma de 2 numeros', () => {
  expect(sum(2, 3)).toBe(5);
});
test('É esperado a subtração de 2 numeros', () => {
  expect(sub(5, 3)).toBe(2);
});
test('É esperado a divisão de 2 numeros', () => {
  expect(div(10, 2)).toBe(5);
});
test('É esperado a multiplicação de 2 numeros', () => {
  expect(mult(4, 5)).toBe(20);
});
test('É esperado a raiz quadrada de um numero', () => {
  expect(square(9)).toBe(3);
});