import React from 'react'
import "../Component/Footer.css"
import logo from "../images/logo.png"


function Footer() {
    return (
        <>
            <section id="footer">
                <div class="container">
                    <div class="row text-center text-xs-center text-sm-left text-md-left">
                        <h1 className="footer-text">“Everything You Can Imagine Is Real”</h1>
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <img className="footer-logo" src={logo} />
                            <p className="footer-para">
                                One of the main benefits of using Lorem Ipsum is that it can be easily generated, and it takes the pressure off designers to create meaningful text. Instead, they can focus on crafting the best website data.
                            </p>

                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <h2 className="footer-heading">What Do We Do</h2>
                            <ul className="list-unstyled quick-links">

                                <li>UI/UX Designing</li>
                                <li>Branding</li>
                                <li>Graphics Designing</li>
                                <li>Web Devlopment</li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <h2 className="footer-heading">Contact Us</h2>
                            <ul class="list-unstyled quick-links">
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-phone"></i>Home</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-map-marker-alt"></i>About</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-clock"></i>FAQ</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-envelope"></i>Get Started</a></li>
                                <li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i class="fa fa-angle-double-right"></i>Imprint</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul class="list-unstyled list-inline social text-center">
                                <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-facebook"></i></a></li>
                                <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-instagram"></i></a></li>
                                <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-google-plus"></i></a></li>
                                <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank"><i class="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
                            <p class="h6">© All right Reversed.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
