import React from "react"
import ReactDOM from "react-dom"
import { useState, useEffect } from "react"
import {Swiggy_Data_API} from "../../Constant.js"
import Cusines from "./Cusines.js"
import TopRestaurant from "./TopRestaurant"
import RestaurantList from "./RestaurantList.js"
import RestaurantCard from "./RestaurnatCard.js"

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([])
    const [topRestaurantData, setTopRestaurantData] = useState([])
    const [bannerData, setBannerData] = useState([])
    useEffect(()=>{
        getRestaurant();
        console.log("render");
    }, [])
    async function getRestaurant(){
        
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch(Swiggy_Data_API);
        const restaurantDataList = await data.json();
        setRestaurantData(restaurantDataList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setTopRestaurantData(restaurantDataList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(restaurantDataList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setBannerData(restaurantDataList?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    }
    return(
        <div className="main-body">
            <Cusines banner = {bannerData}/>
            <TopRestaurant topRestaurant = {topRestaurantData}/>
            <RestaurantList restaurant = {restaurantData} />
        </div>
    )
}
export default Body;