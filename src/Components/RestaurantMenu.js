import React from "react"
import ReactDOM from "react-dom/client"
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { Swiggy_Restaurant_Menu_API } from "../../Constant.js"
import ShimerRestaurantList from "./ShimerRestaurantList"
import ErrorPage from "./ErrorPage.js"
const RestaurantMenu = () => {
    const [restaurantMenu, setRestaurantMenu] = useState(null)
    const {id} = useParams();
    useEffect(() => {
        getRestaurantMenu();
    }, [])

    async function getRestaurantMenu() {
        try{
            const menuData = await fetch(Swiggy_Restaurant_Menu_API+id);
            const parseMenuData = await menuData.json();
            setRestaurantMenu(parseMenuData);
        }catch(error){
            console.log("Something went wrong !");
        }
    }

    if(!restaurantMenu)
        return <ShimerRestaurantList />

    return (!restaurantMenu) ? <ErrorPage /> : (
        <>
            <h1>Restaurant Id :{id} </h1>
            {console.log(restaurantMenu)}
        </>
    )
}
export default RestaurantMenu;