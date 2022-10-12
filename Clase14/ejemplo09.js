function validarLargo(texto,LargoRequerido) {
    return texto.length >= LargoRequerido
}

function validarForm() {
    const nombreValido = true;
    const passWordValido = validarLargo(document.form1.text1.value, 5);

    const resultado = nombreValido && passWordValido;

    if (resultado) {
        alert('Es Válido')
    } else {
        alert('No Es Válido')
    }
}