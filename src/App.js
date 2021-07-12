import { HashRouter, Link, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Row} from 'react-bootstrap';
import { useState, useEffect } from 'react';

import './App.css';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import AboutPage from './pages/About';
import LifePage from './pages/Life';
import BlogsPage from './pages/Blogs';
import ContactPage from './pages/Contact';


function App() {

  const scrollToTop = () => {
    setExpanded(false);
    window.scrollTo({
      top: 0,
    });
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <HashRouter>
      <div>
        <Navbar collapseOnSelect fixed='top' expand='sm' variant='dark' bg='dark' expanded={expanded}>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setExpanded(expanded ? false : "expanded")} style={{marginLeft:10}}/>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className="mr-auto" style={{marginLeft:10}}>
                    <Nav.Link onClick={scrollToTop}><Link to="/ytc-web/" class="text-decoration-none fw-bold" style={{ color: 'rgb(153,230,179)', }}> Yan To Chau</Link></Nav.Link>
                    <Nav.Link onClick={scrollToTop}><Link to="/ytc-web/about" class="text-decoration-none text-light"> About</Link></Nav.Link>
                    <Nav.Link onClick={scrollToTop}><Link to="/ytc-web/projects" class="text-decoration-none text-light"> Projects</Link></Nav.Link>
                    <Nav.Link onClick={scrollToTop}><Link to="/ytc-web/life" class="text-decoration-none text-light"> Passions</Link></Nav.Link>
                    <Nav.Link onClick={scrollToTop}><Link to="/ytc-web/blogs" class="text-decoration-none text-light"> Blogs</Link></Nav.Link>
                    <Nav.Link onClick={scrollToTop}><Link to="/ytc-web/contact" class="text-decoration-none text-light"> Contact</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          
        </Navbar>
      </div>
      <br class=" mb-4"></br>

      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/life">
          <LifePage />
        </Route>
        <Route path="/blogs">
          <BlogsPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>

        {/* Home page goes last */}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <br class=" mb-4"></br>

      <footer class="footer mt-auto py-3 text-center bg-dark mb-auto">
        <div class="container">
          <span class="text-muted">Built with HTML, CSS, Bootstrap and React.JS. © Yan To Chau 2021.</span>
        </div>
      </footer>

    </HashRouter>
  );
}

export default App;