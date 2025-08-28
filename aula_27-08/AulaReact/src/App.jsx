import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Square } from './components/Square'
import './components/Square.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='quadradinhos'>
      <Square cor = "lightblue"/>
      <Square cor = "black"/>
      <Square cor = "pink"/>

    </div>
    </>

  )
}

export default App
