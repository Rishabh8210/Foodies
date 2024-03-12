import React from "react"
import ReactDOM from "react-dom/client"
import { TopRestaurantURL } from "../../Constant.js"

const TopRestaurantCard = ({name, cloudinaryImageId, aggregatedDiscountInfoV3, avgRating, cuisines, areaName, sla}) => {
    return (
        <div className="restaurant-card">
            <div className="restaurant-image">
                <img src = {TopRestaurantURL + cloudinaryImageId} alt = "image" />
                {
                    (aggregatedDiscountInfoV3 != undefined &&
                        <div className="restaurant-offers">
                            <h3>{aggregatedDiscountInfoV3?.header + " " + aggregatedDiscountInfoV3?.subHeader}</h3>
                        </div>
                    )
                }
            </div>
            <div className="restaurant-desc">
                <h2>{name}</h2>
                <h2>{avgRating} . {(sla != undefined && sla.slaString)}</h2>
                <p>{(cuisines != undefined && cuisines.join(", "))}</p>
                <p>{areaName}</p>
            </div>
        </div>
    )
}

export default TopRestaurantCard;