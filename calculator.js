class Calculator {
 soma(a, b) {
      return a + b;
  }

  subtração(a, b) {
      return a - b;
  }

  multiplicação(a, b) {
      return a * b;
  }
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {}

module.exports = Calculator;


// Testes 
const calc = new Calculator();
console.log("Soma: ", calc.soma(10, 5));
console.log("Subtração: ", calc.subtração(10, 5));
console.log("Multiplicação: ", calc.multiplicação(10, 5));
