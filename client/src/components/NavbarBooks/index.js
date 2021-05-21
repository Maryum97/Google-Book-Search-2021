import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
} from 'reactstrap';

function NavbarBooks() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="info" light expand="md">
                <NavbarBrand href="/"><b>React</b>BookSearch</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" ? "nav-link active" : "nav-link"
                            }
                        >
                            Search
                        </Link>
                        <Link
                            to="/savedbooks"
                            className={
                                window.location.pathname === "/savedbooks" ? "nav-link active" : "nav-link"
                            }
                        >
                            Saved
                        </Link>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarBooks;