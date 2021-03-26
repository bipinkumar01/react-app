import React from 'react';
import logo from  '../front/assets/images/logo-img.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appointment from './Appointment';
import Home from './Home';
import Services from './Services';
import Faqs from './Faqs';
import Contact from './Contact';
import Footer from './Footer';

function Header() {
    return (
        <Router>
            <header id="masthead" className="header ttm-header-style-classNameicinfo">
                <div className="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
                    <div className="container">
                        <div className="ttm-topbar-content">
                            <ul className="top-contact text-left">
                                <li><i className="themifyicon ti-location-pin"></i>Vaccine@Home</li>
                                <li><i className="fa fa-whatsapp"></i><a href="https://wa.me/916362187851?text=I'm%20interested%20to%20book%20an%20appointment%20for%20vaccine">WhatsApp</a></li>
                            </ul>
                            <div className="topbar-right text-right">
                                <div className="ttm-social-links-wrapper list-inline">
                                    <ul className="social-icons">
                                        <li><a href="/"><i className="fa fa-facebook fa-lg"></i></a> </li>
                                        <li><a href="/"><i className="fa fa-twitter fa-lg"></i></a> </li>
                                        <li><a href="/"><i className="fa fa-instagram fa-lg"></i></a> </li>
                                    </ul>
                                </div>
                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor" href="tel:+91 6362187851"> Call : +91 6362187851</a>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="ttm-header-wrap">
                <div id="ttm-stickable-header-w" className="ttm-stickable-header-w ttm-bgcolor-white clearfix">
                    <div id="site-header-menu" className="site-header-menu">
                        <div className="site-header-menu-inner ttm-stickable-header">
                            <div className="container">
                                <div className="site-branding"> 
                                    <a className="home-link" href="index-2.html" title="Vaccine@Home" rel="home"> 
                                        <img id="logo-img" className="img-center" src={logo} alt="logo-img" /> 
                                    </a> 
                                </div>

                                <div id="site-navigation" className="site-navigation">
                                    <div className="ttm-header-icons ">
                                        <span className="ttm-header-icon ttm-header-cart-link"> <a href="/"><i className="fa fa-shopping-cart"></i> <span className="number-cart">0</span> </a> </span>
                                        <div className="ttm-header-icon ttm-header-search-link">
                                            <a href="/"><i className="ti ti-search"></i></a>
                                            <div className="ttm-search-overlay">
                                                <div className="ttm-search-outer">
                                                    <div className="ttm-form-title">Hi, How Can We Help You?</div>
                                                    <form method="get" className="ttm-site-searchform" action="#">
                                                        <div className="w-search-form-h">
                                                            <div className="w-search-form-row">
                                                                <div className="w-search-input"> 
                                                                    <input type="search" className="field searchform-s" name="s" placeholder="Type Word Then Enter..." /> 
                                                                    <button type="submit"> <i className="ti ti-search"></i> </button> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ttm-menu-toggle"> <input type="checkbox" id="menu-toggle-form" /> <label for="menu-toggle-form" className="ttm-menu-toggle-block"> <span className="toggle-block toggle-blocks-1"></span> <span className="toggle-block toggle-blocks-2"></span> <span className="toggle-block toggle-blocks-3"></span> </label> </div>
                                        <nav id="menu" className="menu">
                                            <ul className="dropdown">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/appointment">Appointment</Link></li>
                                                <li><Link to="/services">Services</Link></li>
                                                <li><Link to="/faqs">FAQs</Link></li>
                                                <li><Link to="/contact-us">Contact Us</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/appointment"><Appointment /></Route>
                <Route exact path="/services"><Services /></Route>
                <Route exact path="/faqs"><Faqs /></Route>
                <Route exact path="/contact-us"><Contact /></Route>
            </Switch>
            <Footer/>
        </Router>   
    );
}

export default Header;
