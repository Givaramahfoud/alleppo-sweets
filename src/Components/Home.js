import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTwitter,
    faFacebookSquare,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Home = (props) => {
    const translation = (e) => {
        e.preventDefault()
        const home = document.getElementById('home')
        if (home.id === 'home') {
            const translated = home.innerHTML = 'المنزل'
            sessionStorage.setItem('home', translated)
        }
    }

    return (

        <div>
            {/* Header */}
            <div className='headers'>

                <Link to="/" style={{ textDecoration: 'none' }} className='navs' className='active' id='home'>Home</Link>

                <Link to="/shop" style={{ textDecoration: 'none' }} className='navs' >shop</Link>

                <Link to="/about" style={{ textDecoration: 'none' }} className='navs'>about</Link>

                <Link to="/contact" style={{ textDecoration: 'none' }} className='navs'>contact</Link>

                <div className='langs'>
                    <a href="#eng" style={{ textDecoration: 'none' }} className='lang navs' >EN</a>
                    <a href="#ar" style={{ textDecoration: 'none' }} className='lang navs' onClick={translation}> AR</a>
                </div>
            </div>

            <h1 className='homeActive'>Home</h1>

            {/* Footer */}
            <div color="dark" expand="md" className='footer'>
                <a href='https://www.facebook.com/'>  <FontAwesomeIcon icon={faFacebookSquare} color="#1777F2" /> </a>
                <a href='https://www.twitter.com/'>  <FontAwesomeIcon icon={faTwitter} color="#33a7f4" /> </a>
                <a href='https://www.instagram.com/'>   <FontAwesomeIcon icon={faInstagram} color="#CA5191" /> </a>
                <a href='https://www.youtube.com/'>   <FontAwesomeIcon icon={faYoutube} color="#e5162f" /> </a>
            </div>
        </div>
    );
}

export default Home;






// const language = {
//     ar: {
//         home: 'المنزل'
//     },
//     en: {
//         home: 'Home'
//     }
// }

// if (window.location.hash) {
//     if (window.location.hash === '#ar') {
//         const home = document.getElementById('home')
//         home.textContent = language.ar.home
//     }
// }
// const changeLanguage = (e) => {
//     const dataReload = document.querySelectorAll('[data-reload]')
//     dataReload.forEach(() => window.location.reload(true))
//     e.preventDefault()
// }