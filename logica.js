const prompt = require("prompt-sync")();

let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));
let num3 = Number(prompt("Ingrese el tercer número:"));


let numeros = [];

for (let i = 0; i < 1; i++) {
    numeros.push(num1, num2, num3);
}

console.log(numeros.sort((a, b) => b - a));
console.log(numeros.sort((a, b) => a - b));

if ((num1 === num2) && (num2 === num3)) {
    console.log("Los tres números son iguales.");
    }
else if (num1 === num2) {
    console.log("El primer y el segundo número son iguales.");
    }
else if (num2 === num3) {
        console.log("El segundo y el tercer número son iguales.");
    }
else if (num1 === num3) {
        console.log("El primer y el tercer número son iguales.");
    }
else {
    console.log("No hay números iguales.");
    }
