import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

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
    <>
      {/* Navbar Start */}
      <Navbar
        id="navbar"
        bg="white"
        expand="lg"
        className="border-top border-5 border-primary shadow-sm p-0"
        expanded={expanded}
      >
        <Navbar.Brand
          as={Link}
          to="/"
          className="bg-primary d-flex align-items-center px-4 px-lg-5"
        >
          {" "}
          <img src="/img/horse.svg" alt="" />
          <h2 className="mb-2 text-white">Hermes Express</h2>
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
          </Nav>
          <h4 className="m-0 pe-lg-5 d-none d-lg-block">
            <a
              href="https://api.whatsapp.com/send/?phone=14044340075&text&type=phone_number&app_absent=0"
              className="fa-brands fa-whatsapp text-primary me-3"
            />{" "}
            <a href="tel:+14044340075">+1 404 4340075</a>
          </h4>
        </Navbar.Collapse>
      </Navbar>
      {/* Navbar End */}
    </>
  );
};

export default CustomNavbar;
