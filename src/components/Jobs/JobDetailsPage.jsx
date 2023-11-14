import React from "react";
import jobs from "../json/jobs.json";
import { Link, useParams } from "react-router-dom";
import Quote from "../Quote/Quote";
import Carousel from "react-bootstrap/Carousel";

function JobDetailsPage() {
  const { id } = useParams(); // Получаем параметр id из URL

  // Используем id для получения деталей работы из массива jobs.jobDescription
  const job = jobs.jobDescription[id];

  return (
    <>
      <div
        id="feature"
        className="container-fluid overflow-hidden py-5 px-lg-0"
      >
        <div className="container feature py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div className="col-lg-6 feature-text ">
              <div>
                <h2 className="text-primary">{job.title}</h2>
                <h1>
                  ${job.averageGross} {job.grossTime}
                </h1>
                <br />
                <h4>Pay Details:</h4>
                <ul>
                  {job.payDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <h4>Requirements:</h4>
                <ul>
                  {job.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>
              <div>
                <Link to="/quote" className="btn btn-primary py-3 px-5">
                  Explore More
                </Link>
              </div>
            </div>

            <div
              className="col-lg-6 pe-lg-0"
              style={{
                minHeight: 400,
              }}
            >
              <div className=" h-100">
                <Carousel fade nextIcon={null} prevIcon={null} slide={true}>
                  {job.img.map((img, index) => (
                    <Carousel.Item>
                      <img
                        src={img}
                        key={index}
                        className="carousel-image"
                        alt={job.title}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Quote />
    </>
  );
}

export default JobDetailsPage;
