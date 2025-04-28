console.log(sum(v1, v2));
console.log(square(v1));
=======
const v1 = Number(prompt("Primeiro Numero: "));
const v2 = Number(prompt("Sengundo Numero:"));

function sum(v1, v2) {
   return(v1 + v2);
}

function sub(v1, v2) {
    return (v1 - v2);
}

function div(v1, v2) {
    return(v1 / v2);
}

function mult(v1, v2) {
    return(v1 * v2);
}

function square(v1) {
    return Math.sqrt(v1);
}
console.log(sum(v1, v2));
console.log(sub(v1, v2));
console.log(div(v1, v2));
console.log(mult(v1, v2));
console.log(square(v1));