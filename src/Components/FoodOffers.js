import React from "react"
import ReactDOM from "react-dom/client"

const FoodOffers = ({info}) => {
    return (
        <div className="restaurant-food-offers-list">
                <h3>{info?.header}</h3>
                <p>{info?.couponCode + " | " + info?.description}</p>
        </div>
    )
}

export default FoodOffers;