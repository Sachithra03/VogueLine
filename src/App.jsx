import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Featured />
    <About />
    </>
  )
}

export default App
