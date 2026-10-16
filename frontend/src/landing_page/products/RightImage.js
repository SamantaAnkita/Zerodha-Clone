import React from 'react';


function RightImage({imageURL, productName, productDescription, learnMore}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h3>{productName}</h3>
                    <p>{productDescription}</p>
                    <a href={learnMore}>
                        Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-6">
                    <img src={imageURL} alt={productName} />
                </div>
            </div>
        </div>
    );
}

export default RightImage;