import React, { useState } from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    Card, Button, CardImg, CardTitle, CardDeck, CardBody, Collapse, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Salad from '../Pics/salad.jpg'

export default function Shop() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [isOpen2, setIsOpen2] = useState(false);
    const toggle2 = () => setIsOpen2(!isOpen2);

    const [isOpen3, setIsOpen3] = useState(false);
    const toggle3 = () => setIsOpen3(!isOpen3);

    return (
        <div>
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

            {/* the container of the Cards */}
            <div className='container'>
                <CardDeck >
                    <Row>
                        <Col xxs='6' xs='6' md='4' >
                            <Card>
                                <CardImg src={Salad} alt="Card image cap" />
                                <CardBody >
                                    <CardTitle>Card title</CardTitle>
                                </CardBody>

                                <Button onClick={toggle}>Button</Button>
                                <div className='openSlide'>
                                    <Collapse isOpen={isOpen} >
                                        <Row >
                                            <Col xxs='4' xs='4' sm="4" >
                                                <div className='cardStyle'>
                                                    <CardImg src={Salad} alt="Card image cap" />
                                                    <CardTitle >Title</CardTitle>
                                                    <Button>Go somewhere</Button>
                                                </div>
                                            </Col>
                                            <Col xxs='4' xs='4' sm="4" >
                                                <div className='cardStyle'>
                                                    <CardImg src={Salad} alt="Card image cap" />
                                                    <CardTitle>Title</CardTitle>
                                                    <Button>Go somewhere</Button>
                                                </div>
                                            </Col>
                                            <Col xxs='4' xs='4' sm="4" >
                                                <div className='cardStyle'>
                                                    <CardImg src={Salad} alt="Card image cap" />
                                                    <CardTitle>Title</CardTitle>
                                                    <Button>Go somewhere</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Collapse>
                                </div>
                            </Card>

                        </Col>
                        <Col xxs='6' xs='6' md='4'>
                            <Card   >
                                <CardImg src={Salad} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                </CardBody>
                                <Button onClick={toggle2}>Button</Button>
                                <div className='openSlide2'>
                                    <Collapse isOpen={isOpen2} >
                                        <Row >
                                            <Col xxs='4' xs='4' sm="4" >
                                                <div className='cardStyle2'>
                                                    <CardImg src={Salad} alt="Card image cap" />
                                                    <CardTitle >Title</CardTitle>
                                                    <Button>Go somewhere</Button>
                                                </div>
                                            </Col>
                                            <Col xxs='4' xs='4' sm="4" >
                                                <div className='cardStyle2'>
                                                    <CardImg src={Salad} alt="Card image cap" />
                                                    <CardTitle>Title</CardTitle>
                                                    <Button>Go somewhere</Button>
                                                </div>
                                            </Col>
                                            <Col xxs='4' xs='4' sm="4" >
                                                <div className='cardStyle2'>
                                                    <CardImg src={Salad} alt="Card image cap" />
                                                    <CardTitle>Title</CardTitle>
                                                    <Button>Go somewhere</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Collapse>
                                </div>
                            </Card>
                        </Col>
                        <Col xxs='6' xs='6' md='4'>
                            <Card   >
                                <CardImg src={Salad} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                </CardBody>
                                <Button onClick={toggle3}>Button</Button>
                                <div className='openSlide2'>
                                    <Collapse isOpen={isOpen3} >
                                        <Row >
                                            <Col xxs='4' xs='4' sm="4" >
                                                <div className='cardStyle2'>
                                                    <CardImg src={Salad} alt="Card image cap" />
                                                    <CardTitle >Title</CardTitle>
                                                    <Button>Go somewhere</Button>
                                                </div>
                                            </Col>
                                            <Col xxs='4' xs='4' sm="4" >
                                                <div className='cardStyle2'>
                                                    <CardImg src={Salad} alt="Card image cap" />
                                                    <CardTitle>Title</CardTitle>
                                                    <Button>Go somewhere</Button>
                                                </div>
                                            </Col>
                                            <Col xxs='4' xs='4' sm="4" >
                                                <div className='cardStyle2'>
                                                    <CardImg src={Salad} alt="Card image cap" />
                                                    <CardTitle>Title</CardTitle>
                                                    <Button>Go somewhere</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Collapse>
                                </div>
                            </Card>
                        </Col>

                    </Row>
                </CardDeck>

            </div>
        </div>
    )
}
