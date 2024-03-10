import React from "react"
import ReactDOM from "react-dom/client"

const Hello = () => {
    return <h1>Hello Guy's</h1>
}
const main = document.querySelector(".main");
const root = ReactDOM.createRoot(main);

root.render(<Hello />)