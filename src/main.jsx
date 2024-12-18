import React from 'react'
import ReactDom from 'react-dom/client';
import App from './App.jsx';
import "./assets/scss/main.scss"

ReactDom.createRoot(document.querySelector(".wrapper")).render(
    <App/>
)
