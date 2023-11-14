import React, { useState } from "react";
import { Link } from "react-router-dom";
import JobDetailsPage from "./Jobs/JobDetailsPage";
import jobs from "./json/jobs.json";

function Pricing() {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);

  const handleShowMore = (index) => {
    setSelectedJobIndex(index);
  };
  return (
    <>
      {/* Pricing Start */}
      <div id="price" className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center">
            <h6 className="text-primary text-uppercase">Pricing Plan</h6>
            <h1 className="mb-5">Hermes Express Jobs</h1>
          </div>
          <div className="row g-4">
            {jobs.jobDescription.map((job, index) => {
              return (
                <div
                  className="col-md-6 col-lg-4"
                  style={{ height: "710px" }}
                  key={index}
                >
                  <div className="price-item " style={{ height: "720px" }}>
                    <Link
                      to={`/job/${index}`}
                      onClick={() => handleShowMore(index)}
                    >
                      <div className="border-bottom p-4 mb-4">
                        <h3 className="text-primary mb-1">{job.title}</h3>
                        <h2 className="display-5 mb-0">
                          <small className="" style={{ fontSize: 22 }}>
                            $
                          </small>
                          {job.averageGross}
                          <small className="" style={{ fontSize: 16 }}>
                            {job.grossTime}
                          </small>
                        </h2>
                      </div>
                    </Link>

                    <div
                      className="p-4 pt-0"
                      style={{
                        display: "flex",
                        height: "545px",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        {job.payDetails.map((payDetail, payDetailIndex) => (
                          <p>
                            <i
                              className="fa fa-check text-success me-3"
                              key={payDetailIndex}
                            />
                            {payDetail}
                          </p>
                        ))}
                      </div>
                      <div>
                        <Link
                          className="btn btn-primary py-3 px-5"
                          to={`/job/${index}`}
                          onClick={() => handleShowMore(index)}
                        >
                          <span>Show More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Pricing End */}

      {/* Render JobDetailsPage if a job is selected */}
      {selectedJobIndex && <JobDetailsPage job={selectedJobIndex} />}
    </>
  );
}

export default Pricing;
