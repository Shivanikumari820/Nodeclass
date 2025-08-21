import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div>
      {/* Page Heading */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead">Who we are and what we do</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4 text-center fw-semibold">Our Mission</h2>
          <p className="text-center w-75 mx-auto">
            We aim to build modern, scalable, and user-friendly web applications using the latest web technologies like React, Bootstrap, Node.js, and MongoDB. Our mission is to make the web more accessible and powerful for everyone.
          </p>
        </div>
      </section>

      {/* Team/Profile Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-5 text-center fw-semibold">Meet the Developer</h2>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card shadow border-0">
                <img
                  src="https://via.placeholder.com/400x250.png?text=Your+Photo"
                  className="card-img-top"
                  alt="Developer"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Shivani Kumari</h5>
                  <p className="card-text">Full Stack MERN Developer</p>
                  <p className="card-text small text-muted">
                    Passionate about clean UI, backend efficiency, and building end-to-end web apps.
                  </p>
                  <a href="/contact" className="btn btn-primary btn-sm">Get in Touch</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
