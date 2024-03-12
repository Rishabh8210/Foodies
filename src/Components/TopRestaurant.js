import React from "react"
import ReactDOM from "react-dom/client"
import RestaurantCard from "./RestaurnatCard";

const TopRestaurant = ({topRestaurants}) => {
    return (
        <div className="top-restaurant">
            <div className="top-restaurant-heading">
                <h1>Top Restaurant chains in Chennai</h1>
            </div>
            <div className="top-restaurant-list">
                {
                    topRestaurants.map((topRestaurant)=>{
                        return <RestaurantCard key={topRestaurant.info.id} {...topRestaurant.info} />
                    })
                }
            </div>
        </div>
    )
}

export default TopRestaurant;