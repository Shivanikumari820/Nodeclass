import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-auto shadow-sm">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Brand Info */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">MySite</h5>
            <p>Building modern web solutions with love & React.</p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Contact</h6>
            <p className="mb-1">Email: info@mysite.com</p>
            <p className="mb-0">Phone: +91 12345 67890</p>
          </div>
        </div>

        <hr className="border-top border-light my-3" />

        <div className="text-center">
          <small>&copy; {new Date().getFullYear()} MySite. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
