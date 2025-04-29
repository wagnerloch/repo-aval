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
console.log("Soma: ", calc.soma(10, 5));
console.log("Subtração: ", calc.subtração(10, 5));
console.log("Multiplicação: ", calc.multiplicação(10, 5));
=======
// Testes
const calc = new Calculator();
console.log("Divisão: ", calc.divisão(10, 5));
console.log("Raiz Quadrada: ", calc.raizQuadrada(9));

