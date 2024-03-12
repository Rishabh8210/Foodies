import React from "react"
import ReactDOM from "react-dom/client"
import {TopRestaurantURL} from "../../Constant.js"
const BannerCard = ({imageId}) => {
    return(
        <img src = {TopRestaurantURL+(imageId)} alt = "Burger"/>
    )
}

export default BannerCard;