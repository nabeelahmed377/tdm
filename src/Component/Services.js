import React, { useState } from 'react'
import serviceapi from "../Apis/ServicesAPI"
import icon from "../images/icon.png"
import webicon from "../images/webicon.png"
import brandingicon from "../images/brandingicon.png"
import grphicsicon from "../images/grphicsicon.png"


function Services() {
    const [service, setSevices] = useState(serviceapi)
    return (
        <>
            <section className="service-main-container">
                <div className="container service-container">

                    <div className="row">

                        <div className="col-11 col-lg-4 col-xxl-4 mt-4">
                            <h2 className="sub-heading-title">Our Main Design Services For Customers</h2>

                            <p className="sub-para-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,  bluctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <button className="btn btn-primary">More Us</button>
                        </div>

                        <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                            <div className="service-section-inside">
                                <img className="icon-class" src={icon} />
                                <h2 className="sub-heading">UI / UX Design</h2>
                                <p className="main-hero-para">Quisque placerat vitae lacus ut data scele risque. Fusce luctus odio ac nibh luctus data agency.</p>
                            </div>
                        </div>

                        <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                            <div className="service-section-inside">
                                <img className="icon-class" src={webicon} />
                                <h2 className="sub-heading">Web Development</h2>
                                <p className="main-hero-para">Quisque placerat vitae lacus ut data scele risque. Fusce luctus odio ac nibh luctus data agency.</p>
                            </div>
                        </div>

                    </div>


                    <div className="row">



                        <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                            <div className="service-section-inside">
                                <img className="icon-class" src={brandingicon} />
                                <h2 className="sub-heading">Branding</h2>
                                <p className="main-hero-para">Quisque placerat vitae lacus ut data scele risque. Fusce luctus odio ac nibh luctus data agency.</p>
                            </div>
                        </div>

                        <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                            <div className="service-section-inside">
                                <img className="icon-class" src={grphicsicon} />
                                <h2 className="sub-heading">Graphics Designing</h2>
                                <p className="main-hero-para">Quisque placerat vitae lacus ut data scele risque. Fusce luctus odio ac nibh luctus data agency.</p>
                            </div>
                        </div>
                        <div className="col-11 col-lg-4 col-xxl-4">
                            <h2 className="sub-heading-title">Our Main Design Services For Customers</h2>
                            {/* <img src={divider} /> */}
                            <p className="sub-para-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,  bluctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>

                    </div>



                </div>
            </section>
        </>
    )
}

export default Services
