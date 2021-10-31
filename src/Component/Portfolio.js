import React from 'react'
import "./Portfolio.css"
import image1 from "../images/portfolio-1.jpg"
import image2 from "../images/portfolio-2.jpg"
import image3 from "../images/portfolio-3.jpg"
import image4 from "../images/portfolio-4.jpg"

function Portfolio() {
    return (
        <>

            <div class=" container projects-container scrollimation in">

                <h2 className="sub-title-websec" style={{ fontFamily: 'Oswald ,sans-serif', textAlign: "center", fontSize: "18px", }} ><span className="web-span" style={{
                    backgroundColor: "#e62b4a", color: "white", fontFamily: 'Oswald ,sans-serif',
                }}>OUR</span>PORTFOLIO</h2>
                < h2 className=" title-websec" style={{ color: "black", fontFamily: 'Oswald ,sans-serif', textAlign: "center", fontSize: "58px" }}>WORK SHOWCASE</h2>
                {/* <p className="web-para" style={{ color: "black", textAlign: "center" }}>We are committed to providing our customers with exceptional service while
                    offering our employees the best training.</p> */}



                <div class="row">
                    <article class="col-md-4 col-sm-6 portfolio-item web-design apps psd">
                        <div class="portfolio-thumb in">
                            <a href="#" class="main-link">
                                <img class="img-responsive img-center" src={image1} alt="" />
                                <h2 class="project-title">WebDevelopment</h2>
                                <span class="overlay-mask"></span>
                            </a>
                            {/* <a class="enlarge cboxElement" href="#" title="Bills Project"><i class="fa fa-expand fa-fw"></i></a>
                            <a class="link" href="#"><i class="fa fa-eye fa-fw"></i></a> */}
                        </div>
                    </article>

                    <article class="col-md-4 col-sm-6 portfolio-item apps">
                        <div class="portfolio-thumb in">
                            <a href="#" class="main-link">
                                <img class="img-responsive img-center" src={image2} alt="" />
                                <h2 class="project-title">Logo Designing</h2>
                                <span class="overlay-mask"></span>
                            </a>
                            {/* <a class="enlarge cboxElement" href="#" title="Bills Project"><i class="fa fa-expand fa-fw"></i></a>
                            <a class="link" href="#"><i class="fa fa-eye fa-fw"></i></a> */}
                        </div>
                    </article>

                    <article class="col-md-4 col-sm-6 portfolio-item web-design psd">
                        <div class="portfolio-thumb in">
                            <a href="#" class="main-link">
                                <img class="img-responsive img-center" src={image3} alt="" />
                                <h2 class="project-title">Graphics Designing</h2>
                                <span class="overlay-mask"></span>
                            </a>
                            {/* <a class="enlarge cboxElement" href="#" title="Bills Project"><i class="fa fa-expand fa-fw"></i></a>
                            <a class="link" href="#"><i class="fa fa-eye fa-fw"></i></a> */}
                        </div>
                    </article>

                    <article class="col-md-4 col-sm-6 portfolio-item apps">
                        <div class="portfolio-thumb in">
                            <a href="#" class="main-link">
                                <img class="img-responsive img-center" src={image4} alt="" />
                                <h2 class="project-title">Mobile Application</h2>
                                <span class="overlay-mask"></span>
                            </a>
                            {/* <a class="enlarge cboxElement" href="#" title="Bills Project"><i class="fa fa-expand fa-fw"></i></a>
                            <a class="link" href="#"><i class="fa fa-eye fa-fw"></i></a> */}
                        </div>
                    </article>

                    <article class="col-md-4 col-sm-6 portfolio-item web-design psd">
                        <div class="portfolio-thumb in">
                            <a href="#" class="main-link">
                                <img class="img-responsive img-center" src={image1} alt="" />
                                <h2 class="project-title">2D/3D Animation</h2>
                                <span class="overlay-mask"></span>
                            </a>
                            {/* <a class="enlarge cboxElement" href="#" title="Scavenger Hunt"><i class="fa fa-expand fa-fw"></i></a>
                            <a class="link" href="#"><i class="fa fa-eye fa-fw"></i></a> */}
                        </div>
                    </article>

                    <article class="col-md-4 col-sm-6 portfolio-item web-design apps">
                        <div class="portfolio-thumb in">
                            <a href="#" class="main-link">
                                <img class="img-responsive img-center" src={image1} alt="" />
                                <h2 class="project-title">Video Editing</h2>
                                <span class="overlay-mask"></span>
                            </a>
                            {/* <a class="enlarge cboxElement" href="#" title="Sonor"><i class="fa fa-expand fa-fw"></i></a>
                            <a class="link" href="#"><i class="fa fa-eye fa-fw"></i></a> */}
                        </div>
                    </article>
                </div>
            </div>


        </>
    )
}

export default Portfolio
