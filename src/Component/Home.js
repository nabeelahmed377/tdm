import React from 'react'
import Header from "../Component/Header"
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
        </>
    )
}

export default Home
