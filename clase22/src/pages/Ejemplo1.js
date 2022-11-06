
import { Ejemplo1Props } from "../componentes/props/Props";

const nombre2 = 'Pablo'
const Ejemplo1 = props => {
    return (
        <div>
            <h1>Ejempo de propiedades</h1>

            <Ejemplo1Props nombre='Flavia' />
            {/*ejemplo de propiedad simple y la puedo reutilizar*/}
            <Ejemplo1Props nombre={nombre2} />
            
        </div>
    )
}
export default Ejemplo1
