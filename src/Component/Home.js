import React from 'react'
import Header from "../Component/Header"
import Footer from './Footer'
import OurGuarentee from './OurGuarentee'
import Services from './Services'
import WebDevelopment from './WebDevelopment'

function Home() {
    return (
        <>
            <Header />
            <Services />
            <WebDevelopment />
            <OurGuarentee/>
            <Footer/>
        </>
    )
}

export default Home
