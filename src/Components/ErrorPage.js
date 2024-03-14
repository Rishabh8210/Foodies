import React from "react"
import ReactDOM from "react-dom/client"
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error)
    return (
        <>
            <h2>Something Went Wrong !</h2>
            <h3>{error.status} - {error.statusText}</h3>
        </>
    )
}
export default ErrorPage