import React, { useState } from 'react'
import serviceapi from "../Apis/ServicesAPI"

function Services() {
    const [service, setSevices] = useState(serviceapi)
    return (
        <>
            <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="heading-container">Our Main Design Services For Customers</h1>
                    

                    <div className="row">
                        {service.map((curElem) => {
                            const { id, logo, title, info } = curElem;
                            return (
                                <>
                                    <div
                                        className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                                        key={id}>
                                        <i className={`fontawesome-style ${logo}`}></i>
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="main-hero-para">{info}</p>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
