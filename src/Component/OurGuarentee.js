import React from 'react'
import image from "../images/design-banner.jpg"
import line from "../images/vertical-line.png"

function OurGuarentee() {
    return (
        <>
            <section className=" guarentee-section">
                <div className="container" >

                    <div className="row">

                        <div className="col-11 col-lg-6 col-xxl-6">
                            <p className="sub-title-websec" ><span className="" style={{ fontSize:"16px", color: "#818391", fontFamily: 'Oswald,sansSerif' }}>WELCOME TO THE DESIGN MART</span> </p>
                            <h2 className=" title-websec" style={{ fontSize: "40px", fontWeight: "400", fontFamily: 'Oswald,sansSerif', color: "black" }}>WE ARE THE BEST WEBSITE AGENCY IN THE USA</h2>
                            <p className="web-para" style={{ fontSize: "20px", fontWeight: "400", fontFamily: 'Oswald,sansSerif', color: "#818391" }}>We are committed to providing our customers with exceptional service while offering our employees the best training. Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s</p>
                            <div className="row">
                                <div className="col-1 col-lg-1 col-md-1">
                                    <img className="grant-line" src={line} />
                                </div>
                                <div className="col-11 col-lg-11 col-md-11">
                                    <ul className="gaurentee-list">
                                        <li>Work On Time</li>
                                        <li>Best Services </li>
                                        <li>100% Ammedments </li>
                                        <li>Error Less Development</li>
                                        <li>Best Designs</li>
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
