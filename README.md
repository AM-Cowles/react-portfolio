# React-Portfolio
## Description
The Portfolio application is created using React.js as a mobile first applicaton with clean and user friendly UI, easy navigation and reusable components.

The Portfolio can be accessed through: [Portfolio](https://AM-Cowles.github.io/react-portfolio/)

## Table of Contents

[Description](#description)

[Technologies](#Technologies)

[Pages-&-Components](#Pages-&-Components)

[License](#license)

[Badges](#badges)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Technologies:
1. React.js
2. CSS
3. JavaScript
4. Bootstrap
5. npm packages and dependencies
    * react-dom
    * react-router-dom
    * react-bootstrap

## Pages & Components
The portfolio is comprised of Pages and Components. The Components are reused in multiple pages and some of the Components are used more than one time on a single page. The following table provides the list of components that are rendered on each page.

Page | Component
------------ | -------------
Homepage | Navbar, Hero, About Me, Portfolio, Footer
About Me Page | Navbar, About Me, Header, Footer
Portfolio Page | Navbar, Portfolio, Header, Footer
Contact Page | Navbar, Contact, Header, Footer

The following components are rendered multiple times in a single page:

Component | Renders on
------------ | -------------
Social Media | Navbar, Footer in the homepage
Contact | Contact Page, Footer in the homepage and the contact page

**Navbar Component**
The Navbar Component is accessible on all pages. Using react router dom provides an easy navigation experience. The Navbar also provides links to social media for communitation, the social media is another component that is rendered in the Navbar and in the Footer Component of the website.

**Hero Component**
The Hero Component renders in the homepage to provide an introduction to the website and it also provides a button with a direct link to scroll through the homepage to the portfolio section of the website to view the projects.

**About Me Component**
The About Me Component is a component that provides an introduction about the owner of the portfolio. This is a component that is renderd both in the Homepage and in the About Me Page, the later can be accessed throught the Navbar.

**Technologies**
This Component provides a list of technologies and is rendered in the Homepage.

**Portfolio**
The Portfolio Component is a component that imports a card Component from react-bootstrap and it renders cards that provide information about projects record that render dynamically. The Portfolio Component is reused in the Homepage and in the Portfolio Page, the later is accessible through the Navbar. 

**Homepage**
The Homepage renders 4 components:
1. Hero
2. About Me
3. Technologies
4. Portfolio

The Nav Bar component also includes links to all the relevant social media:
* GitHub
* Facebook
* Instagram
* LinkedIn
* Twitter

**About Me Page**
The About Me Page provides informaiton about the profile owner along with contact information and a downloadable resume. 

**Portfolio Page**
The Portfolio Page provides information about the work experience displayed as cards, each card provides two buttons to access the GitHub ripositories and the deployed application or its demo. 

**Contact Page**
The Contact Page enables the portfolio user to send an e-mail and a amessage to the portfolio owner to get in contact. 

## License
![APM](https://img.shields.io/apm/l/README)

## Badges

![React.js](https://img.shields.io/badge/React.js-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-blue)
![CSS](https://img.shields.io/badge/CSS-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-blue)

## Contributing 

To contribute to this project, please make sure you follow the guidelines in [The Contributor Covenant](https://www.contributor-covenant.org/) as general guidelines.
Kindly maintain the highest ethics and respect. For further questions or requests kindly contact me through my [Email](mailto:Alyssa.M.Cowles@gmail.com) or [GitHub](https://github.com/AM-Cowles).

## Tests
The application has been tested on the browser and on multiple devices to test the responsiveness.

## Questions
For any questions, please contact me through [GitHub](https://github.com/AM-Cowles) 
or [Email](mailto:Alyssa.M.Cowles@gmail.com)