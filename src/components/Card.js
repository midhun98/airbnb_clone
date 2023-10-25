import React from "react"

export default function Card() {
    return (
        <div className="card max-w-[175px]">
            <img src={require('../images/katie-zaferes.png')} className="card--image rounded-2xl max-w-full"  alt=''/>
            <div className="card--stats flex items-center">
                <img src={require('../images/star.png')} className="card--star h-6"  alt=''/>
                <span>5.0</span>
                <span className="text-gray-500">(6) • </span>
                <span className="text-gray-500">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="font-bold">From $136</span> / person</p>
        </div>
    )
}