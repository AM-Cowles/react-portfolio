import React from "react";

function Aboutme({titleStyle}) {
    return (

    <div className="about">
    <section className="section-about">
        <div className="container">
            <div className="row pt-5">
            <h2 id="aboutMe" className={ titleStyle + " sampleProjectsSection"}>About Me</h2>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex">
                <img src="./React-Portfolio/assets/EZZ-Studio-9578.jpg" className="img-thumbnail m-3 mx-auto" alt="profile" width="300px" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 introduction">
                <p>Hello! My name is Alyssa Cowles, I'm 30 years old, living in Shelby Township, MI. After previously working towards becoming a law enforcement officer, I decided to work toward something safer, and have pursued my love for computers.</p>
                <p>Currently enrolled in the MSU Coding Bootcamp to learn about full stack web development and expand my knowledge about modern technology as a whole.</p>
                <p>e-mail: alyssa.m.cowles@gmail.com</p>
                <p>Phone: 760-3155668</p>
                <a className="btn btn-primary px-5 viewMyWorkBtn" href="./React-Portfolio/assets/resume/Alyssa Cowles Resume.pdf" target="_blank" download>My Resume</a>
            </div>
            </div>
        </div>
    </section>            

    </div>

    );
}

export default Aboutme;