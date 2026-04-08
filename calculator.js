const prompt = require('prompt-sync')();

// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
    return v1 + v2;
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));

    let resultado = num1 - num2;
    console.log(`Subtração entre ${num1} e ${num2} = ${resultado}`);
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {

    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    
    if (v2 === 0){
        return "Divisão por zero não é permitida";
    }else {
        let resultado = num1 / num2;
        console.log(`Divisão entre ${num1} e ${num2} = ${resultado}`);
    }
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult() {

    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    
    let resultado = num1 * num2;
    console.log(`Multiplicação entre ${num1} e ${num2} = ${resultado}`);
}


// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {}

console.log(`soma`,sum(10, 5));
console.log(`divisão`,div(10, 5));
