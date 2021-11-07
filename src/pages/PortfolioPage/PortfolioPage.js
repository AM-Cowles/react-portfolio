import React from "react";
import Portfolio from "../../components/Portfolio/portfolio";
import "./PortfolioPage.css";
import Header from "../../components/Header/header";

function PortfolioPage() {

    return (
        <>
        <Header title="My Work"></Header>
        <div className="home">
          
        <Portfolio titleStyle="d-none"/>
        </div>
</>
    );
}

export default PortfolioPage;

