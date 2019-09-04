import React from 'react'
import logo from '../assets/img/logo-white.png';
const Header = () =>
<header>
    <div className="header-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-3 col-sm-12">
                    <div className="logo">
                        <a href="index.html"><img src={logo} alt="Paty Bradley Hairstyles Logo" /></a>
                    </div>
                </div>
                <div className="col-md-9 d-none d-md-block">
                    <div className="main-menu">
                        <nav className="nav-menu">
                            <ul id="nav_menu">
                                <li className="active"><a data-hover="home" href="#home"><span>Home</span></a></li>
                                <li><a data-hover="about" href="#about"><span>About</span></a></li>
                                <li><a data-hover="portfolio" href="#portfolio"><span>Portfolio</span></a></li>
                                <li><a data-hover="contact" href="#contact"><span>Contact</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-sm-12 d-block d-md-none">
                    <div className="responsive-menu-wrap"></div>
                </div>
            </div>
        </div>
    </div>
</header>;

export default Header;
