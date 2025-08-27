import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode > {/* não faz diferença, só permite ver alguns bugs */}
    <App />
  </StrictMode>,
)
{/* 1 componente de cada tipo
- Função anonima 
- Função Flecha
- Função normal
 */}