import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CharsProvider from './context/CharsProvider';
import HamburguerProvider from './context/HamburguerProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HamburguerProvider>
      <CharsProvider>
        <App />
      </CharsProvider>
    </HamburguerProvider>
  </React.StrictMode>,
)
