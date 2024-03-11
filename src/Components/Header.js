import React from "react"
import ReactDOM from "react-dom/client"
import Logo from "../Assets/Logo.svg"
const Header = () => {
    return (
        <div className="header">
            <img className = "logo" alt ="Logo" src = {Logo} />
            <div className="nav-menu">
                <h3>Search</h3>
                <h3>Offers</h3>
                <h3>Help</h3>
                <h3>Sign In</h3>
                <h3>Cart</h3>
            </div>
        </div>
    )
}

export default Header;