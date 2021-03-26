import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Appointment from './Appointment';
import Home from './Home';
import Services from './Services';
import Faqs from './Faqs';
import Contact from './Contact';

function Footer() {
    return (
        <footer className="footer widget-footer clearfix">
            <div className="first-footer ttm-bgcolor-skincolor">
                <div className="container">
                    <div className="row">
                        <div className="widget-area col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <aside className="widget widget-text">
                                <div className="featured-icon-box iconalign-before-heading">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-sm ttm-icon_element-style-square"> <i className="fa fa-phone"></i> </div>
                                    </div>
                                    <div className="featured-title">
                                        <h5><a href="tel:+91 6362187851" target="_blank">+91 6362187851</a></h5>
                                        <h4>Have a question? call us now</h4>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="widget-area col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <aside className="widget widget-text">
                                <div className="featured-icon-box iconalign-before-heading">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-sm ttm-icon_element-style-square"> <i className="fa fa-envelope-o"></i> </div>
                                    </div>
                                    <div className="featured-title">
                                        <h5><a href="mailto:care@myvacc.in" target="_blank">care@myvacc.in</a></h5>
                                        <h4>Need support? Drop us an email</h4>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="widget-area col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <aside className="widget widget-text">
                                <div className="featured-icon-box iconalign-before-heading">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-sm ttm-icon_element-style-square"> <i className="fa fa-whatsapp"></i> </div>
                                    </div>
                                    <div className="featured-title">
                                        <h5><a href="https://wa.me/916362187851?text=I'm%20interested%20to%20book%20an%20appointment%20for%20vaccine" target="_blank">WhatsApp</a></h5>
                                        <h4>Chat with us</h4>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-footer ttm-textcolor-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                            <div className="widget widget_text clearfix">
                                <h3 className="widget-title">About Vaccine@Home</h3>
                                <div className="textwidget widget-text">
                                    <p>We help to care and nurture the child's immunity with timely required Vaccination in responsible manner. We are dedicated to holistic well-being of our children and adults. We focus on all economic strata with discounts on the vaccine.</p>
                                    <div className="social-icons social-hover">
                                        <ul className="list-inline">
                                            <li className="social-facebook"><a className="tooltip-top" target="_blank" href="#" data-tooltip="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li className="social-twitter"><a className="tooltip-top" target="_blank" href="#" data-tooltip="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li className="social-gplus"><a className=" tooltip-top" target="_blank" href="#" data-tooltip="Google+"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                            <div className="widget widget_nav_menu clearfix">
                                <h3 className="widget-title">Quick Links</h3>
                                <ul id="menu-footer-quick-links">
                                    <li><a href="#">About our Clinic</a></li>
                                    <li><a href="faq.html">FAQs</a></li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 widget-area">
                            <div className="widget widget_nav_menu menu-footer-services-menu clearfix">
                                <h3 className="widget-title">Our Services</h3>
                                <ul id="menu-footer-services-menu" className="menu">
                                    <li><a href="#">Corporate vaccination</a></li>
                                    <li><a href="#">Vaccination for children</a></li>
                                    <li><a href="#">Community vaccination</a></li>
                                    <li><a href="#">Vaccination for adults</a></li>
                                    <li><a href="#">School Vaccination</a></li>
                                    <li><a href="#">Vaccination for Elderly</a></li>
                                    <li><a href="#">Vaccination for pregnant women</a></li>
                                </ul>
                            </div>
                            <div className="widget widget-text clearfix">
                                <h3 className="widget-title">Newsletter</h3>
                                <form id="subscribe-form" method="post" action="#" data-mailchimp="true">
                                    <div className="ttm_subscribe_form">
                                        <input type="email" name="EMAIL" placeholder="Enter Your Email" required="" />
                                        <button className="btn" type="submit"> <i className="fa fa-envelope-o"></i> </button>
                                    </div>
                                    <div className="subscribe-response"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer-text ttm-textcolor-white">
                <div className="container">
                    <div className="row copyright">
                        <div className="col-md-12"> <span>Copyright © 2019 GapBridage. All Rights Reserved <a href="#">MyVacc</a></span> </div>
                        <div className="col-md-12">
                            <ul id="menu-footer-menu" className="footer-nav-menu">
                                {/* <li><a href="#">About Us</a></li> */}
                                <li><Link to="/">Home</Link></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/appointment"><Appointment /></Route>
            <Route exact path="/services"><Services /></Route>
            <Route exact path="/faqs"><Faqs /></Route>
            <Route exact path="/contact-us"><Contact /></Route>
        </footer>
        
    );
}

export default Footer;