import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.scss";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    let visible = true;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        visible = true;
      } else {
        visible = false;
      }

      prevScrollPos = currentScrollPos;

      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (visible) {
          navbar.classList.remove("hide");
          navbar.classList.add("show");
        } else {
          navbar.classList.remove("show");
          navbar.classList.add("hide");
        }
      }

      // Добавьте следующий код, чтобы закрыть навбар при скролле вниз
      const toggler = document.getElementById("navbar-collapse");
      if (toggler && !visible) {
        toggler.classList.remove("show");
        setExpanded(false); // Добавьте эту строку, чтобы закрыть навбар коллапс
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  const navItems = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About Us" },
    { to: "/#price", text: "Pricing plan" },
    { to: "/#quote", text: "Contact Us" },
    { to: "/blog", text: "Blog" },
  ];

  const dropdownItems = [
    { to: "/job/0", text: "Solo Truck Driver" },
    { to: "/job/1", text: "Team Truck Driving" },
    { to: "/job/2", text: "Owner Operators" },
  ];

  return (
    <Container>
      {/* Navbar Start */}
      <Navbar
        id="navbar"
        expand="lg"
        fixed="top"
        className={`rounded-3 shadow-sm p-0 ${
          expanded || prevScrollPos === 0 ? "show" : "hidden"
        }`}
        expanded={expanded}
      >
        <Container fluid>
          {" "}
          <Navbar.Brand
            as={Link}
            to="/"
            className=" d-flex  align-items-center px-4 "
          >
            {" "}
            {/*<img src="/img/horse.svg" alt="" />*/}
            <h2 className=" text-primary">Hermes Express</h2>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarCollapse"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="ms-auto p-4 p-lg-0">
              {navItems.map((item, index) => (
                <Nav.Link
                  key={index}
                  as={item.to ? Link : undefined}
                  to={item.to}
                  href={item.href}
                  className="nav-link"
                  onClick={handleNavItemClick}
                >
                  {item.text}
                </Nav.Link>
              ))}
              <NavDropdown title="Working" id="working-dropdown">
                {dropdownItems.map((item, index) => (
                  <NavDropdown.Item
                    key={index}
                    as={Link}
                    to={item.to}
                    onClick={handleNavItemClick}
                  >
                    {item.text}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <div className="socials d-flex justify-content-center align-items-center ">
                <div className="px-4" style={{ fontSize: "1.5rem" }}>
                  <a
                    href="tel:+14044340075"
                    className="fa-solid  fa-phone-volume mx-1"
                  />{" "}
                  <a
                    href="https://api.whatsapp.com/send/?phone=14044340075&text&type=phone_number&app_absent=0"
                    className="fa-brands fa-whatsapp mx-1"
                  />{" "}
                  <a
                    href="https://api.whatsapp.com/send/?phone=14044340075&text&type=phone_number&app_absent=0"
                    className="fa-brands fa-telegram mx-1"
                  />{" "}
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navbar End */}
    </Container>
  );
};

export default CustomNavbar;
