import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import ContextProvider from './context/ContextProvider.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <ContextProvider>
    <App />
    </ContextProvider>
    </Provider>
  </BrowserRouter>,
)
