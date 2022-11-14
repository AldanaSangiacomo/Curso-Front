import '../styles/nosotros.css';

const NosotrosPage = (props) => {
    return(
        <main className="holder">
        <section className="histora">
            <h2>Historia</h2>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos repellendus facilis omnis minima dolores
                quaerat aperiam ipsa laudantium veniam unde neque, expedita reprehenderit veritatis consectetur sit cum
                modi
                beatae recusandae.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem maxime rerum aperiam distinctio.
                Assumenda debitis sed accusamus magni odit, similique ratione mollitia sequi, facilis minima architecto
                repudiandae deserunt esse omnis?</p>
        </section>
        <section className="">
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/nosotros/nosotros1.jpg" alt=""/>
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum aliquid a amet iure cupiditate sunt minus nobis doloremque modi dignissimos nihil placeat, itaque voluptate reiciendis iusto harum dolore pariatur!</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros2.jpg" alt=""/>
                    <h5>Diana Reyes</h5>
                    <h6>Gerente Comercial</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum aliquid a amet iure cupiditate sunt minus nobis doloremque modi dignissimos nihil placeat, itaque voluptate reiciendis iusto harum dolore pariatur!</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros3.jpg" alt=""/>
                    <h5>Roberto Zavala</h5>
                    <h6>Gerente de Sistemas</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum aliquid a amet iure cupiditate sunt minus nobis doloremque modi dignissimos nihil placeat, itaque voluptate reiciendis iusto harum dolore pariatur!</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros4.jpg" alt=""/>
                    <h5>Sandra Mastrolio</h5>
                    <h6>Gerente de Marketing</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum aliquid a amet iure cupiditate sunt minus nobis doloremque modi dignissimos nihil placeat, itaque voluptate reiciendis iusto harum dolore pariatur!</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros5.jpg" alt=""/>
                    <h5>Luciano Gomez</h5>
                    <h6>Gerente de Logística</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum aliquid a amet iure cupiditate sunt minus nobis doloremque modi dignissimos nihil placeat, itaque voluptate reiciendis iusto harum dolore pariatur!</p>
                </div>
            </div>

        </section>
    </main>
    )
}

export default NosotrosPage;