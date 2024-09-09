import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterConfig from './Router.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>,
)
