import React from 'react';
import './style.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs='9'>© 2021 Copyright</Col>
                    <Col xs='3'>
                        Follow me on social media:<br></br>
                        <a href="https://www.linkedin.com/in/maryum-bokhari-9070581ba/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <span>  </span>
                        <a href="https://www.instagram.com/maryumbokhari2101/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>

                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;