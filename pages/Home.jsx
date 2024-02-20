import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You got a two-way trip, we got the vehicle.</h1>
            <p>Relive the stress of jumping on buses. Rent the perfect car for your perfect road trip.</p>
            <Link to="cars">Find your car</Link>
        </div>
    )
};