import '../styles/galeria.css';

const GaleriaPage = (props) => {
    return(
        <main className="holder">
        <h2>Galeria</h2>
        <div className="galeria">
            <img src="img/galeria/img01.jpg" alt="" className="rojo"/>
            <img src="img/galeria/img02.jpg" alt=""/>
            <img src="img/galeria/img03.jpg" alt="" id="celeste"/>
            <img src="img/galeria/img04.jpg" alt=""/>
            <img src="img/galeria/img05.jpg" alt=""/>
        </div>
        <div className="galeria">
            <img src="img/galeria/img06.jpg" alt="" className="rojo"/>
            <img src="img/galeria/img07.jpg" alt=""/>
            <img src="img/galeria/img01.jpg" alt=""/>
            <img src="img/galeria/img02.jpg" alt=""/>
            <img src="img/galeria/img03.jpg" alt=""/>
        </div>
    </main>
    )
}

export default GaleriaPage;