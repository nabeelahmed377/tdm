import React from 'react'
import image from "../images/banner.jpg"
import line from "../images/vertical-line.png"

function OurGuarentee() {
    return (
        <>
            <section className=" guarentee-section">
                <div className="container" >

                    <div className="row">

                        <div className="col-11 col-lg-6 col-xxl-6">
                            <h2 className="sub-title-websec"><span className="web-span">OUR GUARENTEE'S</span> FOR YOUR SATISFICATION</h2>
                            <h2 className=" title-websec">A Web Design Agency That Makes Change Happen.</h2>
                            <p className="web-para">Perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ untur magni dolores eos qui ratione voluptatem the breakpoint for tablet devices.</p>
                            <div className="row">
                                <div className="col-1 col-lg-1 col-md-1">
                                    <img className="web-line" src={line} />
                                </div>
                                <div className="col-11 col-lg-11 col-md-11">
                                    <ul className="gaurentee-list">
                                        <li>Branding and Communication</li>
                                        <li>Logo Design Service</li>
                                        <li>Web Development</li>
                                        <li>ECommerce Development</li>
                                        <li>Corporate Stalls</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-11 col-lg-6 col-xxl-6">
                            <img className="webdevelopment-image" src={image} />
                        </div>

                    </div>



                </div>
            </section>

        </>
    )
}

export default OurGuarentee
