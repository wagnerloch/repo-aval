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
      return 'Erro: Divisão por zero!';
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
      return 'Erro: Número negativo não tem raiz quadrada real!';
    }
    return Math.sqrt(v1);
  }
  
  // Exemplo de uso:
  const v1 = 10;
  const v2 = 5;
  
  console.log("Soma:", sum(v1, v2));          // 15
  console.log("Subtração:", sub(v1, v2));     // 5
  console.log("Divisão:", div(v1, v2));        // 2
  console.log("Multiplicação:", mult(v1, v2)); // 50
  console.log("Raiz quadrada de v1:", square(v1)); // ~3.16
  console.log("Raiz quadrada de v2:", square(v2)); // ~2.23
  