import React from 'react'
import Slider from "react-slick";
import node from "../images/node.png"
import down from "../images/download.png"
// import d1 from "../images/d1.png"
import d2 from "../images/d2.png"
import d3 from "../images/d3.png"
import d4 from "../images/d4.png"

function TechnoSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className="techno-slider">
                <div className="container">
                    <h2 className="sub-title-websec" style={{ fontFamily: 'Oswald ,sans-serif', textAlign: "center", fontSize: "18px", marginTop: "50px" }} >OUR PORTFOLIO</h2>
                    < h2 className=" title-websec" style={{ color: "#ffc000", fontFamily: 'Oswald ,sans-serif', textAlign: "center", fontSize: "45px", marginBottom: "30px" }}><span style={{ fontFamily: 'Oswald ,sans-serif', fontWeight: "300" }}> LATEST</span> WORKS</h2>
                    <hr class="section-dash-yellow d-flex justify-content-center mx-auto" style={{ marginTop: "-20px" }}></hr>


                    <Slider {...settings}>
                        <div>
                            <img className="techno-img" src={down} />
                        </div>
                        <div>
                            <img className="techno-img" src={d2} />
                        </div>
                        <div>
                            <img className="techno-img" src={d2} />
                        </div>
                        <div>
                            <img className="techno-img" src={d3} />
                        </div>
                        <div>
                            <img className="techno-img" src={d4} />
                        </div>
                        <div>
                            <img className="techno-img" src={down} />
                        </div>
                        <div>
                            <img className="techno-img" src={down} />
                        </div>
                        <div>
                            <img className="techno-img" src={down} />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default TechnoSlider
