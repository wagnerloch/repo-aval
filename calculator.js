// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
    // se o segundo parâmetro for igual a 0, retorne uma mensagem de erro
    if (v2 === 0) {
        return 'Erro: Divisão por zero';
    }
    // caso contrário, retorne o resultado da divisão
    return v1 / v2;
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {}

console.log(sum(v1, v2));
