import alumnos from '../data/alumnos.json'

const Ejemplo4 = props => {
    return (
        <>
            <h1>Ej 4 Json</h1>
            <ul>
                {alumnos.map(alumno => (
                    <li>{alumno.nombre} {alumno.apellido} - edad:
                    ({alumno.edad})</li>

                ))}
            </ul>
        </>
    )
}

export default Ejemplo4;