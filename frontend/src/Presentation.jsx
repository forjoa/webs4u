import { useEffect, useState } from 'react'
import guy from './assets/guy.png'
import './styles/Presentation.css'
import { motion } from 'framer-motion'

function Presentation() {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {

        const handleMove = (event) => {
            const { clientX, clientY } = event
            setPosition({ x: clientX, y: clientY })
        }

        window.addEventListener('pointermove', handleMove)

        return () => {
            window.removeEventListener('pointermove', handleMove)
        }
    })

    const sentence = 'CODE MATCH'.split("")

    return (
        <main>
            <div className="img">
                <img src={guy}></img>
            </div>
            <div className="text">
                <span>SOMOS</span>
                <h1>
                    {sentence.map((letter, index) => {
                        return (
                            <motion.span whileHover={{scale: 1.2 , color: '#5CD2C6', cursor: 'pointer'}} key={index}>
                                {letter}
                            </motion.span>
                        )
                    })}
                </h1>
                <h3>DONDE ENCONTRARÁS A TU</h3>
                <h2>WEBSITE DEVELOPER</h2>
            </div>
            <div style={{
                position: 'absolute',
                background: '#5CD2C6',
                borderRadius: '50%',
                opacity: 1,
                pointerEvents: 'none',
                left: -2.5,
                top: -2.5,
                width: 5,
                height: 5,
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
            />
        </main>
    )
}

export default Presentation