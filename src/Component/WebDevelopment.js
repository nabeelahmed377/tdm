import React from 'react'
import image from "../images/banner.jpg"
import line from "../images/vertical-line.png"

function WebDevelopment() {
    return (
        <>
            <section className=" development-section">
                <div className="container" >

                    <div className="row">
                        <div className="col-11 col-lg-6 col-xxl-6">
                            <img className="webdevelopment-image" src={image} />
                        </div>

                        <div className="col-11 col-lg-6 col-xxl-6">
                            <h2 className="sub-title-websec"><span className="web-span">SHOWCASING</span> WHAT YOU GOT</h2>
                            <h2 className=" title-websec">A Web Design Agency That Makes Change Happen.</h2>
                            <p className="web-para">Perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ untur magni dolores eos qui ratione voluptatem the breakpoint for tablet devices.</p>
                            <div className="row">
                                <div className="col-1 col-lg-1 col-md-1">
                                    <img className="web-line" src={line} />
                                </div>
                                <div className="col-11 col-lg-11 col-md-11">
                                    <p className="web-para">Our award-winning web design agency can help you stand out in the digital universe. Because why settle for anything less? With a team of expert site builders, writing gurus, and visionary designers, we help prospective brands in streaming through a frictionless environment. Technology has the power to do good, and so does your brand!</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




        </>
    )
}

export default WebDevelopment
