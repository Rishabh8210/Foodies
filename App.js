import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Components/Header.js"
import Cusines from "./src/Components/Cusines.js"
import TopRestaurant from "./src/Components/TopRestaurant.js"
import RestaurantList from "./src/Components/RestaurantList.js"

const AppLayout = () => {
    return (
        <>
            <Header />
            <Cusines />
            <TopRestaurant />
            <RestaurantList />
        </>
    )
}
const main = document.querySelector(".main");
const root = ReactDOM.createRoot(main);

root.render(<AppLayout />)