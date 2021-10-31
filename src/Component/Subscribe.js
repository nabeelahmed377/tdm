import React from 'react'

function Subscribe() {
    return (
        <>
            <section className="subscribe-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5">
                            <p className="sub_title">DON’T MISS OUT OUR LATEST UPDATES</p>
                            <h1 className="sec_title">SUBSCRIBE US</h1>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <input className="subscribefrom" type="email" placeholder="Enter Your Email" name="email"></input>
                            <button className="common_btn red_bg">SUBSCRIBE NOW</button>
                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}

export default Subscribe
