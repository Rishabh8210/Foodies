import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Components/Header.js"
import Body from "./src/Components/Body.js"
import Footer from "./src/Components/Footer.js"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Search from "./src/Components/Search.js"
import Help from "./src/Components/Help.js"
import Offers from "./src/Components/Offers.js"
import SignIn from "./src/Components/SignIn.js"
import Cart from "./src/Components/Cart.js"
const AppLayout = () => {
    return (
        <>
            <Header />
            {/* <Body /> */}
            <Outlet />
            <Footer />
        </>
    )
}
const appRouter = {} = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body />,
            },
            {
                path : "/search",
                element : <Search />
            },
            {
                path : "/help",
                element : <Help />
            },
            {
                path : "/offers",
                element : <Offers />
            },
            {
                path : "/signin",
                element : <SignIn />
            },
            {
                path : "/cart",
                element : <Cart />
            },
        ]
    }
])
const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<RouterProvider router = {appRouter} />)