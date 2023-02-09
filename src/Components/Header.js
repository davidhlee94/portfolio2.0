import { HashLink } from 'react-router-hash-link';
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../CSS/Header.css"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <>
      <Navbar className="color-nav sticky-top" expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <div className="nav-container">
              <div className="brand-pic-text">
                <img
                  src="https://i.imgur.com/HtqTVL6.png"
                  width="40"
                  height="40"
                />
                <div className="brand-text">D L</div>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            className="custom-toggler navbar-toggler"
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse className="responsive-navbar-nav right-aligned">
            <Nav className="nav brackets">
              {location.pathname === "/" &&
                <Nav.Link
                  as={HashLink}
                  to="#home"
                  className="text-decoration-none navlinks"
                  onClick={() =>
                    setExpanded(false)
                  }
                >
                  <div className="col text-center link-text ">Home</div>
                </Nav.Link>}
              {location.pathname === "/" && !isMobile &&
                <Nav.Link
                  as={HashLink}
                  to="#about"
                  className="text-decoration-none navlinks"
                  onClick={() => setExpanded(false)}
                >
                  <div className="col text-center link-text">About</div>
                </Nav.Link>}
              {location.pathname === "/" && !isMobile &&
                <Nav.Link
                  as={HashLink}
                  to="#projects"
                  className="text-decoration-none navlinks"
                  onClick={() => setExpanded(false)}
                >
                  <div className="col text-center link-text">Projects</div>
                </Nav.Link>}
              {location.pathname === "/" && !isMobile &&
                <Nav.Link
                  as={HashLink}
                  to="#resume"
                  className="text-decoration-none navlinks"
                  onClick={() => setExpanded(false)}
                >
                  <div className="col text-center link-text">Resume</div>
                </Nav.Link>}
              {location.pathname !== "/" && <Nav.Link
                as={Link}
                to="/"
                className="text-decoration-none navlinks"
                onClick={() => setExpanded(false)}
              >
                <div className="col text-center link-text">Home</div>
              </Nav.Link>}
              <Nav.Link
                as={Link}
                to="/photography"
                className="text-decoration-none navlinks"
                onClick={() => setExpanded(false)}
              >
                <div className="col text-center link-text">Photography</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
