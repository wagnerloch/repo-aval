const prompt = require("prompt-sync")();

v1 = Number(prompt("Digite o primeiro valor: "));
v2 = Number(prompt("Digite o segundo valor: "));

// retorna o valor da soma entre os dois parâmetros
function sum() {
    return v1 + v2;
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {}

console.log(sum());
