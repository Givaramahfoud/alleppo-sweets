import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default function Contact() {
    return (
        <div className='body'>
            <Navbar color="dark" dark expand="md"  >
                <Nav className='container'>
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
            {/* <h3 className='contactUs'>Contact us</h3> */}
            <Form className='form' >
            {/* <Label>Contact Us</Label> */}
                <h3 className='contactUs'>Contact us</h3>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label  className="mr-sm-2">Message</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button className='mt-3 bg-dark'>Submit</Button>
            </Form>
        </div>
    )
}
