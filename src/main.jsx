import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/general.css"
import './styles/header.css'
import "./styles/readFull.css"
import "./styles/popup.css"


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
