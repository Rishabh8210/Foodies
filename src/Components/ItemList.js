import React, { useState } from "react"
import ReacDOM from "react-dom/client"
import ItemCard from "../Components/ItemCard.js"
const ItemList = ({title, categories}) => {
    const [isShow, setShow] = useState(false)
    return (
        <>
            <div className="food-menu-category" onClick={()=> setShow(!isShow)}>
                <h3>{title}</h3>
                {
                    isShow ? <h4>⇧</h4> : <h4>⇩</h4>
                }
            </div>
            {
                isShow && categories && categories.map((category, index) => (
                    category.itemCards.map((item) => {
                        return <ItemCard {...item} key={item?.card?.info?.id}/>
                    })
                ))
            }
        </>
    )
}

export default ItemList;