import React, { useState } from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    Card, Button, CardImg, CardTitle, CardDeck, CardBody, Collapse
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Salad from '../Pics/salad.jpg'

export default function Shop() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = (e) => {
        setIsOpen(!isOpen);
        setIsOpen2(!toggle2)

    }

    const [isOpen2, setIsOpen2] = useState(false);
    const toggle2 = (e) => {
        setIsOpen2(!isOpen2)
        setIsOpen(!toggle)
    };

    const [isOpen3, setIsOpen3] = useState(false);
    const toggle3 = () => setIsOpen3(!isOpen3);

    const [isOpen4, setIsOpen4] = useState(false);
    const toggle4 = () => setIsOpen4(!isOpen4);

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
                <CardDeck className='cardDeck'  >
                    {/* className={isOpen ? 'open' : 'cards'} */}
                    <Card className={isOpen ? 'open' : 'cards'} >
                        <CardImg src={Salad} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                        </CardBody>
                        <Button onClick={toggle}>Button</Button>

                        <Collapse isOpen={isOpen}>

                            <div className='openSlide'>
                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle >Title</CardTitle>
                                    <Button>Go</Button>
                                </div>

                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>
                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>
                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>
                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>
                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>
                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>
                            </div>

                        </Collapse>

                    </Card>

                    <Card className={isOpen2 ? 'open2' : 'cards'}>
                        <CardImg src={Salad} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                        </CardBody>
                        <Button onClick={toggle2}>Button</Button>

                        <Collapse isOpen={isOpen2} >

                            <div className='openSlide2'>

                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle >Title</CardTitle>
                                    <Button>Go</Button>
                                </div>

                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>

                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>

                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>

                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>

                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>

                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>
                            </div>
                        </Collapse>
                    </Card>

                    <Card className='cards'>
                        <CardImg src={Salad} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                        </CardBody>
                        <Button onClick={toggle3}>Button</Button>

                        <Collapse isOpen={isOpen3} >

                            <div className='openSlide'>

                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle >Title</CardTitle>
                                    <Button>Go</Button>
                                </div>

                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>

                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>
                            </div>
                        </Collapse>
                    </Card>

                    <Card className='cards'>
                        <CardImg src={Salad} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                        </CardBody>
                        <Button onClick={toggle4}>Button</Button>

                        <Collapse isOpen={isOpen4} >

                            <div className='openSlide'>

                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle >Title</CardTitle>
                                    <Button>Go</Button>
                                </div>

                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>

                                <div className='cardStyle'>
                                    <CardImg src={Salad} alt="Card image cap" />
                                    <CardTitle>Title</CardTitle>
                                    <Button>Go</Button>
                                </div>
                            </div>
                        </Collapse>
                    </Card>
                </CardDeck>
            </div>
        </div>
    )
}

