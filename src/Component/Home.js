import React from 'react'
import Header from "../Component/Header"
import Carasole from './Carasole'
import Contact from './Contact'
import Footer from './Footer'
import ImageSec from './ImageSec'
import OurGuarentee from './OurGuarentee'
import Portfolio from './Portfolio'
import PriceChart from './PriceChart'
import Services from './Services'
import Services2 from './Services2'
import Subscribe from './Subscribe'
import TechnoSlider from './TechnoSlider'
import WebDevelopment from './WebDevelopment'

function Home() {
    return (
        <>
            <Carasole />
            <Header />
            <Services />
            {/* <Services2 /> */}
            <OurGuarentee />
            <Subscribe/>
            {/* <WebDevelopment /> */}
            {/* <ImageSec /> */}
            {/* <PriceChart /> */}
            <Portfolio />
            <TechnoSlider/>
            <Contact />
            <Footer />
        </>
    )
}

export default Home
