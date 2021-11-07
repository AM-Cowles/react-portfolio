import React from "react";
import "./header.css";

function Header({title}) {
    return (
        <div className="contact">

            <div className="container-fluid font" id="contactSection">
                <div className="row">
                    <div className="contactHeaderBackground">
                        <h2 id="contact" className="sampleProjectsSection pt-5">{title}</h2>
                    </div>
                </div>
            </div>
            

            
        </div>
            


    );
}

export default Header;