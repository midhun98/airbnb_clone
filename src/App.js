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
            <Card/>
        </div>
    )
}