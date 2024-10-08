import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Footer.css'
const Footer = () => {
    return (
        <footer className="bg-light py-4">
            <Container>
                <Row>

                    <Col md={6}>
                        <ul className="list-unstyled">
                            <li><a href="#terms">Terms of Service</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                        </ul>
                    </Col>
                    <Col md={6} className="text-right">
                        <a href="https://facebook.com" className="mx-2"><FontAwesomeIcon icon="fa-brands fa-facebook"/></a>
                        <a href="https://instagram.com" className="mx-2"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                       
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
