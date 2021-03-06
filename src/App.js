import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import './App.css';

import Footer from "./components/Footer.js";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import ContactPage from "./pages/ContactPage.js";
import PlantamagotchiPage from './pages/PlantamagotchiPage';
import ActiveBingoPage from './pages/ActiveBingoPage';
import KetoKingPage from './pages/KetoKingPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Thomas Nguyen",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Thomas Nguyen",
        subTitle: "Portfolio",
        text: "Check out my projects below"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Let's Connect"
      },
      activeBingo: {
        title: "Active Bingo"
      },
      ketoKing: {
        title: "Keto King"
      },
      plantamagotchi: {
        title: "Plantamgotchi"
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Thomas T. Nguyen</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/plantamagotchi" exact render={() => <PlantamagotchiPage title={this.state.plantamagotchi.title} />} />
          <Route path="/activeBingo" exact render={() => <ActiveBingoPage title={this.state.activeBingo.title} />} />
          <Route path="/ketoKing" exact render={() => <KetoKingPage title={this.state.ketoKing.title} />} />


          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
