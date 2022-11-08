const Ejemplo1Props = props => {
    return (
        <h3>Hola {props.nombre}</h3>
    )
}

const Ejemplo2Props = props => {
    const { elementos } = props;
    return (
        <ul>
            {elementos.map(elemento => <li key={elemento}>{elemento}</li>)}
        </ul>
    )
}


const Ejemplo3Props = ({ titulo, subtitulo, cuerpo }) => {
    return (

        <div>
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
            <h5>{cuerpo}</h5>

        </div>
    )
}

const Ejemplo4Props = props => {
    return (

        //cuando ejevutamos el evento onChange
        //el input va a tomar lo que sucede en la funcion cambiarValor
        //entonces recibimos la propiedad de cambiarValor 
        <label> Ver en la consola: <input type="text" onChange={(e) =>
            props.cambiarValor(e.target.value)} />
        </label>
    )
}

const Ejemplo5Props = props => {
    //defino la funcion que va a manejar el evento del click
    const handleClick = e => {
        //if > validar que esten pasando la propiedad (prop) que necesito (evento Click)
        if (props.eventoClick) {
            // si la estoy pasando sale Me clickeaste
            props.eventoClick('Me clickeaste')
        }
    }
    return(
        <p>
            <button onClick={handleClick}>Clickeame</button>
        </p>
    )
}



export {
    Ejemplo1Props,
    Ejemplo2Props,
    Ejemplo3Props,
    Ejemplo4Props,
    Ejemplo5Props
}