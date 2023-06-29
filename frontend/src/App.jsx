import Header from "./Header.jsx"
import Presentation from "./Presentation.jsx"
import Us from "./Us.jsx"
import Contact from "./Contact.jsx"

import '../src/styles/App.css'

import { motion, useScroll } from "framer-motion"

function App() {

  const { scrollYProgress } = useScroll();

  return (
    <>
      <Header></Header>
      <Presentation></Presentation>
      <Us></Us>
      <Contact></Contact>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  )
}

export default App
