const prompt = require("prompt-sync")();

function sum() {
  const num1 = parseFloat(prompt("Digite o primeiro número: "));
  const num2 = parseFloat(prompt("Digite o segundo número: "));

  const resultado = num1 + num2;
  console.log(`Soma entre ${num1} e ${num2} = ${resultado}`);
}

function sub() {
  const num1 = parseFloat(prompt("Digite o primeiro número: "));
  const num2 = parseFloat(prompt("Digite o segundo número: "));

  const resultado = num1 - num2;
  console.log(`Subtração entre ${num1} e ${num2} = ${resultado}`);
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
  let num1 = parseFloat(prompt("Digite o primeiro número:"));
  let num2 = parseFloat(prompt("Digite o segundo número:"));

  if (v2 === 0) {
    return "Divisão por zero não é permitida";
  } else {
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
function sqrt() {
  let num1 = parseFloat(prompt("Digite o número: "));
  let resultado = Math.sqrt(num1);
  console.log(`Raiz quadrada de ${num1} = ${resultado}`);
}

console.log(`soma`, sum(10, 5));
console.log(`divisão`, div(10, 5));
console.log("Raiz Quadrada \n");
sqrt();
