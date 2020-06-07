import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTwitter,
    faFacebookSquare,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export default function About() {
    return (
        <div>
            {/* Header */}
            <div className=' headers '>

                <a href="/" style={{ textDecoration: 'none' }} className='navs'>Home</a>

                <a href="/shop" style={{ textDecoration: 'none' }} className='navs'>Shop</a>

                <a href="/about" style={{ textDecoration: 'none' }} className='navs'>About</a>

                <a href="/contact" style={{ textDecoration: 'none' }} className='navs'>Contact</a>

            </div>
            <h1>About</h1>

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
