import React from "react"

export default function Hero() {
    return (
        <section className='p-20'>
            <img src={require('../images/photo-grid.png')} className="hero--photo" alt=''/>
            <h1 className='hero--header text-3xl font-bold'>Online Experiences</h1>
            <p className='hero--text max-w-[300px]'>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.

            </p>
        </section>
    )
}