import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Components/Header.js"
import Body from "./src/Components/Body.js"
import Footer from "./src/Components/Footer.js"

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}
const main = document.querySelector(".main");
const root = ReactDOM.createRoot(main);

root.render(<AppLayout />)