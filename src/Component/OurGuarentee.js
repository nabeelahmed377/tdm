import React from 'react'
import image from "../images/men.png"
import line from "../images/vertical-line.png"

function OurGuarentee() {
    return (
        <>
            <section className=" guarentee-section">
                <div className="container" >

                    <div className="row">

                        <div className="col-11 col-lg-6 col-xxl-6">
                            <h2 className="sub-title-websec" ><span className="web-span" style={{backgroundColor:"#854afc"}}>ECOMMERCE SOLUTIONS</span> FOR YOUR</h2>
                            <h2 className=" title-websec" style={{color:"#854afc"}}>A Web Design Agency That Makes Change Happen.</h2>
                            <p className="web-para" style={{color:"#854afc",}}>Our customized software development can work as influential equipment for your business. We appreciate your market needs and create appropriate applications for your company</p>
                            <div className="row">
                                <div className="col-1 col-lg-1 col-md-1">
                                    <img className="grant-line" src={line} />
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
