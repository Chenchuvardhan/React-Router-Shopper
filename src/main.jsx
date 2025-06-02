import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Shopper } from './shopperindex/shopperindex';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shopper/>
  </StrictMode>,
)
