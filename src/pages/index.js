import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../components/layout.js";

import logo from '../assets/img/logo.png';
import paty from '../assets/img/paty.jpg';

const Home = () =>
    <Layout>
        <Helmet>
                <title>PatyBradley</title>
                <meta name="description" content={"Amazing hair styles"} />
        </Helmet>

        <section id="home" class="slider-area parallax" data-speed="3" data-bg-image="assets/img/bg/slider-bg.jpg">
            <div class="container">
                <div class="slider-content row">
                    <div class="col-6">
                        <h2 class="txtanim1"><span>Paty Bradley</span></h2>
                        <h4 class="txtanim1 delay1">
                            <span>Hairtstylist</span>
                        </h4>
                    </div>
                    <div class="col-6 main-img-container">
                        <div id="main-img" style={{ backgroundImage: `url('${paty}')`}}></div>
                    </div>
                </div>
            </div>
            <div class="white_svg svg_white">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
                </svg>
            </div>
            <div class="txtanim1 next-section">
                <span><a href="#about">about us <strong><i class="fa fa-question-circle"></i></strong></a></span>
            </div>
        </section>


    <section class="about-area" id="about">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-3 paty-thumb" style={{ backgroundImage: `url('${paty}')`}}>
                    <div class="abt-left-thumb" >
                        &nbsp;
                    </div>
                </div>
                <div class="col-md-7 offset-md-1">
                    <div class="abt-content">
                        <div class="section-title">
                            <h2 class="txt2_is_show">About Me</h2>
                        </div>
                        <p class="txt1-wrap"><span class="txt1">For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting there eating their breakfasts. I ought to just try that witht my boss; I'd get kicked out on the spot.</span></p>
                        <p class="txt1-wrap"><span class="txt1">But who knows, maybe that would be the best thing for me. He'd fall right off his desk! And it's a funny sort of business to be sitting up there at your desk,</span> <span class="txt1">talking down at your subordinates. I ought to just try that witht my boss; I'd get kicked out on the spot. But who knows, maybe that would be the best thing for me. He'd fall right off his desk! And it's a funny sort of business to be sitting up there at your desk, talking down at your subordinates.</span></p>
                        <div class="social-link">
                            <h5>Find me in social media :</h5>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="fortfolio-area bg-gray pt--100 pb--200" id="portfolio">
        <div class="container">
            <div class="section-title">
                <h2 class="txt2_is_show">Our Portfolio</h2>
            </div>
            <div class="fortfolio-filter">
                <button class="active" data-filter="*">All</button>
                <button data-filter=".web">Web Design</button>
                <button data-filter=".design">Graphics Design</button>
                <button data-filter=".marketing">Marketing</button>
            </div>
            <div class="portfolio-masonary row" id="container">
                <div class="prt-grid marketing design col-md-4 col-sm-6">
                    <div class="prt-item">
                        <a class="expand-video" href="https://www.youtube.com/watch?v=eDiA1p5DlLg">
                            <span class="flaticon-play-button"></span>
                            <img src="assets/img/portfolio/img1.jpg"  />
                        </a>
                    </div>
                </div>
                <div class="prt-grid marketing web col-md-4 col-sm-6">
                    <div class="prt-item">
                        <a class="expand-img" href="assets/img/portfolio/img2.jpg"><img src="assets/img/portfolio/img2.jpg"  /></a>
                    </div>
                </div>
                <div class="prt-grid col-md-4 col-sm-6">
                    <div class="prt-item">
                        <a class="expand-img" href="assets/img/portfolio/img3.jpg"><img src="assets/img/portfolio/img3.jpg"  /></a>
                    </div>
                </div>
                <div class="prt-grid design marketing col-md-4 col-sm-6">
                    <div class="prt-item">
                        <a class="expand-img" href="assets/img/portfolio/img4.jpg"><img src="assets/img/portfolio/img4.jpg"  /></a>
                    </div>
                </div>
                <div class="prt-grid web design col-md-4 col-sm-6">
                    <div class="prt-item">
                        <a class="expand-img" href="assets/img/portfolio/img5.jpg"><img src="assets/img/portfolio/img5.jpg"  /></a>
                    </div>
                </div>
                <div class="prt-grid design marketing col-md-4 col-sm-6">
                    <div class="prt-item">
                        <a class="expand-img" href="assets/img/portfolio/img6.jpg"><img src="assets/img/portfolio/img6.jpg"  /></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="white_svg svg_white">
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
            </svg>
        </div>
    </section>



    <section class="contact-area ptb--100" id="contact">
        <div class="container">
            <div class="section-title">
                <h2 class="txt2_is_show">Get In Tuch</h2>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <div class="cnt-left">
                        <ul>
                            <li>patybradley<code>@</code>gmail.com</li>
                            <li>+256-4516-556, +(257) 56812749</li>
                        </ul>
                        <div class="social-link">
                            <h5>Share :</h5>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="contact-form">
                        <div class="screen-reader-response"></div>
                        <form action="mail.php" id="cf">
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" id="name" name="name" placeholder="Name Here*" />
                                </div>
                                <div class="col-md-6">
                                    <input type="email" id="email" name="email" placeholder="Email Here*" />
                                </div>
                            </div>
                            <textarea name="msg" id="msg" placeholder="Message Here*"></textarea>
                            <div class="form-submit">
                                <button type="submit" name="submit" id="cnt_submit">Send Message <i class="fa fa-long-arrow-right"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <footer>
        <div class="footer-area bg-gray">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 col-sm-4">
                        <div class="flogo">
                            <a href="index.html"><img src={logo} alt="Paty Bradyley Hairstyles Logo" /></a>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-8">
                        <div class="copyright">
                            <p>@Copyright By <span>PatyBradley LLC</span></p>
                        </div>
                    </div>
                </div>
                <div class="go-to-top">
                    <a href="#top"><i class="fa fa-angle-up"></i></a>
                </div>
            </div>
        </div>
    </footer>



</Layout>;

export default Home;