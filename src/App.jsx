import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Allroutes from './components/Allroutes'
import Thanks from './components/Thanks'
import News from './components/News'
import { Box } from '@mui/material'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Allroutes/>
     <News/>
     <Thanks/>
     <About/>
    </>
  )
}

export default App
