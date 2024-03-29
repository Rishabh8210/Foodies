import React from "react"
import ReactDOM from "react-dom"
import { useState, useEffect } from "react"
import {Swiggy_Data_API} from "../../Constant.js"
import CusiniesBanner from "./CusiniesBanner.js"
import TopRestaurant from "./TopRestaurant"
import RestaurantList from "./RestaurantList.js"
import ShimerCusiniesBanner from "./ShimerCusiniesBanner.js"
import ShimerRestaurantList from "./ShimerRestaurantList.js"

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([])
    const [topRestaurantData, setTopRestaurantData] = useState([])
    const [bannerData, setBannerData] = useState([])
    useEffect(()=>{
        getRestaurant();
        console.log("render");
    }, [])
    async function getRestaurant(){
        
        try{
            // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const data = await fetch(Swiggy_Data_API);
            const restaurantDataList = await data.json();
            setRestaurantData(restaurantDataList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setTopRestaurantData(restaurantDataList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            // console.log(restaurantDataList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setBannerData(restaurantDataList?.data?.cards[0]?.card?.card?.imageGridCards?.info)
        }catch(error)
        {
            console.log("Some error found !");
        }
    }
    return(
        <div className="main-body">
            {
                (bannerData.length != 0) ? <CusiniesBanner banner = {bannerData}/> : <ShimerCusiniesBanner/>
            }
            {
                (topRestaurantData.length != 0) ? <TopRestaurant topRestaurant = {topRestaurantData} /> : <ShimerRestaurantList/>
            }
            {
                (restaurantData.length != 0) ? <RestaurantList restaurant = {restaurantData} /> : <ShimerRestaurantList/>
            }
        </div>
    )
}
export default Body;