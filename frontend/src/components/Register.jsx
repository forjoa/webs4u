import Logo from './Logo.jsx'

import '../styles/Register.css'

import { useState, useRef } from 'react'

const Register = () => {
    const lenguajes_y_frameworks = [
        "Python",
        "JavaScript",
        "Java",
        "C++",
        "Ruby",
        "Swift",
        "PHP",
        "Go",
        "Rust",
        "Kotlin",
        "C#",
        "TypeScript",
        "HTML/CSS",
        "Node.js",
        "React",
        "Angular",
        "Vue.js",
        "Django",
        "Ruby on Rails",
        "Spring Boot",
        "Express.js",
        "Laravel",
        "ASP.NET",
        "Flutter",
        "TensorFlow",
        "PyTorch",
        "Bootstrap",
        "jQuery",
        "Symfony",
        "Flask",
        "ASP.NET Core",
        "Vue.js",
        "Ember.js",
        "Ruby on Rails"
    ]
    const [openSelect, setOpenSelect] = useState(false)

    const leagueInput = useRef()

    function selectValue(e) {
        leagueInput.current.value = e.target.outerText
        setOpenSelect(false)
    }

    function openOption() {
        setOpenSelect(true)
    }

    return (
        <>
            <Logo />
            <main className="register">
                <h1>Gracias por elegirnos!</h1>
                <form action="" className="register-form">
                    <label htmlFor='name'>Nombre: </label>
                    <input type='text' className='name' name='name' id='name'></input>

                    <label htmlFor='surname'>Apellido:</label>
                    <input type='text' className='surname' name='surname' id='surname'></input>

                    <label htmlFor='email'>Correo:</label>
                    <input type='email' className='email' name='email' id='email'></input>

                    <label htmlFor='username'>Contraseña:</label>
                    <input type='password' className='password' name='password' id='password'></input>

                    <label htmlFor='languages'>Lenguajes y frameworks:</label>
                    <div className="select-option">
                        <input
                            type="text"
                            onClick={openOption}
                            onBlur={() => {
                                setOpenSelect(false)
                            }}
                            ref={leagueInput}
                            id='league'
                            placeholder='Selecciona el lenguage o framework'
                            readOnly
                        />

                        <span className={openSelect ? 'icon active' : 'icon'}>x</span>

                        <div className={openSelect ? 'options active' : 'options'}>
                            {
                                lenguajes_y_frameworks.map((item, index) => {
                                    <li onClick={selectValue} key={index}>
                                        {item}
                                    </li>
                                })
                            }
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Register