import prompt from 'prompt-sync';

const input = prompt();
console.log('Calculadora');
console.log('Escolha uma operação:');
console.log('1. Soma');
console.log('2. Subtração');
console.log('3. Divisão');
console.log('4. Multiplicação');
console.log('5. Raiz Quadrada');
const option = input('Digite o número da operação desejada: ');

// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {}

console.log(sum(v1, v2));
