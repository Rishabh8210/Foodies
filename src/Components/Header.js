import React from "react"
import ReactDOM from "react-dom/client"
import Logo from "../Assets/Logo.svg"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img className = "logo" alt ="Logo" src = {Logo} />
            </Link>
            <div className="nav-menu">
                <Link to="/search">
                    <h3>Search</h3>
                </Link>
                <Link to="/offers">
                    <h3>Offers</h3>
                </Link>
                <Link to="/help">
                    <h3>Help</h3>
                </Link>
                <Link to="/signin">
                    <h3>Sign In</h3>
                </Link>
                <Link to="/cart">
                    <h3>Cart</h3>
                </Link>
            </div>
        </div>
    )
}

export default Header;