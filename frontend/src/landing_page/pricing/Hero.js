import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5 p-2'>
            <div className='row mt-5'>
                <h3 className='text-center fs-'>Pricing</h3>
                <p className='text-center mb-5 text-muted'>Free equity investments and flat ₹20 traday and F&O trades</p>
                <div className='col-4 mt-5 '  >
                    <img src='media/images/pricing-eq.svg' style={{width:"80%"}}/>
                    <h3 className='text-center mt-3 fs-3'>Free equity delivery</h3>
                    <p className='text-center p-4 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 mt-5 '>
                    <img src='media/images/other-trades.svg' style={{width:"80%"}}/>
                    <h3 className='text-center mt-3 fs-3'>Intraday and F&O trades</h3>
                    <p className='text-center p-4 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 mt-5 '>
                    <img src='media/images/pricing-eq.svg' style={{width:"80%"}}/>
                    <h3 className='text-center mt-3 fs-3'>Free direct MF</h3>
                    <p className='text-center p-4 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;