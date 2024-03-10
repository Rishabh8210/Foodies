import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Components/Header"

const AppLayout = () => {
    return (
        <Header />
    )
}
const main = document.querySelector(".main");
const root = ReactDOM.createRoot(main);

root.render(<AppLayout />)