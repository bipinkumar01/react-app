import React from 'react';
import single_img_twel from '../front/assets/images/single-img-twel.jpg';
import single_img_two from '../front/assets/images/single-img-two.png';
import slide1 from '../front/assets/images/slides/home-banner-01.jpg';
import slide2 from '../front/assets/images/slides/home-banner-02.jpg';
import Carousel from 'react-bootstrap/Carousel'

function Home() {
    return (
        <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="site-main">
            <section className="pt-40 pb-40 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="pt-20 res-991-pt-0">
                           <div className="section-title clearfix">
                                    <div className="title-header">
                                        <h5>OUR PROMISE</h5>
                                        <h2 className="title">We’re setting International standards in vaccination for Children and Adults</h2>
                                    </div>
                                </div>
                                <div className="mb-30 clearfix">
                                    <p>We bring vaccination with trust, transparency and hygiene using cutting edge technology "<b className="ttm-textcolor-skincolor"><em>At Your Doorstep</em></b>".</p>
                                    <p>With this service, Consult with out doctors online and get a prescription for the vacines you need. Our qualified staff, Trained specifically for vaccinations, will visit you at your convenience, with care, safety and hygiene of your home. Worried about emergencies, worry no further, we send along an EMT and ambulance to handle any emergencies.</p>
                                    <p>Whats more, avail discounts on vaccines!</p>
                                    <p className="ttm-textcolor-skincolor"><b><em>We use WHO Approved Equipment To Maintain Cold Chain.</em></b></p>
                                </div>
                                <h5>For your safety:</h5>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="featured-icon-box left-icon icon-box-heading-only icon-align-top style6">
                                            <div className="featured-icon">
                                                <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md"> 
                                                    <i className="flaticon flaticon-dentist-2"></i> 
                                                </div>
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h5>Cover Nose & Mouth When Sneezing</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="featured-icon-box left-icon icon-box-heading-only icon-align-top style6">
                                            <div className="featured-icon ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md"> <i className="flaticon flaticon-care"></i> </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h5>Avoid handshake & keep washing</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="ttm_single_image-wrapper text-right"> 
                                <img className="img-fluid" src={single_img_twel} alt="" /> 
                            </div>
                                <div className="about-overlay-shape">
                                    <div className="row">
                                        <div className="col-lg-2 col-sm-3"></div>
                                        <div className="col-lg-10 col-sm-6">
                                            <div className="about-content ttm-col-bgcolor-yes ttm-bg ttm-bgcolor-darkgrey mt_50 pl-35 pb-10 pt-15 ttm-textcolor-white">
                                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                                <div className="layer-content">
                                                    <h5 className="font-weight-normal mb-0">We <span className="ttm-textcolor-skincolor"> &nbsp;<i className="fa fa-heart-o"></i>&nbsp; </span> To Care our <span className="ttm-textcolor-skincolor"> Patients !</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ttm-row broken-section bg-img6 bg-layer bg-layer-equal-height clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5"></div>
                            <div className="col-lg-7">
                                <div className="ttm-fid-border ttm-col-bgcolor-yes ttm-bg ttm-right-span ttm-bgcolor-skincolor spacing-1">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                    <div className="layer-content">
                                        <div className="section-title clearfix">
                                            <div className="title-header">
                                                <h5>ABOUT Us</h5>
                                                <h3 className="title">MyVacc is the future of Vaccination@home.</h3>
                                            </div>
                                        </div>
                                        <div className="pt-10">
                                            <div className="ttm-service-description ttm-textcolor-darkgrey">
                                                <div className="mb-35">
                                                    <p>We help nurture your immunity with timely Vaccination delivered in a responsible manner. We are dedicated to holistic well-being of both children and adults.</p>
                                                    <p>We know that time is of importance and hence we will be sending our proficient staff of doctors, nurses and EMTs along with ambulances. The staff will come with all necessary safety protocol for vehicles as well as equipment.</p>
                                                    <p>Our services are available for all sections of our society. Our Motto is to deliver affordable vaccinations at home with international standards of health care services.</p>
                                                </div>
                                                <h4>Vaccination services are available for all age groups :</h4>
                                                <div className="row mx-4 my-4">
                                                    <div className="col-sm-6">
                                                        <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor ttm-textcolor-darkgrey">
                                                            <li><i className="fa fa-arrow-circle-right" ></i><span className="ttm-list-li-content">Infants (0-4 years)</span></li>
                                                            <li><i className="fa fa-arrow-circle-right" ></i><span className="ttm-list-li-content">Children (5-9 years)</span></li>
                                                            <li><i className="fa fa-arrow-circle-right" ></i><span className="ttm-list-li-content">Adolescents (10-17 years)</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor ttm-textcolor-darkgrey">
                                                            <li><i className="fa fa-arrow-circle-right" ></i><span className="ttm-list-li-content">Adults (18 +)</span></li>
                                                            <li><i className="fa fa-arrow-circle-right" ></i><span className="ttm-list-li-content">Elderly (60 +)</span></li>
                                                            <li><i className="fa fa-arrow-circle-right" ></i><span className="ttm-list-li-content">Pregnant women</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="ttm-row services-section ttm-bgcolor-darkgrey bg-img5 ttm-bg ttm-bgimage-yes ttm-bgcolor-darkgrey clearfix">
                    <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-12">
                                <div className="section-title with-desc clearfix">
                                    <div className="title-header">
                                        <h5>OUR SERVICES</h5>
                                        <h2 className="title">How it works</h2>
                                    </div>
                                    <div className="title-desc">Vaccine@Home has been providing its patients with the full medical care, safety and hygiene vaccination services &quot;At Your Doorstep&quot;.</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12"> <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-white mb-30 mt-45 res-991-mt-0 float-right" href="services.html">MORE SERVICES</a> </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mt-10">
                                    <div className="row no-gutters">
                                        <div className="col-md-3 col-sm-6">
                                            <div className="featured-icon-box style5">
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h6 >STEP 1</h6>
                                                        <h5>Book an online consultation</h5>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>Fill in your details and book a consultation with our trained doctors / paediatricians at a time of your convenience</p>
                                                        <br /> <br /> <br />
                                                    </div>
                                                </div>
                                                <div className="featured-icon">
                                                    <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg"> <i className="fa fa-calendar-check-o"></i> </div>
                                                </div>
                                                <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline mb-20" href="services.html">VIEW MORE</a>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="featured-icon-box style5">
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h6 >STEP 2</h6>
                                                        <h5>Talk to our specialist doctor</h5>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>Talk with a specialist doctor on phone or video. Our team will upload the doctors prescription for the vaccine to your profile.<br /></p>
                                                    </div>
                                                    <br /> <br />
                                                </div>
                                                <div className="featured-icon">
                                                    <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg"> <i className=" flaticon-doctor-1"></i> </div>
                                                </div>
                                                <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline mb-20" href="services.html">VIEW MORE</a>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="featured-icon-box style5">
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h6 >STEP 3</h6>
                                                        <h5>Choose vaccination date and time</h5>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>Choose the brand of vaccine you want. Now choose your vaccination date and time as per your convenience. Make the payment and check out.</p>
                                                        <br /> <br />
                                                    </div>
                                                </div>
                                                <div className="featured-icon">
                                                    <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg"> <i className="flaticon-ambulance"></i> </div>
                                                </div>
                                                <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline mb-20" href="services.html">VIEW MORE</a>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="featured-icon-box style5">
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h6 >STEP 4</h6>
                                                        <h5>Vaccination at your home</h5>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>One day before you will get a call for reconfirming the appointment Our qualified doctors/nurses, trained specifically for vaccinations, will visit at your home for hassle free vaccination.</p>
                                                    </div>
                                                </div>
                                                <div className="featured-icon">
                                                    <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg"> <i className="fa fa-thumbs-o-up"></i> </div>
                                                </div>
                                                <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline mb-20" href="services.html">VIEW MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mt-30 text-center res-991-mt-30 res-991-mb-0"> <strong>Don’t hesitate, contact us for better help and services. <span className="ttm-textcolor-white"><u><a href="services.html">Let’s get started</a></u></span></strong> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="ttm-row team-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-md-10">
                                <div className="section-title with-desc clearfix">
                                    <div className="title-header">
                                        <h5>MEET OUR TEAM</h5>
                                        <h2 className="title">Our Dedicated Doctors Team</h2>
                                    </div>
                                    <div className="title-desc">Our team of dedicated doctors, nurses and EMTs have a very wide experience. They have all been specifically trained to give vaccines and are available to answer all of your questions around vaccines. We are very proud of the achievement s of our staff.</div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2">

                            </div>
                        </div>
                        <div className="row">
                            <div className="wrap-team team-slide owl-carousel" data-item="4" data-nav="true" data-dots="false" data-auto="false">
                                <div className="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
                                    <div className="featured-thumbnail"> <img className="img-fluid" src="images/team-member/team-img01.jpg" alt="image" /> </div>
                                        <div className="ttm-box-view-overlay">
                                            <div className="featured-iconbox ttm-media-link"> <a href="team-details.html"><i className="ti ti-plus"></i></a> </div>
                                        </div>
                                        <div className="featured-content featured-content-team">
                                            <div className="featured-title">
                                                <h5><a href="team-details.html">Dr. Amit Agarwal</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
                                        <div className="featured-thumbnail"> <img className="img-fluid" src="images/team-member/team-img02.jpg" alt="image" /> </div>
                                            <div className="ttm-box-view-overlay">
                                                <div className="featured-iconbox ttm-media-link"> <a href="team-details.html"><i className="ti ti-plus"></i></a> </div>
                                            </div>
                                            <div className="featured-content featured-content-team">
                                                <div className="featured-title">
                                                    <h5><a href="team-details.html">Dr. Sveta Agarwal</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="ttm-row cta-section bg-img1 clearfix">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="pt-100 row-title res-991-pt-50 res-991-pb-20">
                                            <div className="section-title with-desc clearfix">
                                                <div className="title-header">
                                                    <h5>Specialized health needs.</h5>
                                                    <h3 className="title">No more missing work days for Vaccinations.<br />No more exposure of your child to infections in waiting areas.</h3>
                                                </div>
                                            </div>
                                            <h4>To get your vaccinations, call: <a href="tel:+91 6362187851" target="_blank" className="ttm-textcolor-skincolor">+91 6362187851</a> </h4>
                                            <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-black mr-15 mb-20" href="book-appointment.html">BOOK AN APPOINTMENT!</a>
                                            <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor mb-20" href="services.html">HOW IT WORKS</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="ttm_single_image-wrapper">
                                            <img className="img-fluid" src={single_img_two} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
    );
}

export default Home;