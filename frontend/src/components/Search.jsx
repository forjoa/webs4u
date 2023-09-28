import Header from './Header.jsx'
import Developers from './Developers.jsx'

import '../styles/Search.css'

import { useEffect } from 'react'

const Search = () => {

    useEffect(() => {
        document.title = 'Code Match | Buscar'
    }, [])

    return (
        <>
            <Header />
            <input
                className='input-search'
                type='text'
                spellCheck='false'
            />
            <Developers />
        </>
    )
}

export default Search