import React from 'react'
import Header from "../Component/Header"
import Contact from './Contact'
import Footer from './Footer'
import ImageSec from './ImageSec'
import OurGuarentee from './OurGuarentee'
import Portfolio from './Portfolio'
import PriceChart from './PriceChart'
import Services from './Services'
import Services2 from './Services2'
import WebDevelopment from './WebDevelopment'

function Home() {
    return (
        <>
            <Header />
            <Services2/>
            <OurGuarentee />
            <Services />
            <WebDevelopment />
            <ImageSec/>
            <PriceChart/>
            {/* <Portfolio /> */}
            <Contact />
            <Footer />
        </>
    )
}

export default Home
