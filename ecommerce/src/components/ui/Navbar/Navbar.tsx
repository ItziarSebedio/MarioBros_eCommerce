import Logo from "../../../assets/logo.svg"
import Cart from "../../../assets/cart.svg"
import styles from "./Navbar.module.css"
import { useState } from "react"
import { CartModal } from "../CartModal"
import useCartContext from "../../../hooks/useCartContext"
import { useLocation, useNavigate } from "react-router-dom"

export const Navbar = () => {
    
    const [showCartModal, setShowCartModal] = useState(false)

    const {state: {cartItems}} = useCartContext()
    const navigate = useNavigate()
    const location = useLocation()

    const handleShowCartModal = () => {
        setShowCartModal(!showCartModal)
    }

    //Esta función sirve para que al hacer click en el div que tiene el home estando desde la pagina de /checkout nos lleve al home
    const handleNavigateToHome = () =>{
        navigate("/")
    }

  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbarDetail} onClick={handleNavigateToHome}>
            <img src={Logo} alt="Logo de ecommerce" width={50} height={50} />
            <div>
                <span>DH eCommerce</span>
            </div>
        </div>

        {location.pathname !== "/checkout" && (
            <>
            <div className={styles.navbarCartContainer}>
                <p className={styles.navbarTextAmount} style={{color: '#EDB00F'}}>{cartItems.length === 0 ? "" : cartItems.length}</p>
                <img src={Cart} alt="Cart" onClick={handleShowCartModal} />
            </div>
            {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal}/>)}
            </>
        )}

    </div>
  )
}
