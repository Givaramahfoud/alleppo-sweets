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
        setIsOpen3(!toggle3)
        setIsOpen4(!toggle4)
        setIsOpen5(!toggle5)
    }

    const [isOpen2, setIsOpen2] = useState(false);
    const toggle2 = (e) => {
        setIsOpen2(!isOpen2)
        setIsOpen(!toggle)
        setIsOpen3(!toggle3)
        setIsOpen4(!toggle4)
        setIsOpen5(!toggle5)
    };

    const [isOpen3, setIsOpen3] = useState(false);
    const toggle3 = () => {
        setIsOpen3(!isOpen3)
        setIsOpen(!toggle)
        setIsOpen2(!toggle2)
        setIsOpen4(!toggle4)
        setIsOpen5(!toggle5)
    };

    const [isOpen4, setIsOpen4] = useState(false);
    const toggle4 = () => {
        setIsOpen4(!isOpen4)
        setIsOpen(!toggle)
        setIsOpen2(!toggle2)
        setIsOpen3(!toggle3)
        setIsOpen5(!toggle5)
    };

    const [isOpen5, setIsOpen5] = useState(false);
    const toggle5 = () => {
        setIsOpen5(!isOpen5)
        setIsOpen(!toggle)
        setIsOpen2(!toggle2)
        setIsOpen3(!toggle3)
        setIsOpen4(!toggle4)
    };

    const [state] = useState({

        HelwNashef: [
            'معمول تمر',
            'معمول جوز',
            'معمول فستق',
            'سنيورة غريبة',
            'بيتي فور',
        ],

        Raha: [
            'أصابع',
            'جوز الهند',
            'شوكولا',
            'قروش',
            'ليرات',
            'مبرومة',
            'مثلثات',
            'ملوكية حزوز',
            'ملوكية مبرومة',
            'ملوكية مستطيل',
            'ورود'
        ],

        HelwArabi: [
            'مشكل',
            'هريسة_نبكية',
            'مبرومة',
            'بلورية'
        ],

        Moksrat: [
            'فستق حلبي',
            'فستق حلبي مدخن',
            'لوز',
            'لوز مدخن',
            'كاجو',
            'كاجو مدخن',
            'تخليطة ديلوكس بزر',
            'تخليطة ديلوكس مدخن',
            'تخليطة',
            'تخليطة مدخن',
            'تخليطة صينية'
        ],

        Bzorat: [
            'أبيض قرع',
            'بطيخ أسود',
            'بطيخ مسلوق',
            'دوار الشمس',
            'مصري'
        ],
    })

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
                <CardDeck className='cardDeck'>
                    <Card className={isOpen ? 'open' : 'cards'} >
                        <CardImg src={Salad} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>حلو ناشف</CardTitle>
                        </CardBody>
                        <Button onClick={toggle} className='btn-light'>show more</Button>
                        {/* <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png" className='icon' /> */}

                        <Collapse isOpen={isOpen}>

                            <div className='openSlide'>
                                {state.HelwNashef.map(title => (
                                    <div className='cardStyle'>
                                        <CardImg src={Salad} alt="Card image cap" />
                                        <CardTitle >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        <Button>Go</Button>
                                    </div>
                                ))}
                            </div>

                        </Collapse>

                    </Card>



                    <Card className={isOpen2 ? 'open' : 'cards'}>
                        <CardImg src={Salad} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>راحة</CardTitle>
                        </CardBody>
                        <Button onClick={toggle2} className='btn-light'>show more</Button>

                        <Collapse isOpen={isOpen2} >

                            <div className='openSlide2'>

                                {state.Raha.map(title => (
                                    <div className='cardStyle'>
                                        <CardImg src={Salad} alt="Card image cap" />
                                        <CardTitle >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        <Button>Go</Button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </Card>



                    <Card className={isOpen3 ? 'open' : 'cards'}>
                        <CardImg src={Salad} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>حلو عربي</CardTitle>
                        </CardBody>
                        <Button onClick={toggle3} className='btn-light'>show more</Button>

                        <Collapse isOpen={isOpen3} >

                            <div className='openSlide'>

                                {state.HelwArabi.map(title => (
                                    <div className='cardStyle'>
                                        <CardImg src={Salad} alt="Card image cap" />
                                        <CardTitle >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        <Button>Go</Button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </Card>

                    <Card className={isOpen4 ? 'open' : 'cards'}>
                        <CardImg src={Salad} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>مكسرات</CardTitle>
                        </CardBody>
                        <Button onClick={toggle4} className='btn-light'>show more</Button>

                        <Collapse isOpen={isOpen4} >

                            <div className='openSlide2'>

                                {state.Moksrat.map(title => (
                                    <div className='cardStyle'>
                                        <CardImg src={Salad} alt="Card image cap" />
                                        <CardTitle >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        <Button>Go</Button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </Card>

                    <Card className={isOpen5 ? 'open' : 'cards'}>
                        <CardImg src={Salad} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>بذورات</CardTitle>
                        </CardBody>
                        <Button onClick={toggle5} className='btn-light'>show more</Button>

                        <Collapse isOpen={isOpen5} >

                            <div className='openSlide3'>

                                {state.Bzorat.map(title => (
                                    <div className='cardStyle'>
                                        <CardImg src={Salad} alt="Card image cap" />
                                        <CardTitle >{title}</CardTitle>
                                        <Button>Go</Button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </Card>

                </CardDeck>

            </div>
        </div>
    )
}

