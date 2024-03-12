import React from "react"
import ReactDOM from "react-dom/client"
import {TopRestaurantURL} from "../../Constant.js"

const CusiniesCard = ({imageId}) => {
    return(
        <img className = "cusinies-card" src = {TopRestaurantURL+(imageId)} alt = "Burger"/>
    )
}

export default CusiniesCard;