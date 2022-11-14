import '../styles/servicios.css';

const ServiviosPage = (props) => {
    return(
        <main className="holder">
        <h2>Servicios</h2>
        <div className="servicio">
            <img src="img/servicios/aereo.jpg" alt=""/>
            <div className="info">
                <h4>Transporte Aereo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem, nulla minima veritatis dolore
                    aperiam animi id vitae nam? Delectus praesentium enim cumque sed facilis quae dicta temporibus
                    itaque rem!</p>
            </div>

        </div>
        <div className="servicio">
            <img src="img/servicios/ferroviario.jpg" alt=""/>
            <div className="info">
                <h4>Transporte Ferroviario</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem, nulla minima veritatis dolore
                    aperiam animi id vitae nam? Delectus praesentium enim cumque sed facilis quae dicta temporibus
                    itaque rem!</p>
            </div>

        </div>
        <div className="servicio">
            <img src="img/servicios/maritimo.jpg" alt=""/>
            <div className="info">
                <h4>Transporte Maritimo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem, nulla minima veritatis dolore
                    aperiam animi id vitae nam? Delectus praesentium enim cumque sed facilis quae dicta temporibus
                    itaque rem!</p>
            </div>

        </div>
        <div className="servicio">
            <img src="img/servicios/terrestre.jpg" alt=""/>
            <div className="info">
                <h4>Transporte Terrestre</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem, nulla minima veritatis dolore
                    aperiam animi id vitae nam? Delectus praesentium enim cumque sed facilis quae dicta temporibus
                    itaque rem!</p>
            </div>

        </div>
    </main>
    )
}

export default ServiviosPage;