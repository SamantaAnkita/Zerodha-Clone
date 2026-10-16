import React from 'react';

function Education() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/Varsity_image.jpg" style={{width:"80%"}} />
                </div>
                <div className="col-6">
                    <h1 className="mb-3 fs-2">Free and open market education</h1>
                    <p>Varsity, the largest online stock market education ebook covering everything from the basic to advanced trading.</p>
                    <a href="#" style={{textDecoration:"none"}} className="p-2">
                        Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>

                    <p className="mt-3">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="#" style={{textDecoration:"none"}}>
                        TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;