import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './responsive.css'

// HashRouter keeps every route working on GitHub Pages (static hosting, no
// server rewrites), so /#/contact never returns a 404.
createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
