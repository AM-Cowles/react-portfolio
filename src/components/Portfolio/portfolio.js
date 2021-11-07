import React from "react";
// import Card from "../../components/Card/card";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./portfolio.css";

function Portfolio({titleStyle}) {

    const projects = [
        {
            img: "/React-Portfolio/assets/Coin-Compare.png",
            name: "Coin-Compare",
            description: "E-Commerce Application",
            github: "https://github.com/mlkrauz/Coin-Compare",
            deployment: "https://mlkrauz.github.io/Coin-Compare/",
        },
        {
            img: "/React-Portfolio/assets/The-Movie-Blog.png",
            name: "Movie-Blog",
            description: "Movie Blog Application",
            github: "https://github.com/eamahma/movie_blog",
            deployment: "https://movies-blogs.herokuapp.com/",
        },
        {
            img: "/React-Portfolio/assets/Employee-Tracker.png",
            name: "Employee-Tracker",
            description: "Employee records application",
            github: "https://github.com/AM-Cowles/employee-tracker#Deployed-Application",
            deployment: "https://employee-tracker-app-01.herokuapp.com/",
        }
    ]

    const renderCard = (card, index) => {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 workCard">
            <Card className="card mx-auto" style={{ width: '18rem', height: '20rem' }} key={index}>
            <Card.Img className="card-image" variant="top" src={card.img} />
            <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>
                {card.description}
                </Card.Text>
                <Button className="mx-1" href={card.github} variant="dark" target="_blank"  rel="noreferrer">GitHub</Button>
                <Button className="mx-1" href={card.deployment} variant="dark" target="_blank"  rel="noreferrer">Project</Button>
                <Button className="mx-1" href={card.deployment} variant="dark" target="_blank"  rel="noreferrer">More</Button>
            </Card.Body>
            </Card>
            </div>
        )
    }

    return (
        <div className="portfolio">
             <h2 id="sampleWork" className={titleStyle + " sampleProjectsSection"}>My Work</h2>
               
            <div className="container my-5">
                    <div className="row projects ">
                      
                        {projects.map(renderCard)}
                  
                    </div>
            </div>
        </div>

    );
}

export default Portfolio;



      