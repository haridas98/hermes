import React from "react";

const Reviews = () => {
  return (
    <div
      id="Reviews"
      className="container-xxl py-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="text-center">
          <h6 className="text-secondary text-uppercase">Reviews</h6>
          <h1 className="mb-0">Our Clients Say!</h1>
        </div>
        <div
          className="owl-carousel testimonial-carousel wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="testimonial-item p-4 my-5">
            <div className="d-flex align-items-end mb-4">
              <img
                className="img-fluid flex-shrink-0"
                src="../../img/testimonial-1.jpg"
                style={{ width: 80, height: 80 }}
              />
              <div className="ms-4">
                <h5 className="mb-1">Jennifer Adams</h5>
                <p className="m-0">Windows Business Owner</p>
              </div>
            </div>
            <p className="mb-0">
              I was impressed with their freight delivery service. They handled
              my shipment with care and delivered it on time. Great experience
              overall!
            </p>
          </div>
          <div className="testimonial-item p-4 my-5">
            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
            <div className="d-flex align-items-end mb-4">
              <img
                className="img-fluid flex-shrink-0"
                src="../../img/testimonial-2.jpg"
                style={{ width: 80, height: 80 }}
              />
              <div className="ms-4">
                <h5 className="mb-1">Robert Johnson</h5>
                <p className="m-0">Online Retailer</p>
              </div>
            </div>
            <p className="mb-0">
              Their logistics team ensured smooth and efficient delivery of my
              products. I appreciate their professionalism and attention to
              detail.
            </p>
          </div>
          <div className="testimonial-item p-4 my-5">
            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
            <div className="d-flex align-items-end mb-4">
              <img
                className="img-fluid flex-shrink-0"
                src="../../img/testimonial-3.jpg"
                style={{ width: 80, height: 80 }}
              />
              <div className="ms-4">
                <h5 className="mb-1">Mark Thompson</h5>
                <p className="m-0">Construction Contractor</p>
              </div>
            </div>
            <p className="mb-0">
              Their timely delivery of construction materials has been crucial
              for my projects. Dependable service and excellent communication
              throughout.
            </p>
          </div>
          <div className="testimonial-item p-4 my-5">
            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
            <div className="d-flex align-items-end mb-4">
              <img
                className="img-fluid flex-shrink-0"
                src="../../img/testimonial-4.jpg"
                style={{ width: 80, height: 80 }}
              />
              <div className="ms-4">
                <h5 className="mb-1">Samantha Wilson</h5>
                <p className="m-0">Event Planner</p>
              </div>
            </div>
            <p className="mb-0">
              Their freight delivery service played a vital role in the success
              of my event. They ensured all equipment arrived on time and in
              perfect condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
