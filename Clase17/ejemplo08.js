const nombre = 'Flavia';
const edad = 41;

console.log(`Hola! ${nombre}, asi que tienes ${edad} años.`);


const edad1 = 18;
const edad2 = 36;

const mensaje1 = `La cuota para personas de ${edad1} es de ${edad1 >= 21 ? 500 : 300} `;
const mensaje2 = `La cuota para personas de ${edad2} es de ${edad2 >= 21 ? 500 : 300} `; // variable condición true:false

console.log(mensaje1);
console.log(mensaje2);