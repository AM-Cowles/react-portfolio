import React from "react";
import "./about.css";
import Header from "../../components/Header/header";
import Aboutme from "../../components/AboutMe/aboutMe";
function About() {
    return (
        <>
        <Header title="About Me"/>
        <Aboutme titleStyle="d-none"></Aboutme>
        </>

    );
}

export default About;