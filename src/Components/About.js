import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div>
            <Navbar color="dark" dark expand="md"  >
                <Nav  className='container'>
                    <NavItem>
                        <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/shop">Shop</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about">About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/contact">Contact</Link>
                    </NavItem>
                </Nav>
            </Navbar>
            <h3>About</h3>
        </div>
    )
}
