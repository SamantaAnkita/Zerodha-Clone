import React from 'react';


function LeftImage ({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
         <div className="conainer" style={ {marginLeft:"195px"}}>
            <div className="row">
                <div className="col-6 text-center">
                   <img src={imageURL} />
                </div>
                <div className="col-6 p-5 mt-5 " style={{width:"32%", marginLeft:"80px"}}>
                    <h1 style={{fontSize:"1.4rem", fontWeight: "400", lineHeight: "1"}}>{productName}</h1>
                    <p style={{lineHeight: "1.8", fontSize: "1.1rem"}}>{productDescription}</p>
                    <div> 
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft: "50px", textDecoration:"none"}}>Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="mt-3">
                    <a href={googlePlay}><img src="media/images/google-play-badge.svg" alt="Google Play" /></a>
                    <a href={appStore} style={{marginLeft: "50px"}}><img src="media/images/appstore-badge.svg" alt="App Store" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftImage ;