import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [texto, setTexto] = useState("")

  return (
      <>
      <div className="button">
        <button onClick={() => setCount((count => count +1))}>
          count is {count}
      </button>
      </div>
      <div className="text">
        <input type="text" onChange={(e) => setTexto(e.target.value)} />
      
      </div>
        <h1>{texto}</h1>
      
      
    </>
  )
}

export default App
