export default function square(v1) {

    if (isNaN(parseFloat(v1))) {
        return 'Não é possível calcular a raiz quadrada de um não número';
    }

    if (v1 < 0) {
        return 'Não é possível calcular a raiz quadrada de um número negativo';
    }

    return Math.sqrt(v1);
}