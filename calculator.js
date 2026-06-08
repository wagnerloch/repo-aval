const prompt = require('prompt-sync')();

// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
}

// retorna o valor da subtração entre os dois parâmetros

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
    console.log("=".repeat(40));
    console.log("== " + Math.sqrt(v1) + " ==");
    console.log("=".repeat(40));
}

while (true) {
    console.log('1 - Soma');
    console.log('2 - Subtracao');
    console.log('3 - Divisao');
    console.log('4 - Multiplicacao');
    console.log('5 - Raiz');
    console.log('6 - Sair');

    const option = Number(prompt('Escolha uma opção: '));
    let v1 = 0;
    let v2 = 0;
    if (option === 1) {
        v1 = Number(prompt('Digite o primeiro valor: '));
        v2 = Number(prompt('Digite o segundo valor: '));
        sum(v1, v2);
    } else if (option === 2) {
        v1 = Number(prompt('Digite o primeiro valor: '));
        v2 = Number(prompt('Digite o segundo valor: '));
        sub(v1, v2);
    } else if (option === 3) {
        v1 = Number(prompt('Digite o primeiro valor: '));
        v2 = Number(prompt('Digite o segundo valor: '));
        div(v1, v2);
    } else if (option === 4) {
        v1 = Number(prompt('Digite o primeiro valor: '));
        v2 = Number(prompt('Digite o segundo valor: '));
        mult(v1, v2);
    } else if (option === 5) {
        v1 = Number(prompt('Digite o primeiro valor: '));
        square(v1);
    } else if (option === 6) {
        break;
    }


}