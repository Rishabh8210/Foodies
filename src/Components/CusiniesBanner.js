import React from "react"
import ReactDOM from "react-dom/client"
import CusiniesCard from "./CusiniesCard"
const CusiniesBanner = ({banner}) => {
    return (
        <div className="cusines">
            <div className="corner-blur"></div>
            <div className="cusines-heading">
                <h1>What's on your mind?</h1>
            </div>
            <div className="cusines-list">
                {
                    banner.map((cusinies)=>{
                        return <CusiniesCard key = {cusinies.id}{...cusinies} />
                    })
                }
            </div>
        </div>
    )
}
export default CusiniesBanner;