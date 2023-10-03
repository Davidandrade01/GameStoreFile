import { AuthProvider } from '@/contexts/AuthContexts'
import {  CartProvider } from '@/contexts/CartContext'

import 'semantic-ui-css/semantic.min.css'
import '@/scss/global.scss'

export default function App({ Component, pageProps }) {

  
  return(
    <AuthProvider>
    <CartProvider>
      <Component {...pageProps} />
   </CartProvider>
    
  </AuthProvider>

  ) 
}
