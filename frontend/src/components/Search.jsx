import Header from './Header.jsx'

import '../styles/Search.css'

const Search = () => {
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