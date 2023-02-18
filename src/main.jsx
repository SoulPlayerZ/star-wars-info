import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ContentProvider from './context/ContentProvider';
import HamburguerProvider from './context/HamburguerProvider';
import LoadingProvider from './context/LoadingProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HamburguerProvider>
      <ContentProvider>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </ContentProvider>
    </HamburguerProvider>
  </React.StrictMode>,
)
