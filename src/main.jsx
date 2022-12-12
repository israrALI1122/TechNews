import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApiProvider } from './components/Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider>
    <App />

    </ApiProvider>
  </React.StrictMode>,
)
