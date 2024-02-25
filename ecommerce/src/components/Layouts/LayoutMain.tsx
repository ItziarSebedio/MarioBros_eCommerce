import {Outlet} from 'react-router-dom'
//El componente Outlet es un componente especial proporcionado por React Router que se utiliza en la estructura de rutas anidadas.

import { Navbar } from '../ui/Navbar/Navbar'


//aca vamos a tener un navbar y un footer que va a ser igual en todas las páginas que ve el usuario, va envolver la pagina del home y del carrito, es decir que va a tener  children

export const LayoutMain = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
