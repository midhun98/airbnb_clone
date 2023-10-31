import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import React from 'react';
import './style.css';
import data from "./components/data";

export default function App() {
    const cards = data.map(item => {
        return<Card
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            country={item.location}
            title={item.title}
            price={item.price}
        />
    })

    return (
        <div className="container">
            <Navbar/>
            <Hero/>
            <section className="flex flex-nowrap overflow-x-auto gap-20">
                {cards}
            </section>

        </div>
    )
}
