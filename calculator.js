const prompt = require("prompt-sync")()

console.log("Calculadora 🧮");
const v1 = Number(prompt("Digite o primeiro valor: "))
const op = prompt("Escolha a operação (+, -, *, /): ")
const v2 = Number(prompt("Digite o segundo valor: "))

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
function square(v1) {}

if (op == "+") {
    console.log(`${v1} + ${v2} = ${sum(v1, v2)}`)
} else if (op == "-") {
    console.log(`${v1} - ${v2} = ${sub(v1, v2)}`)
} else if (op == "*") {
    console.log(`${v1} * ${v2} = ${mult(v1, v2)}`)
} else if (op == "/") {
    if (v2 == 0) {
        console.log("Divisão por zero não é permitida.")
    } else{
        console.log(`${v1} / ${v2} = ${div(v1, v2)}`)
    }
}