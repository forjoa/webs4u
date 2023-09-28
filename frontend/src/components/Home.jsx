import Header from "./Header.jsx"
import Presentation from "./Presentation.jsx"
import Us from "./Us.jsx"
import Contact from "./Contact.jsx"
import Footer from "./Footer.jsx"

import '../styles/App.css'

import { motion, useScroll } from "framer-motion"
import { useEffect } from "react"

function Home() {

  useEffect(() => {
    document.title = 'Code Match | Inicio'
}, [])

  const { scrollYProgress } = useScroll();

  return (
    <>
      <Header></Header>
      <Presentation></Presentation>
      <Us></Us>
      <Contact></Contact>
      <Footer></Footer>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  )
}

export default Home
