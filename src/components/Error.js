import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error = () => {
    const err = useRouteError()
    console.log(err.data);
    return (
        <div>
            <h1 style={{ fontSize: "3rem", display: "flex", justifyContent: "center", alignItems: "center", height: "85vh" }}>{err.status + " " + err.data}</h1>
        </div>
    )
}
