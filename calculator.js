// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
    	return v1 + v2;
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
	return v1 - v2;
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
	return v1 / v2;
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
	return v1 * v2;
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v3) {
	return Math.sqrt(v3);
}

const v1 = 5;
const v2 = 3;
const v3 = 9;

console.log(sum(v1, v2));
console.log(sub(v1, v2));
console.log(div(v1, v2));
console.log(mult(v1, v2));
console.log(square(v3));