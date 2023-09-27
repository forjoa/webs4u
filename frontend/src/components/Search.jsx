import Header from './Header.jsx'

import '../styles/Search.css'
import { useEffect } from 'react'

const Search = () => {
    useEffect(() => {
        fetch('http://localhost:3000/developers')
            .then(response => response.json())
            .then(data => {
                //console.log(data)
            })
    })

    return (
        <>
            <Header />
            <input 
                className='input-search'
                type='text' 
                spellCheck='false'
            />

        </>
    )
}

export default Search