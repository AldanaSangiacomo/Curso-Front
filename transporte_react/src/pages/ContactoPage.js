import '../styles/contacto.css';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
        <section>
            <h2>Contacto Rápido</h2>
            <form action="" className="formulario">
                <p>
                    <label htmlFor="">Nombre</label>
                    <input type="text"/>
                </p>
                <p>

                    <label htmlFor="">Email</label>
                    <input type="Email"/>
                </p>
                <p>
                    <label htmlFor="">Teléfono</label>
                    <input type="Number"/>
                </p>
                <p>
                    <label htmlFor="">Mensaje</label>
                    <textarea></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>

                </p>
            </form>
        </section>
        <section className="datos">
            <h2>Otras vías de comunicación</h2>
            <p> También puede contactarse con nosotros usando los siguientes medios:</p>
            <ul>
              
                <li>Teléfono: 12345-6987</li>
                <li>Email: contacto@transportes.com.ar </li>
                <li><a href="https://es-la.facebook.com/transportesX">Facebook: facebook.com/transportesX</a></li>
                <li>Twitter: transportesX</li>
                <li>Skype: transportes_skype</li>
            </ul>
        </section>
    </main>
    )
}

export default ContactoPage;