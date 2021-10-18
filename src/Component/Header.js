import React from 'react'

function Header() {
    return (
        <>
            <header>
                <div id="main" className="container" >
                    <div className="row">
                        <div className="col-11 col-lg-4 header-left-side d-flex justify-content-center flex-column align-items-start ">
                            <div className="name">

                            </div>
                        </div>
                        {/* right */}

                        <div className="col-12 col-lg-8 header-left-side d-flex justify-content-center flex-column align-items-start ">
                            {/* <h1>Academic Wizards are Here to Ease your Burde</h1> */}
                            <div className="details">
                                <h3 className="heading">We're Creative Design Agency</h3>
                                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                    luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
