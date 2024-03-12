import React from "react"
import ReactDOM from "react-dom/client"
import RestaurantCard from "./RestaurnatCard";

const RestaurantList = ({restaurant}) => {
    return (
        <div className="all-restaurant">
            <div className="restaurant-heading">
                <h1>Restaurant with online food delivery in Chennai</h1>
            </div>
            <div className="restaurant-list">
                {
                    restaurant.map((restaurant)=>{
                        return <RestaurantCard key = {restaurant.info.id} {...restaurant.info} />
                    })
                }
            </div>
        </div>
    )
}
export default RestaurantList;