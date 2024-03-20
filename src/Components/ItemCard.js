import React from "react"
import ReactDOM from "react-dom/client"
import {Swiggy_Restaurant_Menu_Item} from "../../Constant.js"
const ItemCard = ({ card }) => {
    return (
        <div className="food-categories-list">
            <div className="food-desc">
                <h3>{card?.info?.name}</h3>
                <p>₹{card?.info?.price ? card?.info?.price / 100 : card?.info?.defaultPrice / 100}</p>
                
                <p>{(card?.info?.description != undefined && card?.info?.description.length > 120) ? (card?.info?.description?.slice(0,130)+"...") : (card?.info?.description)}</p>
                
            </div>
            <div className="food-add-to-cart">
                {/* {console.log(Swiggy_Restaurant_Menu_Item+card?.info?.imageId)} */}
                <img src={Swiggy_Restaurant_Menu_Item+card?.info?.imageId} alt="Image" />
                <button>Add+</button>
            </div>
        </div>
    )
}
export default ItemCard;