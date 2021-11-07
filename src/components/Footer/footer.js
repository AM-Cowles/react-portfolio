import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Social from "../Social/social"



function Footer() {
  return (
    <div className="container-fluid">
    <footer className="pt-4 my-md-5 pt-md-5 border-top footerStyle">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src="/React-Portfolio/assets/a087a3f66722495ab1bfd316db1337ce.png" alt="logo" width="150" height="150" />
        <small className="d-block mb-3 text-muted">© 2021</small>
      </div>
      <div className="col-6 col-md">
        <h5>Portfolio</h5>
        <ul className="list-unstyled text-small">
        <Link to="/about">
          <li className="mb-1"><span className="link-secondary text-decoration-none" >About Me</span></li>
          </Link>
        
          <Link to="/portfoliopage">
          <li className="mb-1"><span className="link-secondary text-decoration-none" href="#techSection">My Work</span></li>
          </Link>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Get in contact</h5>
        <ul className="list-unstyled text-small">
        <Link to="/contact">
          <li className="mb-1"><span className="link-secondary text-decoration-none" href="#"><i className="fas fa-envelope-open-text fa-2x envelope"></i></span></li>
          </Link>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Social</h5>
        <ul className="list-unstyled text-small">
          <Social />
          
          {/* <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li> */}
        </ul>
      </div>
    </div>
  </footer>
  
    </div>
  );
}

export default Footer;