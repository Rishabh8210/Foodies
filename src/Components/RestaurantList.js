import React from "react"
import ReactDOM from "react-dom/client"
import RestaurantCard from "./RestaurnatCard";
import {Link} from "react-router-dom"
const RestaurantList = ({restaurant}) => {
    return (
        <div className="all-restaurant">
            <div className="restaurant-heading">
                <h1>Restaurant with online food delivery in Chennai</h1>
            </div>
            <div className="restaurant-list">
                {
                    restaurant.map((restaurant)=>{
                        return <Link to={"restaurant/"+restaurant.info.id} key = {restaurant.info.id}>
                            <RestaurantCard  {...restaurant.info} />
                        </Link>
                    })
                }
            </div>
        </div>
    )
}
export default RestaurantList;