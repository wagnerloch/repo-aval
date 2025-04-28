import prompt from 'prompt-sync';
import sum from './sum.js';
import div from './div.js';    
import mul from './mul.js';
import square from './square.js';

const input = prompt();
console.log('Calculadora');
console.log('Escolha uma operação:');
console.log('1. Soma');
console.log('2. Subtração');
console.log('3. Divisão');
console.log('4. Multiplicação');
console.log('5. Raiz Quadrada');
const option = input('Digite o número da operação desejada: ');
const v1 = parseFloat(input('Digite o primeiro valor: '));
if (option != '5') {
    const v2 = parseFloat(input('Digite o segundo valor: '));
}
switch(option) {
    case '1':
        console.log(`Resultado: ${sum(v1, v2)}`);
        break;
    case '2':
        console.log(`Resultado: ${sub(v1, v2)}`);
        break;
    case '3':
        console.log(`Resultado: ${div(v1, v2)}`);
        break;
    case '4':
        console.log(`Resultado: ${mul(v1, v2)}`);
        break;
    case '5':
        console.log(`Resultado: ${square(v1)}`);
        break;
    default:
        console.log('Operação inválida');
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {}
