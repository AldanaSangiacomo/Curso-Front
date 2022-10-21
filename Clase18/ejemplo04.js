function getNombreDiaForMes(mes) {
    if (Number.isNaN(mes)) return false; // tiene que ser nro
    if (mes < 1 || mes > 12) return false; // mes comprendido entre 1 y 12
    mes--; //10>9 asi octubre seria el elemento 9 porque arranca desde el 0
    const data = [
        {
            nombre: 'Enero', dias: 31
        },
        {
            nombre: 'Febrero', dias: 28
        },
        {
            nombre: 'Marzo', dias: 31
        },
        {
            nombre: 'Abril', dias: 30
        },
        {
            nombre: 'Mayo', dias: 31
        },
        {
            nombre: 'Junio', dias: 30
        },
        {
            nombre: 'Julio', dias: 31
        },
        {
            nombre: 'Agosto', dias: 31
        },
        {
            nombre: 'Septiembre', dias: 30
        },
        {
            nombre: 'Octubre', dias: 31
        },
        {
            nombre: 'Noviembre', dias: 30
        },
        {
            nombre: 'Diciembre', dias: 31
        },
    ]
    return data[mes];

}  

const numMes=parseInt(prompt('Ingrese el mes',''));
const resultado= getNombreDiaForMes(numMes);

if(resultado) {
    alert(`El mes ${resultado.nombre} tiene ${resultado.dias}`)
}else{
    alert(`Mes inválido`);
}
