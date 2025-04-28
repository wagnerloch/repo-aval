
// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {}

const prompt = require("prompt-sync")();

while (true) {
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Radiciação");
    console.log("0. Sair")
    console.log();
    const opcao = Number(prompt("Qual operação você deseja realizar? "));

    if (opcao == 0) {
        break;
    }

    switch (opcao) {
        default:
            console.log("Opção Inválida");
            console.log();
            break;

        case 1:
            console.log("Informe os números que você deseja realizar a soma: ");
            const sum1 = Number(prompt("Primeiro número: "));
            const sum2 = Number(prompt("Segundo número: "));
            console.log(`O resultado é: ${sum(sum1, sum2)}`);
            console.log();
            break;

        case 2:
            console.log("Informe o minuendo e o subtraendo, respectivamente, para realizar a subtração: ");
            const sub1 = Number(prompt("Minuendo: "));
            const sub2 = Number(prompt("Subtraendo: "));
            console.log(`O resultado é: ${sub(sub1, sub2)}`);
            console.log();
            break;

        case 3:
            console.log("Informe o multiplicando e o multiplicador, respectivamente, para realizar a multiplicação: ");
            const mult1 = Number(prompt("Multiplicando: "));
            const mult2 = Number(prompt("Multiplicador: "));
            console.log(`O resultado é: ${mult(mult1, mult2)}`);
            console.log();
            break;

        case 4:
            console.log("Informe o dividendo e o divisor, respectivamente, para realizar a divisão: ");
            const div1 = Number(prompt("Dividendo: "));
            const div2 = Number(prompt("Divisor: "));
            console.log(`O resultado é: ${div(div1, div2)}`);
            console.log();
            break;

        case 5:
            const root = Number(prompt("Informe o número do qual você deseja obter a raiz quadrada: "));
            console.log(`O resultado é: ${square(root)}`);
            console.log();
            break;
    }
}

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
function mult(v1, v2) {}

// calculadora.js

function multiplicar(a, b) {
    return a * b;
  }
  
  // Exporta a função, se você for usar em outro arquivo
  module.exports = { multiplicar };
  

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {}

console.log(sum(v1, v2));

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
    return Math.sqrt(v1);
}
