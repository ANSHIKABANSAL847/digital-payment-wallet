import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer
        className="footer"
        style={{
          background: "#002970", // Dark gray background
          color: "white",
          padding: "10px 0", // Reduced padding to reduce height
        }}
      >
        <div className="container">
          <div className="row">
            {/* Contact Information */}
            <div className="col-md-4 mb-3">
              <h5 style={{ fontWeight: "bold", marginBottom: "15px" }}>
                Contact Us
              </h5>
              <p>Sirsa, Haryana</p>
              <p>Email: bansalanshika847@gmail.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-3">
              <h5 style={{ fontWeight: "bold", marginBottom: "15px" }}>
                Quick Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="col-md-4 mb-3">
              <h5 style={{ fontWeight: "bold", marginBottom: "15px" }}>
                Follow Us
              </h5>
              <div className="d-flex">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    marginRight: "15px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col text-center">
              <p className="mb-0" style={{ fontSize: "14px" }}>
                © 2024 Car Wash Service. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
