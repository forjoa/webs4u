import Header from "./Header"
import '../src/styles/App.css'
import Presentation from "./Presentation"
import Us from "./Us"
import { motion, useScroll } from "framer-motion"

function App() {

  const { scrollYProgress } = useScroll();

  return (
    <>
      <Header></Header>
      <Presentation></Presentation>
      <Us></Us>      
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  )
}

export default App
