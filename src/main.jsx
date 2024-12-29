import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmZjODIzNjY2NGI5Y2ZlZmIwYjIyMzA3YjgzMWY3OSIsIm5iZiI6MTczNDg5Mjg4NS4yMzksInN1YiI6IjY3Njg1ZDU1NzNkYTViY2NjNWM0YzUxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.svYYv8Zh0pjPxrpaf-y0DSKiQ2oHhz-zGgx0476yF-U
//fbfc8236664b9cfefb0b22307b831f79