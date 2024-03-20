import React from "react"
import ReactDOM from "react-dom/client"
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { Swiggy_Restaurant_Menu_API } from "../../Constant.js"
import ShimerRestaurantList from "./ShimerRestaurantList"
import ErrorPage from "./ErrorPage.js"
import FoodOffers from "./FoodOffers.js"
import ItemList from "./ItemList.js"
const RestaurantMenu = () => {
    const [restaurantMenu, setRestaurantMenu] = useState(null)
    const [restaurantInfo, setRestaurantInfo] = useState(null)
    const [restaurantOffers, setRestaurantOffers] = useState([])
    const [restaurantFood, setRestaurantFood] = useState([])
    const {id} = useParams();
    useEffect(() => {
        getRestaurantMenu();
    }, [])
        console.log("render")
    async function getRestaurantMenu() {
        try{
            const menuData = await fetch(Swiggy_Restaurant_Menu_API+id);
            const parseMenuData = await menuData.json();
            setRestaurantMenu(parseMenuData);
            console.log(parseMenuData, parseMenuData?.data)
            for(let i = 0;i < 6; i++)
            {
                if(id == parseMenuData?.data?.cards[i]?.card?.card?.info?.id)
                {
                    setRestaurantInfo(parseMenuData?.data?.cards[i]?.card?.card?.info);
                }
                else if(parseMenuData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.offers)
                {
                    setRestaurantOffers(parseMenuData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.offers);
                }
                else if(parseMenuData?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards.length)
                {
                    const d = parseMenuData?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
                    const e = parseMenuData?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
                    console.log(d, e)
                    setRestaurantFood(d);
                }
                // console.log("Nii mila", parseMenuData?.data?.cards[i]?.card?.card?.info?.id)
            }
        }catch(error){
            console.log("Something went wrong !", error);
        }
    }

    // if(!restaurantMenu)
    //     return <ShimerRestaurantList />

    return (!restaurantMenu) ? <ShimerRestaurantList /> : (
        <div className="restaurant-menu">
            <div className="restaurant-details">
                <div className="restaurant-info">
                    <h4>{restaurantInfo?.name}</h4>
                    <p>{restaurantInfo?.cuisines.join(", ")}</p>
                    <p>{restaurantInfo?.areaName}</p>
                    <p>{restaurantInfo?.feeDetails?.message}</p>
                </div>
                <div className="restaurant-ratinngs">
                    <h3>{restaurantInfo?.avgRating}</h3>
                    <p>{restaurantInfo?.totalRatingsString}</p>
                </div>
                    
                {/*(console.log(restaurantInfo),console.log(restaurantOffers, "Offers"), console.log(restaurantFood, "Food"))*/}
            </div>
            <div className="restaurant-delivery-time">
                <p>{restaurantInfo?.sla?.slaString} </p>
                <p>--</p>
                <p>{restaurantInfo?.costForTwoMessage}</p>
            </div>
            <div className="restaurant-food-offers">
                {
                    restaurantOffers.map((offer)=>{
                        return <FoodOffers key = {offer?.info?.offerIds[0]} {...offer}/>
                    })
                }
            </div>
            <div className="restaurant-food-menu">
                {
                    restaurantFood.map((restaurant) => {
                        return <ItemList {...restaurant?.card?.card} key = {restaurant?.card?.card?.title}/>
                    })
                }
            </div>
        </div>
    )
}
export default RestaurantMenu;
