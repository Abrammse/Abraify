import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
866664
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)
