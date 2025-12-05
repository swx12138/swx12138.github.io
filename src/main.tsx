import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElem = document.body;
createRoot(rootElem).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
