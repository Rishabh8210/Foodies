import React from "react"
import ReactDOM from "react-dom/client"
import BannerCard from "./BannerCard"
const Cusines = ({banner}) => {
    return (
        <div className="cusines">
            <div className="corner-blur"></div>
            <div className="cusines-heading">
                <h1>What's on your mind?</h1>
            </div>
            <div className="cusines-list">
                {
                    banner.map((cusinies)=>{
                        return <BannerCard key = {cusinies.id}{...cusinies} />
                    })
                }
            </div>
        </div>
    )
}
export default Cusines;