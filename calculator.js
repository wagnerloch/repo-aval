// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
  const n1 = Number(v1);
  const n2 = Number(v2);

  if (isNaN(n1) || isNaN(n2)) {
    throw new Error("Os parâmetros devem ser números ou strings numéricas");
  }

  return n1 + n2;
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
    return v1 - v2;
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
    if (typeof v1 !== 'number' || typeof v2 !== 'number') {
        return "Erro: ambos os parâmetros devem ser números";
    }
    if (v2 === 0) {
        return "Erro: divisão por zero";
    }
    return v1 / v2;
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
    return v1 * v2;
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
    if (v1 < 0) {
        return "Erro: número negativo";
    }
    return Math.sqrt(v1);
}

v1 = 4;
v2 = 3;

// aparece no console
console.log(sum(v1, v2));
console.log(square(v1));
console.log(div(10, 2));
