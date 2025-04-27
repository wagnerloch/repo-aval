const prompt = require("prompt-sync")()

// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
    const v1 = prompt(Number("Primeiro valor: "))
    const v2 = prompt(Number("Segundo valor: "))

    return v1 + v2;
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
    const v1 = Number(prompt("Primeiro valor: "));
    const v2 = Number(prompt("Segundo valor: "));

    return v1 - v2;
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
    const v1 = Number(prompt("Primeiro valor: "));
    const v2 = Number(prompt("Segundo valor: "));

    return v1 / v2;
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
    const v1 = Number(prompt("Primeiro valor: "));
    const v2 = Number(prompt("Segundo valor: "));

    return v1 * v2;
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {}

