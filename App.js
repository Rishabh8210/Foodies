import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Components/Header.js"
import Body from "./src/Components/Body.js"

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}
const main = document.querySelector(".main");
const root = ReactDOM.createRoot(main);

root.render(<AppLayout />)