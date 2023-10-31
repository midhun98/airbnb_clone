import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import React from 'react';
import './style.css';
import data from "./components/data";
console.log("datadata",data);

export default function App() {
    const cards = data.map(item => {
        return<Card
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            country={item.location}
            title={item.title}
            price={item.price}
        />
    })
    console.log("jokeElements", cards)
    return (
        <div className="container">
            <Navbar/>
            <Hero/>
            {cards}

        </div>
    )
}
