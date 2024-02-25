import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LayoutMain } from './components/Layouts/LayoutMain.tsx'
import './index.css'
import Home from "./pages/Home/Home.tsx";
import { CartProvider } from './context/CartProvider.tsx'
import Checkout from './pages/Checkout/Checkout.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import Login from './pages/Login/Login.tsx'
import { Toaster } from 'sonner'
import Dashboard from './pages/Dashboard/Dashboard.tsx'

const queryClient = new QueryClient()

// LayoutMain es un componente en el que vamos a tener un navbar y un footer que va a ser igual en todas las páginas que ve el usuario, va envolver la pagina del home y del carrito, es decir que va a tener  children
const router = createBrowserRouter([
  {
    path: '/', //es la raiz en la que queremos que siempre muestre el componente LayoutMain 
    element: <LayoutMain/>,
    children: [
      {index:true, element: <Home/>}, 
      {path: "/checkout", element: <Checkout/>}
    ]
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/dashboard',
    element: <Dashboard/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster richColors/>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
