import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { StylePulseApp } from './StylePulseApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StylePulseApp />
    </BrowserRouter>
  </StrictMode>,
)
