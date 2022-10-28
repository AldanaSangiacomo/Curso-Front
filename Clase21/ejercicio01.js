const edad=parseInt(prompt('Ingrese su edad', ''));


/*if(Number.isNaN(edad)){
    alert('La edad ingresada no es válida')
}else if(edad>=18){
    alert(`Usted puede conducir`);
}else{
    alert(`Usted no puede conducir`);
}*/

if(Number.isNaN(edad)){
    document.write('La edad ingresada no es válida')
}else if(edad>=18){
    document.write('Usted puede conducir')
}else{
    document.write('Usted no puede conducir')
}
