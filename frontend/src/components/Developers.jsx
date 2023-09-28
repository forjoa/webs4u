import { useEffect, useState } from 'react'

import Dev from './Dev.jsx'

const Developers = () => {
    const [devs, setDevs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/developers')
            .then(response => response.json())
            .then(data => {
                setDevs(data)
            })
    }, [])

    return (
        <main>
            {devs.map(dev => {
                console.log(dev)
                return (
                    <Dev />
                )
            })
            }
        </main>
    )
}

export default Developers