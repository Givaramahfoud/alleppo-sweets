import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTwitter,
    faFacebookSquare,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default function Contact() {
    return (
        <div className='body'>
            {/* Header */}
            <Nav className='headers'>
                <div className='container navbar'>
                    <NavItem >
                        <Link to="/" style={{ textDecoration: 'none' }} className='navs' >Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/shop" style={{ textDecoration: 'none' }} className='navs' >Shop</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about" style={{ textDecoration: 'none' }} className='navs'>About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/contact" style={{ textDecoration: 'none' }} className='navs' className='active'>Contact</Link>
                    </NavItem>
                </div>
            </Nav>
            <Form className='form' >
                <h3 className='contactUs'>Contact us</h3>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="mr-sm-2">Message</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button className='mt-3 bg-dark'>Submit</Button>
            </Form>

            {/* Footer */}
            <div color="dark" expand="md" className='footer'>
                <a href='https://www.facebook.com/'>  <FontAwesomeIcon icon={faFacebookSquare} color="#1777F2" /> </a>
                <a href='https://www.twitter.com/'>  <FontAwesomeIcon icon={faTwitter} color="#33a7f4" /> </a>
                <a href='https://www.instagram.com/'>   <FontAwesomeIcon icon={faInstagram} color="#CA5191" /> </a>
                <a href='https://www.youtube.com/'>   <FontAwesomeIcon icon={faYoutube} color="#e5162f" /> </a>
            </div>
        </div>
    )
}
