import { useState } from "react"
import Canvas from "./components/Canvas"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"

const App = () => {
  const [navSelection, setNavSelection] = useState(0) // to determine which header navlink is active; default should be the Home page as 0
  const pageComponents = [
    <Home setSelection={setNavSelection}/>, 
    <About setSelection={setNavSelection}/>, 
    <Experience setSelection={setNavSelection}/>, 
    <Portfolio setSelection={setNavSelection}/>
  ]
  return (
    <div>
      <Header setSelection={setNavSelection} currentPage={navSelection}/>
      {pageComponents[navSelection]}
      <Canvas/>
    </div>
  )
}

export default App