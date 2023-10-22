import Logo from './Logo.jsx'

import '../styles/Register.css'

import { useState } from 'react'

import locked from '../icons/locked.svg'
import unlocked from '../icons/unlocked.svg'

const Register = () => {
    const languages_frameworks = [
        "Astro",
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
        "PHP",
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
    const [selectedLanguages, setSelectedLanguages] = useState([])
    const [isUnlocked, setIsUnlocked] = useState(false)

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value

        if (!selectedLanguages.includes(selectedLanguage)) {
            setSelectedLanguages([...selectedLanguages, selectedLanguage])
        }
    }

    const removeSelectedLanguage = (language) => {
        const updatedSelectedLanguages = selectedLanguages.filter((lang) => lang !== language)
        setSelectedLanguages(updatedSelectedLanguages)
    }

    return (
        <>
            <Logo />
            <main className="register">
                <h1>Gracias por elegirnos!</h1>
                <form action="" className="register-form">
                    <label htmlFor='name'>Nombre: </label>
                    <input type='text' className='name' name='name' id='name' autoComplete="given-name"></input>

                    <label htmlFor='surname'>Apellido:</label>
                    <input type='text' className='surname' name='surname' id='surname' autoComplete="family-name"></input>

                    <label htmlFor='email'>Correo:</label>
                    <input type='email' className='email' name='email' id='email' autoComplete='email'></input>

                    <label htmlFor="password">Contraseña:</label>
                    <div className="password-input">
                        <input
                            type={isUnlocked ? 'text' : 'password'}
                            className="password"
                            name="password"
                            id="password"
                        />
                        <img
                            src={isUnlocked ? unlocked : locked}
                            onClick={() => setIsUnlocked(!isUnlocked)}
                            alt="password visibility"
                        />
                    </div>

                    <label htmlFor="languages">Lenguajes y frameworks:</label>
                    <select name="languages" className="languages" id="languages" onChange={handleLanguageChange}>
                        <option value="">Seleccione un lenguaje o framework</option>
                        {languages_frameworks.map((lang, index) => {
                            return (
                                <option key={index} value={lang}>{lang}</option>
                            )
                        })}
                    </select>
                    <div className="selected-languages">
                        {selectedLanguages.map((selectedLang, index) => (
                            <div key={index} className="selected-language">
                                {selectedLang}
                                <button
                                    type="button"
                                    onClick={() => removeSelectedLanguage(selectedLang)}
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>

                    <label htmlFor='description'>Descríbete:</label>
                    <textarea className='description' name='description' id='description'></textarea>

                    <label htmlFor='photo'>Foto de perfil:</label>
                    <input type='file' className='photo' name='photo' id='photo'></input>

                    <input type='submit' value='Enviar' className='submit' id='submit'></input>
                </form>
            </main>
        </>
    )
}

export default Register