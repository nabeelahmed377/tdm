import React from 'react'
import Slider from "react-slick";
import node from "../images/node.png"
import down from "../images/download.png"

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
                    <h4 className="sub_title" style={{textAlign:"center"}}>OUR TECHNALOGIES</h4>
                    <h4 className="sec_title" style={{textAlign:"center",marginBottom:"90px"}}>WE TRUST WITH THEM</h4>
                  

                    <Slider {...settings}>
                        <div>
                            <img className="techno-img"  src={down} />
                        </div>
                        <div>
                            <img className="techno-img"  src={down} />
                        </div>
                        <div>
                            <img className="techno-img"  src={down} />
                        </div>
                        <div>
                            <img className="techno-img"  src={down} />
                        </div>
                        <div>
                            <img className="techno-img"  src={down} />
                        </div>
                        <div>
                            <img className="techno-img"  src={down} />
                        </div>
                        <div>
                            <img className="techno-img"  src={down} />
                        </div>
                        <div>
                            <img className="techno-img"  src={down} />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default TechnoSlider
