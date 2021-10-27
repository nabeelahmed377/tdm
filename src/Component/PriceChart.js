import React from 'react'
import "../Component/PriceChart.css"

function PriceChart() {
    return (
        <>
            <div class="demo9">
                <div class="container-fluid">
                    <h4 className="price-title-1">PRICE<span className="price-title"> PACKAGES</span></h4>
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="pricingTable9">
                                <div class="pricingTable-header">
                                    <span class="price-value">10<span class="currency">$</span></span>
                                    <h3 class="title">Standard</h3>
                                </div>
                                <ul class="pricing-content">
                                    <li>50GB Disk Space</li>
                                    <li>50 Email Accounts</li>
                                    <li>50GB Monthly Bandwidth</li>
                                    <li>10 Subdomains</li>
                                    <li>15 Domains</li>
                                </ul>
                                <a href="#" class="pricingTable-signup">Sign Up</a>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="pricingTable9 green">
                                <div class="pricingTable-header">
                                    <span class="price-value">20<span class="currency">$</span></span>
                                    <h3 class="title">Business</h3>
                                </div>
                                <ul class="pricing-content">
                                    <li>60GB Disk Space</li>
                                    <li>60 Email Accounts</li>
                                    <li>60GB Monthly Bandwidth</li>
                                    <li>15 Subdomains</li>
                                    <li>20 Domains</li>
                                </ul>
                                <a href="#" class="pricingTable-signup">Sign Up</a>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="pricingTable9 orange">
                                <div class="pricingTable-header">
                                    <span class="price-value">30<span class="currency">$</span></span>
                                    <h3 class="title">Premium</h3>
                                </div>
                                <ul class="pricing-content">
                                    <li>70GB Disk Space</li>
                                    <li>70 Email Accounts</li>
                                    <li>70GB Monthly Bandwidth</li>
                                    <li>20 Subdomains</li>
                                    <li>25 Domains</li>
                                </ul>
                                <a href="#" class="pricingTable-signup">Sign Up</a>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="pricingTable9 purple">
                                <div class="pricingTable-header">
                                    <span class="price-value">40<span class="currency">$</span></span>
                                    <h3 class="title">Extra</h3>
                                </div>
                                <ul class="pricing-content">
                                    <li>80GB Disk Space</li>
                                    <li>80 Email Accounts</li>
                                    <li>80GB Monthly Bandwidth</li>
                                    <li>25 Subdomains</li>
                                    <li>30 Domains</li>
                                </ul>
                                <a href="#" class="pricingTable-signup">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default PriceChart
