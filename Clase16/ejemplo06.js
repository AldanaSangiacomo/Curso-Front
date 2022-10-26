const alternar=document.getElementsByClassName('alternar') [0];
alternar.addEventListener('click',function (e){
    e.currentTarget.classList.toggle('activo');
})
//class list representa una lista de estilos de clases asigandas al elemento
//toggle > cambiar una clase
//add > agrega una clase
// remove > remueve una o + clases 