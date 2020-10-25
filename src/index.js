import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'

const renderReact = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    )
}

if (window.cordova) {
    document.addEventListener('deviceready', () => {
        renderReact()
    }, false)
} else {
    renderReact()
}
