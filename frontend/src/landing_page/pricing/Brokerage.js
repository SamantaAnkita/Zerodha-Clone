import React from 'react';


function Brokerage() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 text-center  border-top'>
                <div className='col-8 p-4'>
                    <a href='#' style={{textDecoration:"none"}}><h3 className='fs-5'>Brokrage calculator</h3></a>
                    <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"13px"}} className='tet-muted'>
                        <li>Call & Trade and RMS auto-squareoff-Additional charges of ₹50+GST per order</li>
                        <li>Digigtal contract notes will be sent via e-mail</li>
                        <li>Physical copies of cntract notes, if requeired, shall be charged ₹20 per cntract note. Courier apply.</li>
                        <li>For NRI account (on-PIS)0.5% or ₹100 per ecuted order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whicever is lower).</li>
                        <li>If the account is in debit balance, any order place will be changed ₹40 per exected order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href='#' style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
     );
}   

export default Brokerage;