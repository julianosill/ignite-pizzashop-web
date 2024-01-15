import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | PizzaShop" />
      <Toaster richColors closeButton />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
