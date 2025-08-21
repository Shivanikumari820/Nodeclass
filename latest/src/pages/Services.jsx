import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Our Services</h1>
          <p className="lead">What we offer to boost your digital presence</p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">Full-stack web applications using MERN stack, tailored to your business needs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title">UI/UX Design</h5>
                  <p className="card-text">Clean, user-friendly interface design that ensures great user experiences.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title">API Integration</h5>
                  <p className="card-text">Robust backend services and seamless integration of third-party APIs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
