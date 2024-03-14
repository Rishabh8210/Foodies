import React from "react"
import ReactDOM from "react-dom/client"
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error)
    return (
        <div className="error-main">
            <div className="error-status">
                <h1>{error.status} - {error.statusText}</h1>
                <img className="Error-status-img" alt = "Error status img" src = "" />
            </div>
        </div>
    )
}
export default ErrorPage