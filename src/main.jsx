import './index.css'
import App from './App.jsx'
import store from './store/index';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
  </Provider>
)
