import React, { useState } from 'react'
import {
    CardImg, CardTitle, Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTwitter,
    faFacebookSquare,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Salad from '../Pics/salad.jpg'
import Inter from '../Pics/intersets.jpg'
import Givara from '../Pics/Givara_Mahfoud.png'
import { Link } from 'react-router-dom';


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
        setModal(!toggleModal)
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

    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);



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
            'هريسة نبكية',
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

    //! translation to Arabic 
    const translationAr = (e) => {
        e.preventDefault()
        const home = document.getElementById('home')
        const shop = document.getElementById('shop')
        const about = document.getElementById('about')
        const contact = document.getElementById('contact')
        if (home.id === 'home') {
            const translatedAr = {
                home: home.innerHTML = 'المنزل',
                shop: shop.innerHTML = 'المتجر',
                about: about.innerHTML = 'حول',
                contact: contact.innerHTML = 'تواصل'
            }
            localStorage.setItem('home', translatedAr.home)
            localStorage.setItem('shop', translatedAr.shop)
            localStorage.setItem('about', translatedAr.about)
            localStorage.setItem('contact', translatedAr.contact)
        }
    }

    //! translation to English
    const translationEn = (e) => {
        e.preventDefault()
        const home = document.getElementById('home')
        const shop = document.getElementById('shop')
        const about = document.getElementById('about')
        const contact = document.getElementById('contact')
        if (shop.id === 'shop') {
            const translatedEn = {
                home: home.innerHTML = 'home',
                shop: shop.innerHTML = 'shop',
                about: about.innerHTML = 'about',
                contact: contact.innerHTML = 'contact'
            }
            localStorage.setItem('home', translatedEn.home)
            localStorage.setItem('shop', translatedEn.shop)
            localStorage.setItem('about', translatedEn.about)
            localStorage.setItem('contact', translatedEn.contact)
        }
    }

    return (
        <div>
            {/* Header */}
            <div className='headers'>

                <Link to="/" style={{ textDecoration: 'none' }} className='navs'  id='home'>Home</Link>

                <Link to="/shop" style={{ textDecoration: 'none' }} className='navs' id='shop' className='active' >shop</Link>

                <Link to="/about" style={{ textDecoration: 'none' }} className='navs' id='about'>about</Link>

                <Link to="/contact" style={{ textDecoration: 'none' }} className='navs' id='contact'>contact</Link>

                <div className='langs'>
                    <a href="#eng" style={{ textDecoration: 'none' }} className='lang navs' onClick={translationEn} >EN</a>
                    <a href="#ar" style={{ textDecoration: 'none' }} className='lang navs' onClick={translationAr}> AR</a>
                </div>
            </div>

            {/* the container of the Cards */}
            <div className='container'>
                {/* <div className='popup'>
                    <div className='popupChild'>
                        <img src={Inter} alt="Card image cap" width='50%' className='popupImg1' />
                        <img src={Inter} alt="Card image cap" width='50%' className='popupImg' />
                        <img src={Inter} alt="Card image cap" width='50%' className='popupImg' />
                        <img src={Inter} alt="Card image cap" width='50%' className='popupImg' />
                    </div>
                </div> */}
                <section className='cardDeck'>

                    <div className={isOpen ? 'open' : 'cards'} >
                        <button onClick={toggle} className='btns' >

                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>حلو ناشف</p>
                        </button>

                        <Collapse isOpen={isOpen} >
                            <div className='openSlide'>
                                {state.HelwNashef.map(title => (
                                    <div className='cardStyle'>
                                        <button className='btns' onClick={toggleModal}>
                                            <CardImg src={Salad} alt="Card image cap" width='50%' />
                                            <p className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</p>
                                        </button>

                                        <Modal isOpen={modal} toggle={toggleModal} className='modals'  >

                                            <ModalBody className='modalsBody'>
                                                <CardImg src={Salad} alt="Card image cap" width='50%' className='modalImg' />
                                                <p className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</p>
                                                <CardImg src={Salad} alt="Card image cap" width='50%' className='modalImg' />
                                                <p className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</p>
                                                <CardImg src={Salad} alt="Card image cap" width='50%' className='modalImg' />
                                                <p className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</p>
                                                <CardImg src={Salad} alt="Card image cap" width='50%' className='modalImg' />
                                                <p className='CardTitle' >{title.split(" ").slice(0, 4).join(" ")}</p>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="secondary" onClick={toggle} className='btns'>Cancel</Button>
                                            </ModalFooter>
                                        </Modal>
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
                            <section className='hide-scroll'>
                                <div className='openSlideRaha '>

                                    {state.Raha.map(title => (
                                        <div className='cardStyleRaha '>
                                            <button className='btns full' >
                                                <CardImg src={Salad} alt="Card image cap" width='50%' className='scrlItem' />
                                                <p className='CardTitle scrlItem' >{title.split(" ").slice(0, 4).join(" ")}</p>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </Collapse>
                    </div>

                    <div className={isOpen3 ? 'open' : 'cards'}>

                        <button onClick={toggle3} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>حلو عربي</p>
                        </button>

                        <Collapse isOpen={isOpen3} >

                            <div className='openSlide3'>

                                {state.HelwArabi.map(title => (
                                    <div className='cardStyle3'>
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

                            <section className='hide-scroll'>
                                <div className='openSlideMokassarat'>

                                    {state.Moksrat.map(title => (
                                        <div className='cardStyleMokassarat'>
                                            <button className='btns full' >
                                                <CardImg src={Salad} alt="Card image cap" width='50%' className='scrlItem' />
                                                <p className='CardTitle scrlItem'>{title.split(" ").slice(0, 4).join(" ")}</p>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </Collapse>
                    </div>

                    <div className={isOpen5 ? 'open' : 'cards'}>
                        <button onClick={toggle5} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>بذورات</p>
                        </button>

                        <Collapse isOpen={isOpen5}>
                            <div className='openSlideBzorat' >
                                {state.Bzorat.map(title => (
                                    <div className='cardStyleBzorat'>
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

                            <div className='openSlideCoffe' >

                                {state.Coffee.map(title => (
                                    <div className='cardStyleCoffe'>
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

                            <div className='openSlideTmr' >

                                {state.Tmr.map(title => (
                                    <div className='cardStyleTmr'>
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


                            <section className='hide-scroll'>
                                <div className='openSlideMokassarat'>

                                    {state.Schocola.map(title => (
                                        <div className='cardStyleMokassarat'>
                                            <button className='btns full' >
                                                <CardImg src={Salad} alt="Card image cap" width='50%' className='scrlItem' />
                                                <p className='CardTitle scrlItem'>{title.split(" ").slice(0, 4).join(" ")}</p>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </Collapse>
                    </div>

                    <div className={isOpen9 ? 'open' : 'cards'}>
                        <button onClick={toggle9} className='btns'>
                            <img src={Salad} alt="Card image cap" width='200px' className='imgSize' />

                            <p className='titles'>ملبس</p>
                        </button>

                        <Collapse isOpen={isOpen9}>

                            <div className='openSlideTmr' >

                                {state.Mlabas.map(title => (
                                    <div className='cardStyleTmr'>
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

                            <div className='openSlideSakaker' >

                                {state.Skaker.map(title => (
                                    <div className='cardStyleSakaker'>
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

                            <section className='hide-scroll'>
                                <div className='openSlideMokassarat'>

                                    {state.HrestAllwz.map(title => (
                                        <div className='cardStyleMokassarat'>
                                            <button className='btns full' >
                                                <CardImg src={Salad} alt="Card image cap" width='50%' className='scrlItem' />
                                                <p className='CardTitle scrlItem'>{title.split(" ").slice(0, 4).join(" ")}</p>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
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

