import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ marginTop: "6rem" }}
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Contacts</h4>
              {/*                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>*/}
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                <a href="tel:+14044340075">+1 404 4340075</a>
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                HermesExpressGA@gmail.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            {/*                <div class="col-lg-3 col-md-6">*/}
            {/*                    <h4 class="text-light mb-4">Services</h4>*/}
            {/*                    <a class="btn btn-link" href="#">Air Freight</a>*/}
            {/*                    <a class="btn btn-link" href="#">Sea Freight</a>*/}
            {/*                    <a class="btn btn-link" href="#">Road Freight</a>*/}
            {/*                    <a class="btn btn-link" href="#">Logistic Solutions</a>*/}
            {/*                    <a class="btn btn-link" href="#">Industry solutions</a>*/}
            {/*                </div>*/}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link" href="#carousel">
                Home
              </a>
              <a className="btn btn-link" href="#about">
                About Us
              </a>
              <a className="btn btn-link" href="#service">
                Our Services
              </a>
              <a className="btn btn-link" href="#working">
                Working
              </a>
              <a className="btn btn-link" href="#owner">
                Owners
              </a>
              <a className="btn btn-link" href="#testimonial">
                Reviews
              </a>
              <a className="btn btn-link" href="#quote">
                Contact Us
              </a>
            </div>
            {/*                <div class="col-lg-3 col-md-6">*/}
            {/*                    <h4 class="text-light mb-4">Newsletter</h4>*/}
            {/*                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>*/}
            {/*                    <div class="position-relative mx-auto" style="max-width: 400px;">*/}
            {/*                        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">*/}
            {/*                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <a className="border-bottom" href="#">
                  Hermes Express
                </a>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Designed By{" "}
                <a className="border-bottom" href="https://vk.com/haridas1998">
                  GauraService
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
};

export default Footer;
