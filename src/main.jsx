import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HamburguerProvider from './context/HamburguerProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HamburguerProvider>
      <App />
    </HamburguerProvider>
  </React.StrictMode>,
)
