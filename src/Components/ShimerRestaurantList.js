import React from "react"
import ReactDOM from "react-dom/client"
import ShimerRestaurantCard from "./ShimerRestaurantCard"
import {shimerDummyData} from "../../Constant.js"
const ShimerRestaurantList = () => {
    return (
        <div className="top-restaurant">
            <div className="shimer restaurant-heading">
            </div>
            <div className="top-restaurant-list">
                {
                    shimerDummyData.map((shimer, index)=>{
                        return <ShimerRestaurantCard key={index}/>
                    })
                }
            </div>
        </div>
    )
}
export default ShimerRestaurantList;