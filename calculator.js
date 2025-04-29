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

function div() {
  const num1 = parseFloat(prompt("Digite o primeiro número: "));
  const num2 = parseFloat(prompt("Digite o segundo número: "));

  if (v2 === 0) {
    return "Divisão por zero não é permitida";
  } else {
    const resultado = num1 / num2;
    console.log(`Divisão entre ${num1} e ${num2} = ${resultado}`);
  }
}

function mult() {
  const num1 = parseFloat(prompt("Digite o primeiro número: "));
  const num2 = parseFloat(prompt("Digite o segundo número: "));

  const resultado = num1 * num2;
  console.log(`Multiplicação entre ${num1} e ${num2} = ${resultado}`);
}

function sqrt() {
  const num1 = parseFloat(prompt("Digite o número: "));
  const resultado = Math.sqrt(num1);

  if (isNaN(resultado)) {
    console.log("Raiz quadrada de número negativo não é permitida");
    return;
  }
  console.log(`Raiz quadrada de ${num1} = ${resultado}`);
}

function showMenu() {
  console.log("\nEscolha uma operação:");
  console.log("+----------------------+");
  console.log("| 1 - Soma             |");
  console.log("| 2 - Subtração        |");
  console.log("| 3 - Divisão          |");
  console.log("| 4 - Multiplicação    |");
  console.log("| 5 - Raiz Quadrada    |");
  console.log("| 6 - Sair             |");
  console.log("+----------------------+");
}

while (true) {
  showMenu();

  const choice = parseInt(prompt("Digite sua escolha: "));

  switch (choice) {
    case 1:
      sum();
      break;
    case 2:
      sub();
      break;
    case 3:
      div();
      break;
    case 4:
      mult();
      break;
    case 5:
      sqrt();
      break;
    case 6:
      console.log("Saindo...");
      process.exit(0);
    default:
      console.log("Opção inválida! Tente novamente.");
  }
}
