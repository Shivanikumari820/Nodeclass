import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-info text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">We’d love to hear from you!</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5">
        <div className="container">
          <form className="row g-3 shadow p-4 rounded bg-light">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="John Doe" required />
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
            </div>

            <div className="col-12">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="How can we help you?" required></textarea>
            </div>

            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary px-4 mt-3">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
