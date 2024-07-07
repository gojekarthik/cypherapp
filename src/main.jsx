import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
   domain='dev-od2kmvwioisp8w0g.us.auth0.com'
  clientId="6UDNyZNZgnHLyhmE0plv8oqHAsdawghr"
  authorizationParams={{
      redirect_uri: window.location.origin}}
  >
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  </Auth0Provider>
)
