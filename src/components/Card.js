import React from "react"

export default function Card(props) {
    return (
        <div className="card max-w-[175px]">
            <img src={require(`../images/${props.img}`)} className="card--image rounded-2xl max-w-full" alt='' />
            <div className="card--stats flex items-center">
                <img src={require('../images/star.png')} className="card--star h-6"  alt=''/>
                <span>{props.rating}</span>
                <span className="text-gray-500">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>

            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}