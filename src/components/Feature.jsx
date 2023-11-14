import React from "react";

const Feature = () => {
  return (
    <>
      {/* Feature Start */}
      <div
        id="feature"
        className="container-fluid overflow-hidden py-5 px-lg-0"
      >
        <div className="container feature py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div
              className="col-lg-6 feature-text wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6 className="text-secondary text-uppercase mb-3">
                Our Features
              </h6>
              <h1 className="mb-5">
                We Are Trusted Logistics Company Since 2014
              </h1>
              <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                <i className="fa fa-flag-usa text-primary fa-3x flex-shrink-0" />
                <div className="ms-4">
                  <h5>All States Service</h5>
                  <p className="mb-0">
                    You have the opportunity to visit all corners of the USA.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0" />
                <div className="ms-4">
                  <h5>On Time Delivery</h5>
                  <p className="mb-0">
                    We will provide you with a modern truck.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                <i className="fa fa-headphones text-primary fa-3x flex-shrink-0" />
                <div className="ms-4">
                  <h5>24/7 Telephone Support</h5>
                  <p className="mb-0">
                    The support service is always in touch with you.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 pe-lg-0 wow fadeInRight"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="../../img/feature.jpg"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
    </>
  );
};

export default Feature;
