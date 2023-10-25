import React from "react"

export default function Navbar() {
    return (
        <nav className="flex shadow-2xl p-4 flex-grow">
            <img src={require('../images/airbnb-logo.png')} className="nav--logo h-8 ml-16" alt=''/>
        </nav>
    )
}