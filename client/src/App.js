import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Awards from './pages/Awards';
import Booking from './pages/Booking';
import Careers from './pages/Careers';
import Gelvsice from './pages/Gelvsice';
import Meats from './pages/Meats';
import Cheeses from './pages/Cheeses';
import Other from './pages/Other';
import Contact from './pages/Contact';
import Deli from './pages/Deli';
import Gelato from './pages/Gelato';
import Howto from './pages/Howto';
import Menu from './pages/Menu';
import Reviews from './pages/Reviews';
import Request from './pages/Request';
import NoMatch from './pages/NoMatch';
import Navigation from './components/common/Navbar';
import Footer from './components/common/Footer';

function App(props) {
  return (
    <Router>
    <Container fluid >
      <Row className="d-flex flex-column text-center">
      <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/awards" component={Awards} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/deli" component={Deli} />
            <Route exact path="/gelato" component={Gelato} />
            <Route exact path="/gelvsice" component={Gelvsice} />
            <Route exact path="/meats" component={Meats} />
            <Route exact path="/cheeses" component={Cheeses} />
            <Route exact path="/more" component={Other} />
            <Route exact path="/howto" component={Howto} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/request" component={Request} />
            <Route exact path="/reviews" component={Reviews} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
      </Row>
    </Container>
    </Router>
  );
}

export default App;
