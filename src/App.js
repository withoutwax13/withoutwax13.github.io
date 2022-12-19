import { useState } from "react"
import Canvas from "./components/Canvas"
import Header from "./components/Header"

const App = () => {
  const [navSelection, setNavSelection] = useState(0) // to determine which header navlink is active; default should be the Home page as 0
  return (
    <div>
      <Header setSelection={setNavSelection}/>
      <Canvas/>
    </div>
  )
}

export default App