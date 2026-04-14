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
  if (v2 === 0) {
    throw new Error("Não é possível dividir por zero.");
  }
  return v1 / v2;
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
    return v1*v2;
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
  return Math.sqrt(v1);
}

console.log(div(20, 10)); // Exemplo de uso da função div
console.log(sum(20, 10));
console.log(sub(20, 10));
console.log(mult(10, 20));
console.log(square(4));
