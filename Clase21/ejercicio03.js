
const numeros = [1, 2, 18, 9, 15];

let mayor = 0;

for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }

}

document.write(`El mayor número es ${mayor}`);