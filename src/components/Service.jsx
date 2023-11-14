import React from "react";

import jobs from "./json/jobs.json";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <>
      {/* Service Start */}
      <div id="service" className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center">
            <h6 className="text-primary text-uppercase">Why Us?</h6>
            <h1 className="mb-5">Our Advantages</h1>
          </div>
          <div className="row g-4">
            {jobs.whyUs.map((job, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="service-item p-4">
                  <div className="overflow-hidden mb-4">
                    <img
                      className="img-fluid"
                      src="../../img/service-3.jpg"
                      alt=""
                    />
                  </div>
                  <h4 className="mb-3">{job.title}</h4>
                  <p>{job.description}</p>
                  <Link className="btn-slide mt-2" to={job.applyNow}>
                    <i className="fa fa-arrow-right" />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  );
};

export default Service;
