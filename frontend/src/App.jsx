import Home from './components/Home.jsx'
import Search from './components/Search.jsx'

import { BrowserRouter , Route , Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
