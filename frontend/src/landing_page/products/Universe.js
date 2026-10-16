import React from 'react';


function Universe() {
    return (
        <div className="container mt-5">
            <div className="row">
                <h1 className="text-center">The Zerodha Universe</h1>
                <p className="text-center">Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4  p-3 mt-5"  >
                    <img style={{width:"100px"}} src="media\images\zerodhafundhouse.png"/>
                    <p className="text-small text-muted">Partner 1 Description</p>
                </div>
                <div className="col-4 p-3  mt-5"  >
                    <img style={{width:"100px"}} src="media/images/sensibull-logo.svg"/>
                    <p className="text-small text-muted">Partner 2 Description</p>
                </div>
                <div className="col-4 p-3  mt-5"  >
                    <img style={{width:"100px"}} src="media/images/tijori.svg"/>
                    <p className="text-small text-muted">Partner 3 Description</p>
                </div>
                <div className="col-4 p-3  mt-5"  >
                    <img style={{width:"100px"}} src="media/images/streak-logo.png"/>
                    <p className="text-small text-muted">Partner 1 Description</p>
                </div>
                <div className="col-4  p-3 mt-5" >
                    <img style={{width:"100px"}} src="media/images/smallcase-logo.png"/>
                    <p className="text-small text-muted">Partner 2 Description</p>
                </div>
                <div className="col-4 p-3  mt-5" >
                    <img style={{width:"100px"}}  src="media/images/ditto-logo.png"/>
                    <p className="text-small text-muted">Partner 3 Description</p>
                </div>
            </div>
             
        </div>
     );
}


export default Universe;