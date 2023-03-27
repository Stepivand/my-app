import React from 'react'
import ReactDOMClient from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './app'

const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement)
root.render(<App />)
