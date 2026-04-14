// histórico global
let history = [];

// função auxiliar para salvar no histórico
function addToHistory(operation) {
  history.push(operation);
}

// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
  const result = v1 + v2;
  addToHistory(`${v1} + ${v2} = ${result}`);
  return result;
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
  const result = v1 - v2;
  addToHistory(`${v1} - ${v2} = ${result}`);
  return result;
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
  if (v2 === 0) {
    addToHistory(`Erro: divisão por zero`);
    return "Erro";
  }
  const result = v1 / v2;
  addToHistory(`${v1} / ${v2} = ${result}`);
  return result;
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
  const result = v1 * v2;
  addToHistory(`${v1} * ${v2} = ${result}`);
  return result;
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
  const result = Math.sqrt(v1);
  addToHistory(`√${v1} = ${result}`);
  return result;
}

// função para exibir o histórico
function showHistory() {
  console.log("Histórico de cálculos:");
  history.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}


// ===== TESTE =====
let v1 = 10;
let v2 = 5;

console.log(sum(v1, v2));
console.log(sub(v1, v2));
console.log(div(v1, v2));
console.log(mult(v1, v2));
console.log(square(v1));

showHistory();