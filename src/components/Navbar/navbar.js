import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Social from "../Social/social";

function Navbar() {
    return(
        <div className="navbarclass">

            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Link to="/">
                    <span className="navbar-brand font-color">Alyssa Cowles</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                             <Link to="/about"> 
                                <li className="nav-item">
                                <span className="nav-link active" aria-current="page">About</span>
                                </li>
                            </Link> 
                            <Link to="/portfoliopage">
                                <li className="nav-item">
                                    <span className="nav-link active" aria-current="page">Portfolio</span>
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li className="nav-item">
                                <span className="nav-link active" aria-current="page">Contact</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

            {/* social media buttons */}
      
            <Social />
            
            </nav>

        </div>
    );
}

export default Navbar;

 