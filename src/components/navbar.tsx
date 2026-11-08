'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function SiteNavbar(){
    return (
        <Navbar 
        expand="lg"
        className="aston-navbar"
        data-bs-theme="dark"
        >
            <Container fluid className="aston-navbar-container">
                <Navbar.Brand href='#home' className='aston-brand'>
                    <span className='aston-brand-name'>
                        ASTON MARTIN
                    </span>

                </Navbar.Brand>

                <Navbar.Toggle aria-controls='aston-navbar-collapse'/>

                <Navbar.Collapse id="aston-navbar-collapse">
                    <Nav className='aston-nav-links'>
                        {/* Home */}
                        <Nav.Link href='#home'>
                            HOME
                        </Nav.Link>

                        <NavDropdown title="COMPANY" id='company-dropdown' className='aston-nav-dropdown'>
                            <NavDropdown.Item href='#about'>
                                About the Company
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#heritage'>
                                Our History
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#craftsmanship'>
                                Our Approach
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* CARS DROPDOWN */}
                        <NavDropdown title="OUR CARS" id='cars-dropdown' className='aston-nav-dropdown'>
                            <NavDropdown.Item href='#cars'>
                                Sports Cars
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#cars'>
                                Supercars
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#cars'>
                                SUVs
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* DISCOVER MORE */}
                        <Nav.Link href='#about' className='aston-nav-cta'> DISCOVER MORE</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNavbar;