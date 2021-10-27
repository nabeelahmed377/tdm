import React, { useState } from 'react'
// import img from "../images/portfolio-img.png"
import portfolioapi from "../Apis/PortfolioAPI"
import "./Port.css"




function Portfolio() {
    const [portImg, setPortImg] = useState(portfolioapi)
    return (
        <>
            <section>
                <div className="container">
                    <h1 className="port-title">Portfolio</h1>
                    <p className="port-para">Throughout our experience and with expertise we have assisted different brands of UAE. Team GoUp have supported businesses in understanding their true potential via offering effective eCommerce strategies and web services. Our portfolio series include diverse range of digital services.</p>
                </div>




                <div className="row">
                    {
                        portImg.map((curElem) => {
                            return <div className="col-lg-4 col-md-4">
                                <figure class="snip1104"><img src={curElem.image} alt="sample35" />
                                    <figcaption>
                                        <h2>{curElem.title} <span> {curElem.subtitle}</span></h2>
                                    </figcaption>
                                    {/* <a href="#"></a> */}
                                </figure>
                            </div>
                        })
                    }

                </div>
            </section>



        </>
    )
}

export default Portfolio
