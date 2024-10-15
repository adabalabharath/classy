import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import ContextProvider from './context/ContextProvider.jsx'
import { PersistGate } from 'redux-persist/integration/react'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ContextProvider>
    <App />
    </ContextProvider>
    </PersistGate>
    </Provider>
  </BrowserRouter>,
)
