const frutas = ['palta', 'naranjas', 'manzanas', 'ananas', 'bananas',];
console.log(frutas);
console.log(frutas.sort());

const numeros = [78, 10, 7, 1, 2];
console.log(numeros);
console.log(numeros.sort());


const num = numeros.sort(function (a, b) {
    return a - b; //ordenar de la A a la B, no es resta!
})
console.log(num);

const num2 = numeros.sort(function (a, b) {
    return b - a; //ordenar de la A a la B, no es resta!
})
console.log(num2);

const palabras = ['flavia', 'pablo', 'abeja', 'perros', 'animal'];

const pala = palabras.sort(function (a, b) {
    return b - a;
})

console.log(pala);
console.log(palabras.sort().reverse());// posible solución para ordenar 

const palabrs = palabras.sort(function (b,a){ //otra solución para ordenar
    if(b>a) return -1;
    return 0;
})
console.log(palabrs);

