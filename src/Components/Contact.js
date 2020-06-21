import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTwitter,
    faFacebookSquare,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';


export default function Contact() {

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
        <div className='body'>
            {/* Header */}
            <div className='headers'>

                <Link to="/" style={{ textDecoration: 'none' }} className='navs' id='home'>Home</Link>

                <Link to="/shop" style={{ textDecoration: 'none' }} className='navs' id='shop' >shop</Link>

                <Link to="/about" style={{ textDecoration: 'none' }} className='navs' id='about'>about</Link>

                <Link to="/contact" style={{ textDecoration: 'none' }} className='navs' id='contact' className='active'>contact</Link>

                <div className='langs'>
                    <a href="#eng" style={{ textDecoration: 'none' }} className='lang navs' onClick={translationEn} >EN</a>
                    <a href="#ar" style={{ textDecoration: 'none' }} className='lang navs' onClick={translationAr}> AR</a>
                </div>
            </div>
            <Form className='form' >
                <h3 className='contactUs'>Contact us</h3>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" className='input' />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="mr-sm-2">Message</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <button className='contact-btn'>Submit</button>
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
