import React from "react";
import "./home.css";
import Hero from "../../components/Hero/hero";
import AboutMe from "../../components/AboutMe/aboutMe";
import Technologies from "../../components/Technologies/technologies";
import Portfolio from "../../components/Portfolio/portfolio";



function Home() {
    return (
        <div className="home">

        <Hero />
        <AboutMe />
        <Technologies />
        <Portfolio background="noBGColor" />

        </div>

    );
}

export default Home;