import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTwitter,
    faFacebookSquare,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div>
            {/* Header */}
            <div className=' headers '>

                <Link to="/" style={{ textDecoration: 'none' }} className='navs' >Home</Link>

                <Link to="/shop" style={{ textDecoration: 'none' }} className='navs' >shop</Link>

                <Link to="/about" style={{ textDecoration: 'none' }} className='navs' className='active'>about</Link>

                <Link to="/contact" style={{ textDecoration: 'none' }} className='navs'>contact</Link>

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
