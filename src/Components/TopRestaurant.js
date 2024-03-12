import React from "react"
import ReactDOM from "react-dom/client"
import TopRestaurantCard from "./TopRestaurantCard";

const TopRestaurant = ({topRestaurant}) => {
    return (
        <div className="top-restaurant">
            <div className="restaurant-heading shimer-restaurant-heading">
                <h1>Top Restaurant chains in Chennai</h1>
            </div>
            <div className="top-restaurant-list">
                {
                    topRestaurant.map((topRes, index)=>{
                        return <TopRestaurantCard key={topRes.info.id} {...topRes.info}/>
                    })
                }
            </div>
        </div>
    )
}

export default TopRestaurant;