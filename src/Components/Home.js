import React from 'react';
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

const Home = (props) => {

    return (

        <div>
            {/* Header */}
            <Navbar color="dark" dark expand="md"  >
                <Nav className='container'>
                    <NavItem >
                        <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/shop" style={{ textDecoration: 'none' }}>Shop</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
                    </NavItem>
                </Nav>
            </Navbar>


            {/* Footer */}
            <div color="dark" dark expand="md" className='footer'>
                <a href='https://www.facebook.com/'>  <FontAwesomeIcon icon={faFacebookSquare} color="#1777F2" /> </a>
                <a href='https://www.twitter.com/'>  <FontAwesomeIcon icon={faTwitter} color="#33a7f4" /> </a>
                <a href='https://www.instagram.com/'>   <FontAwesomeIcon icon={faInstagram} color="#CA5191" /> </a>
                <a href='https://www.youtube.com/'>   <FontAwesomeIcon icon={faYoutube} color="#e5162f" /> </a>
            </div>
        </div>
    );
}

export default Home;