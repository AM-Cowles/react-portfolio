import React from "react";
import "./technologies.css"

function Technologies() {
    return(
        <div className="technologies">

          <div className="container-fluid pt-5">
            <div className="row pt-5 techSectionTit fontColor" id="techSection">
              <h2 className="techIKnowTitle">Technologies & Tools</h2>
              <div className="col-6 col-lg-4 col-md-3 col-sm-4 tech" >
                <i className="fab fa-html5 fa-4x fontColor"></i>
                  <h4>Html</h4>
              </div>
              <div className="col-6 col-lg-4 col-md-3 col-sm-4 tech">
                <i className="fab fa-css3 fa-4x fontColor"></i>
                  <h4>CSS</h4>
              </div>
              <div className="col-6 col-lg-4 col-md-3 col-sm-4 tech">
                <i className="fab fa-bootstrap fa-4x fontColor"></i>
                  <h4>Bootstrap</h4>
              </div>
              <div className="col-6 col-lg-4 col-md-3 col-sm-4 tech">
                <i className="fab fa-js fa-4x fontColor"></i>
                  <h4>javaScript</h4>
              </div>
              <div className="col-6 col-lg-4 col-md-3 col-sm-4 tech">
                <i className="fas fa-code fa-4x fontColor"></i>
                  <h4>jQuery</h4>
              </div>
              <div className="col-6 col-lg-4 col-md-3 col-sm-4 tech">
                <i className="fab fa-node-js fa-4x fontColor"></i>
                  <h3>Node .js</h3>
              </div>
              <div className="col-6 col-lg-4 col-md-3 col-sm-4 tech">
                <i className="fas fa-database fa-4x  fontColor"></i>
                  <h3>MySQL</h3>
              </div>
              <div className="col-6 col-lg-4 col-md-3 col-sm-4 tech">
                <i className="fab fa-npm fa-4x fontColornt"></i>
                  <h3>npm packages</h3>
              </div>
              <div className="col-6 col-lg-4 col-md-3 col-sm-4 tech">
                <i className="fas fa-database fa-4x fontColor"></i>
                  <h3>MongoDB</h3>
              </div>
              <div className="col-6 col-lg-4 col-md-3 col-sm-4 tech">
              <i className="fab fa-react fa-4x fontColor"></i>
                  <h3>React.js</h3>
              </div>
            </div>
          </div>

        </div>
    );
}

export default Technologies;