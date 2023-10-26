import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import React from 'react';
import './style.css';


export default function App() {
    return (
        <div className="container">
            <Navbar/>
            <Hero/>
            <div className="cards">
                <Card
                    img="katie-zaferes.png"
                    rating="5.0"
                    reviewCount={6}
                    country="USA"
                    title="Life Lessons with Katie Zaferes"
                    price={136}
                />
            </div>
        </div>
    )
}