// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {}

class Calculator {
 
    divisão(a, b) {
      return a / b;
    }
  
    raizQuadrada(a) {
      return Math.sqrt(a);
    }
  }

  module.exports = Calculator;

// Testes
const calc = new Calculator();
console.log("Divisão: ", calc.divisão(10, 5));
console.log("Raiz Quadrada: ", calc.raizQuadrada(9));
