const distancia = parseInt(prompt('Ingrese una distancia a recorrer', ''))


if (distancia >= 0 && distancia <= 1000) {
    document.write('A pie')
}else if (distancia > 1000 && distancia <= 10000) {
    document.write('Bicicleta')
}else if (distancia > 10000 && distancia <= 30000) {
    document.write('Colectivo')
} else if (distancia > 30000 && distancia <= 100000) {
    document.write('Auto')
} else if (distancia > 100000) {
    document.write('Avión')
}


/*const distancia =25000; // va variando el valor
let transportes =''; // let en lugar de const porque cambia los transportes, se reasigna

if (distancia >= 0 && distancia <= 1000) {
    transportes='A pie'
}else if (distancia > 1000 && distancia <= 10000) {
    transportes='Bicicleta'
}else if (distancia > 10000 && distancia <= 30000) {
    transportes='Colectivo'
} else if (distancia > 30000 && distancia <= 100000) {
    transportes='Auto'
} else if (distancia > 100000) {
   transportes='Avión'
}

console.log(`Para ${distancia} metros recomendamos ir en ${transportes}`);*/


