import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row p-3 fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center justify-content-center" style={{ width: "48%" }}>
          <img
            src="media/images/nithin-kamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle mb-3" style={{width:"50%"}}
          />
          <h6>Nithin Kamath</h6>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href=""
              style={{ textDecoration: "none" }}
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
