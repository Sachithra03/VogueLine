import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Featured from './components/featured.jsx'
import About from './components/about.jsx'
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Featured />
    <About />
    <Footer />
    </>
  )
}

export default App
