const { square } = require('./calculator');
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
