import React from "react"
import ReactDOM from "react-dom/client"
import ShimerCusiniesCard from "./ShimerCusiniesCard.js";
import {shimerDummyData} from "../../Constant.js"
const ShimerCusiniesBanner = () => {
    return (
        <div className="cusines shimer-cusines">
            <div className="cusines-heading shimer-cusines-heading">
            </div>
            <div className="cusines-list shimer-cusines-list">
                {
                    shimerDummyData.map((shimer, index)=>{
                        return <ShimerCusiniesCard key = {index} />
                    })
                }
            </div>
        </div>
    )
}

export default ShimerCusiniesBanner;

