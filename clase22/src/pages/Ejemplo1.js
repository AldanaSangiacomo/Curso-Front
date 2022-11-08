
import { Ejemplo1Props, Ejemplo2Props, Ejemplo3Props, Ejemplo4Props, Ejemplo5Props } from "../componentes/props/Props";


const nombre2 = 'Pablo'
const lista = ['manzana', 'banana', 'pera', 'frutilla'];
const mostrarValor = valor => {
    console.log(valor)
}

const Ejemplo1 = props => {
    return (
        <div>
            <h1>Ejemplo de Propiedades</h1>


            {/*Ejemplo de propiedad simple y la puedo reutilizar*/}

            <Ejemplo1Props nombre='Flavia' />
            <Ejemplo1Props nombre={nombre2} />
            <hr />

            {/*Ejemplo de pasar lista de elementos*/}

            <Ejemplo2Props elementos={lista} />
            <hr />
            {/*Ejemplo de multiples variables y destructuring*/}
            <Ejemplo3Props tutilo="La Noticia" subtitulo="Soy el subtitulo de la Noticia" cuerpo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ullam praesentium sunt consectetur neque, eum facilis corporis ipsa velit. Ab quia nobis laudantium excepturi molestias aspernatur cum deleniti repudiandae! Laborum." />
            <hr />
            <Ejemplo4Props cambiarValor={mostrarValor} />
            <hr />
            {/* Este ej sin cambiarValor no anda*/}
            {/* <Ejemplo4Props />*/}
            <hr />
            <Ejemplo5Props eventoClick={mostrarValor} />

        </div>


    )
}

export default Ejemplo1;  