import '../styles/Footer.css'

import Instagram from '../icons/Instagram.jsx'
import Facebook from '../icons/Facebook.jsx'
import Linkedin from '../icons/Linkedin.jsx'

function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <Instagram />
                    <a>Instagram</a>
                </li>
                <li>
                    <Facebook />
                    <a>Facebook</a>
                </li>
                <li>
                    <Linkedin />
                    <a>LinkedIn</a>
                </li>
            </ul>
            <p>© All rights reserved: Joaquin Trujillo</p>
        </footer>
    )
}

export default Footer