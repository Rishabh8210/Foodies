import React from "react"
import ReactDOM from "react-dom/client"
import {TopRestaurantURL} from "../../Constant.js"

const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            <div className="restaurant-image">
                <img src = {TopRestaurantURL + "uokfd61wpfknjqjfqzrk"} alt = "image" />
                <div className="restaurant-offers">
                    <h3>Rs 125 off ABOVE Rs 199</h3>
                </div>
            </div>
            <div className="restaurant-desc">
                <h2>Dominos Pizza</h2>
                <h2>4.2 . 32 mins</h2>
                <p>Burger, Pizza, Italian...</p>
            </div>
        </div>
    )
}

export default RestaurantCard;