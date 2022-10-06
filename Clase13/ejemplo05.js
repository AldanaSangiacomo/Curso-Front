const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves','Viernes','Sabado','Domingo','Findelargo'];
const numeros=[12,34,54,78,998];

console.log(dias);
console.log(numeros);

console.log(dias.length); //cantidad//

console.log(dias[1]); //posicion//

const ultimo= dias[dias.length-1];
console.log(ultimo);

const frutas=['palta','frutilla','manzana','banana'];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[frutas.length-1]);

let seleccionado=2;

console.log(frutas[seleccionado]);

seleccionado=3; // funciona el mimos nombre de variable porque tiene let en vez de const//
console.log(frutas[seleccionado]);
