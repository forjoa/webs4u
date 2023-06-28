import './styles/Contact.css'
import cwu from './assets/3459559.jpg'

function Contact() {
    return (
        <aside>
            <div className="general">
                <div className="img">
                    <img src={cwu} />
                </div>
                <div className="form">
                    <form>
                        <label>Introduce tu nombre:</label>
                        <input type="text" />

                        <label>Introduce tu correo:</label>
                        <input type="email" />

                        <label>Introduce tu duda:</label>
                        <textarea />

                        <input type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </aside>
    )
}

export default Contact;
