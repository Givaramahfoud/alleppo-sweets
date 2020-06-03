import React, { useState } from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    Card, Button, CardImg, CardTitle, CardDeck, CardBody, Collapse
} from 'reactstrap';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTwitter,
    faFacebookSquare,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Salad from '../Pics/salad.jpg'


export default function Shop() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = (e) => {
        setIsOpen(!isOpen);
        setIsOpen2(!toggle2)
        setIsOpen3(!toggle3)
        setIsOpen4(!toggle4)
        setIsOpen5(!toggle5)
        setIsOpen6(!toggle6)
        setIsOpen7(!toggle7)
        setIsOpen8(!toggle8)
        setIsOpen9(!toggle9)
        setIsOpen10(!toggle10)
        setIsOpen11(!toggle11)
        setIsOpen12(!toggle12)
        setIsOpen13(!toggle13)
    }

    const [isOpen2, setIsOpen2] = useState(false);
    const toggle2 = (e) => {
        setIsOpen2(!isOpen2)
        setIsOpen(!toggle)
        setIsOpen3(!toggle3)
        setIsOpen4(!toggle4)
        setIsOpen5(!toggle5)
        setIsOpen6(!toggle6)
        setIsOpen7(!toggle7)
        setIsOpen8(!toggle8)
        setIsOpen9(!toggle9)
        setIsOpen10(!toggle10)
        setIsOpen11(!toggle11)
        setIsOpen12(!toggle12)
        setIsOpen13(!toggle13)
    };

    const [isOpen3, setIsOpen3] = useState(false);
    const toggle3 = () => {
        setIsOpen3(!isOpen3)
        setIsOpen(!toggle)
        setIsOpen2(!toggle2)
        setIsOpen4(!toggle4)
        setIsOpen5(!toggle5)
        setIsOpen6(!toggle6)
        setIsOpen7(!toggle7)
        setIsOpen8(!toggle8)
        setIsOpen9(!toggle9)
        setIsOpen10(!toggle10)
        setIsOpen11(!toggle11)
        setIsOpen12(!toggle12)
        setIsOpen13(!toggle13)
    };

    const [isOpen4, setIsOpen4] = useState(false);
    const toggle4 = () => {
        setIsOpen4(!isOpen4)
        setIsOpen(!toggle)
        setIsOpen2(!toggle2)
        setIsOpen3(!toggle3)
        setIsOpen5(!toggle5)
        setIsOpen6(!toggle6)
        setIsOpen7(!toggle7)
        setIsOpen8(!toggle8)
        setIsOpen9(!toggle9)
        setIsOpen10(!toggle10)
        setIsOpen11(!toggle11)
        setIsOpen12(!toggle12)
        setIsOpen13(!toggle13)
    };

    const [isOpen5, setIsOpen5] = useState(false);
    const toggle5 = () => {
        setIsOpen5(!isOpen5)
        setIsOpen(!toggle)
        setIsOpen2(!toggle2)
        setIsOpen3(!toggle3)
        setIsOpen4(!toggle4)
        setIsOpen6(!toggle6)
        setIsOpen7(!toggle7)
        setIsOpen8(!toggle8)
        setIsOpen9(!toggle9)
        setIsOpen10(!toggle10)
        setIsOpen11(!toggle11)
        setIsOpen12(!toggle12)
        setIsOpen13(!toggle13)
    };

    const [isOpen6, setIsOpen6] = useState(false);
    const toggle6 = () => {
        setIsOpen6(!isOpen6)
        setIsOpen(!toggle)
        setIsOpen2(!toggle2)
        setIsOpen3(!toggle3)
        setIsOpen4(!toggle4)
        setIsOpen5(!toggle5)
        setIsOpen7(!toggle7)
        setIsOpen8(!toggle8)
        setIsOpen9(!toggle9)
        setIsOpen10(!toggle10)
        setIsOpen11(!toggle11)
        setIsOpen12(!toggle12)
        setIsOpen13(!toggle13)
    };

    const [isOpen7, setIsOpen7] = useState(false);
    const toggle7 = () => {
        setIsOpen7(!isOpen7)
        setIsOpen(!toggle)
        setIsOpen2(!toggle2)
        setIsOpen3(!toggle3)
        setIsOpen4(!toggle4)
        setIsOpen5(!toggle5)
        setIsOpen6(!toggle6)
        setIsOpen8(!toggle8)
        setIsOpen9(!toggle9)
        setIsOpen10(!toggle10)
        setIsOpen11(!toggle11)
        setIsOpen12(!toggle12)
        setIsOpen13(!toggle13)
    };

    const [isOpen8, setIsOpen8] = useState(false);
    const toggle8 = () => {
        setIsOpen8(!isOpen8)
        setIsOpen(!toggle)
        setIsOpen2(!toggle2)
        setIsOpen3(!toggle3)
        setIsOpen4(!toggle4)
        setIsOpen5(!toggle5)
        setIsOpen6(!toggle6)
        setIsOpen7(!toggle7)
        setIsOpen9(!toggle9)
        setIsOpen10(!toggle10)
        setIsOpen11(!toggle11)
        setIsOpen12(!toggle12)
        setIsOpen13(!toggle13)
    };

    const [isOpen9, setIsOpen9] = useState(false);
    const toggle9 = () => {
        setIsOpen9(!isOpen9)
        setIsOpen(!toggle)
        setIsOpen2(!toggle2)
        setIsOpen3(!toggle3)
        setIsOpen4(!toggle4)
        setIsOpen5(!toggle5)
        setIsOpen6(!toggle6)
        setIsOpen7(!toggle7)
        setIsOpen8(!toggle8)
        setIsOpen10(!toggle10)
        setIsOpen11(!toggle11)
        setIsOpen12(!toggle12)
        setIsOpen13(!toggle13)
    };

    const [isOpen10, setIsOpen10] = useState(false);
    const toggle10 = () => {
        setIsOpen10(!isOpen10)
        setIsOpen(!toggle)
        setIsOpen2(!toggle2)
        setIsOpen3(!toggle3)
        setIsOpen4(!toggle4)
        setIsOpen5(!toggle5)
        setIsOpen6(!toggle6)
        setIsOpen7(!toggle7)
        setIsOpen8(!toggle8)
        setIsOpen9(!toggle9)
        setIsOpen11(!toggle11)
        setIsOpen12(!toggle12)
        setIsOpen13(!toggle13)
    };



    const [isOpen11, setIsOpen11] = useState(false);
    const toggle11 = () => {
        setIsOpen11(!isOpen11)
        setIsOpen(!toggle)
        setIsOpen2(!toggle2)
        setIsOpen3(!toggle3)
        setIsOpen4(!toggle4)
        setIsOpen5(!toggle5)
        setIsOpen6(!toggle6)
        setIsOpen7(!toggle7)
        setIsOpen8(!toggle8)
        setIsOpen9(!toggle9)
        setIsOpen10(!toggle10)
        setIsOpen12(!toggle12)
        setIsOpen13(!toggle13)
    };

    const [isOpen12, setIsOpen12] = useState(false);
    const toggle12 = () => {
        setIsOpen12(!isOpen12)
        setIsOpen(!toggle)
        setIsOpen2(!toggle2)
        setIsOpen3(!toggle3)
        setIsOpen4(!toggle4)
        setIsOpen5(!toggle5)
        setIsOpen6(!toggle6)
        setIsOpen7(!toggle7)
        setIsOpen8(!toggle8)
        setIsOpen9(!toggle9)
        setIsOpen10(!toggle10)
        setIsOpen11(!toggle11)
        setIsOpen13(!toggle13)
    };

    const [isOpen13, setIsOpen13] = useState(false);
    const toggle13 = () => {
        setIsOpen13(!isOpen13)
        setIsOpen(!toggle)
        setIsOpen2(!toggle2)
        setIsOpen3(!toggle3)
        setIsOpen4(!toggle4)
        setIsOpen5(!toggle5)
        setIsOpen6(!toggle6)
        setIsOpen7(!toggle7)
        setIsOpen8(!toggle8)
        setIsOpen9(!toggle9)
        setIsOpen10(!toggle10)
        setIsOpen11(!toggle11)
        setIsOpen12(!toggle12)
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

        Coffee: [
            'بدون هال',
            'مع هال',
            'هال اكسترا'
        ],

        Tmr: [
            'تمر',
            'تمر بالشوكولا'
        ],

        Schocola: [
            'فيريرو',
            'محشوة شوكولا بندق',
            'محشوة شوكولا سائلة',
            'محشوة فستق دوائر',
            'محشوة فستق مربع',
            'محشية لوز',
            'محشية نستلة',
            'محشية نسكافيه',
            'مرّة',
            'شوكولا ساده',
            'شوكولا مرّة'
        ],

        Mlabas: [
            'ملبس لوز',
            'شوكولا بايبي'
        ],

        Skaker: [
            'كاراميلا',
            'سميري',
            'قضامة بسكر',
            'شوكولا محجرة'
        ],

        NogaFstk: [''],

        HrestAllwz: [
            'ببرونة أزرق',
            'ببرونة زهر',
            'فراشة',
            'فواكة',
            'ملوكية',
            'ورد أبيض',
            'ورد أحمر',
            'ورد أزرق',
            'ورد زهر'
        ],

        Wifers: [
            'شوكولا ساده',
            'شوكولا مرّة'
        ]

    })

    // const Test = () => {
    //     const openSlide = document.querySelector('.openSlide')
    //     openSlide.classList.toggle('openSlideTest')
    // }

    return (
        <div>
            {/* Header */}
            <div className=' headers '>

                <a href="/" style={{ textDecoration: 'none' }} className='navs'>Home</a>

                <a href="/shop" style={{ textDecoration: 'none' }} className='navs'>Shop</a>

                <a href="/about" style={{ textDecoration: 'none' }} className='navs'>About</a>

                <a href="/contact" style={{ textDecoration: 'none' }} className='navs'>Contact</a>

            </div>

            {/* the container of the Cards */}
            <div className='container'>
                <section className='cardDeck'>

                    <div className={isOpen ? 'open' : 'cards'} >
                        <button onClick={toggle} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>حلو ناشف</p>
                        </button>

                        <Collapse isOpen={isOpen}>
                            <div className='openSlide'>
                                {state.HelwNashef.map(title => (
                                    <div className='cardStyle'>
                                        <button className='btns' >
                                            <CardImg src={Salad} alt="Card image cap" className='imgSize' width='50%' />
                                            <CardTitle className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>

                    </div>

                    <div className={isOpen2 ? 'open' : 'cards'}>

                        <button onClick={toggle2} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>راحة</p>
                        </button>

                        <Collapse isOpen={isOpen2} >

                            <div className='openSlide2'>

                                {state.Raha.map(title => (
                                    <div className='cardStyle2'>
                                        <button className='btns' >
                                            {/* <div className='sml'> */}
                                                <CardImg src={Salad} alt="Card image cap" className='imgSize' width='50%'/>
                                                <p className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</p>
                                            {/* </div> */}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>

                    <div className={isOpen3 ? 'open' : 'cards'}>

                        <button onClick={toggle3} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>حلو عربي</p>
                        </button>

                        <Collapse isOpen={isOpen3} >

                            <div className='openSlide'>

                                {state.HelwArabi.map(title => (
                                    <div className='cardStyle'>
                                        <button className='btns' >
                                            <CardImg src={Salad} alt="Card image cap" />
                                            <CardTitle className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>

                    <div className={isOpen4 ? 'open' : 'cards'}>
                        <button onClick={toggle4} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>مكسرات</p>
                        </button>

                        <Collapse isOpen={isOpen4} >

                            <div className='openSlide2'>

                                {state.Moksrat.map(title => (
                                    <div className='cardStyle'>
                                        <button className='btns' >
                                            <CardImg src={Salad} alt="Card image cap" />
                                            <CardTitle className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>

                    <div className={isOpen5 ? 'open' : 'cards'}>
                        <button onClick={toggle5} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>بذورات</p>
                        </button>

                        <Collapse isOpen={isOpen5}>

                            <div className='openSlide' >

                                {state.Bzorat.map(title => (
                                    <div className='cardStyle'>
                                        <button className='btns' >
                                            <CardImg src={Salad} alt="Card image cap" />
                                            <CardTitle className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>

                    <div className={isOpen6 ? 'open' : 'cards'}>
                        <button onClick={toggle6} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>قهوة</p>
                        </button>

                        <Collapse isOpen={isOpen6}>

                            <div className='openSlide2' >

                                {state.Coffee.map(title => (
                                    <div className='cardStyle'>
                                        <button className='btns' >
                                            <CardImg src={Salad} alt="Card image cap" />
                                            <CardTitle className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>

                    <div className={isOpen7 ? 'open' : 'cards'}>
                        <button onClick={toggle7} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>تمر</p>
                        </button>

                        <Collapse isOpen={isOpen7}>

                            <div className='openSlide3' >

                                {state.Tmr.map(title => (
                                    <div className='cardStyle'>
                                        <button className='btns' >
                                            <CardImg src={Salad} alt="Card image cap" />
                                            <CardTitle className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>

                    <div className={isOpen8 ? 'open' : 'cards'}>
                        <button onClick={toggle8} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>شوكولا</p>
                        </button>

                        <Collapse isOpen={isOpen8}>

                            <div className='openSlide2' >

                                {state.Schocola.map(title => (
                                    <div className='cardStyle'>
                                        <button className='btns' >
                                            <CardImg src={Salad} alt="Card image cap" />
                                            <CardTitle className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>

                    <div className={isOpen9 ? 'open' : 'cards'}>
                        <button onClick={toggle9} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>ملبس</p>
                        </button>

                        <Collapse isOpen={isOpen9}>

                            <div className='openSlide3' >

                                {state.Mlabas.map(title => (
                                    <div className='cardStyle'>
                                        <button className='btns' >
                                            <CardImg src={Salad} alt="Card image cap" />
                                            <CardTitle className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>

                    <div className={isOpen10 ? 'open' : 'cards'}>
                        <button onClick={toggle10} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>سكاكر</p>
                        </button>

                        <Collapse isOpen={isOpen10}>

                            <div className='openSlide2' >

                                {state.Skaker.map(title => (
                                    <div className='cardStyle'>
                                        <button className='btns' >
                                            <CardImg src={Salad} alt="Card image cap" />
                                            <CardTitle className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>

                    <div className={isOpen11 ? 'open' : 'cards'}>
                        <button onClick={toggle11} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>نوغا فستق</p>
                        </button>

                        <Collapse isOpen={isOpen11}>

                            <div className='openSlid' >

                                {state.NogaFstk.map(title => (
                                    <div className='cardStyle'>
                                        <button className='btns' >
                                            <CardImg src={Salad} alt="Card image cap" />
                                            <CardTitle className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>

                    <div className={isOpen12 ? 'open' : 'cards'}>
                        <button onClick={toggle12} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>هريسة اللوز</p>
                        </button>

                        <Collapse isOpen={isOpen12}>

                            <div className='openSlide2' >

                                {state.HrestAllwz.map(title => (
                                    <div className='cardStyle'>
                                        <button className='btns' >
                                            <CardImg src={Salad} alt="Card image cap" />
                                            <CardTitle className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</CardTitle>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>

                    {/* <div className={isOpen13 ? 'open' : 'cards'}>
                        <button onClick={toggle13} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'> وايفرز</p>
                        </button>

                        <Collapse isOpen={isOpen13}>

                            <div className='openSlide3' >

                                {state.Wifers.map(title => (
                                    <div className='cardStyle'>
                                        <CardImg src={Salad} alt="Card image cap" />
                                        <CardTitle className='CardTitle'>{title}</CardTitle>
                                        <Button className='btn-dark bg-dark'>select</Button>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div> */}
                </section>
            </div>

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

