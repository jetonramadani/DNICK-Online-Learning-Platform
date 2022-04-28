import React, { useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
const Header = () => {
    const [logedIn, setLogedIn] = useState(false);
    const val = localStorage.getItem("logged_in");
    if (val !== undefined && val !== logedIn.toString()) {
        setLogedIn(val === "true");
    }
    const navigate = useNavigate();
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Container className="bg-dark">
                <Link to="/">
                    <Navbar.Brand >
                        {/* <Image src={logo} className="w-25" /> */}
                        LOGO
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">

                        <Link to="/" className="nav-link" >Home</Link>

                        <Link to="/tracks" className="nav-link">
                            Tracks
                        </Link>
                        <Link to="/projects" className="nav-link">
                            Projects
                        </Link>
                        {
                            !logedIn ?
                                <Link to="/start" className="nav-link">
                                    Get Started
                                </Link>
                                :
                                <Nav.Link className="nav-link" onClick={() => {
                                    localStorage.setItem("logged_in", false);
                                    navigate("/start", { replace: true });
                                }}>
                                    Log out
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar>
    );
};

export default Header;