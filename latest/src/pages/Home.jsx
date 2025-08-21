// import React from 'react';


// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="py-5 text-center text-white" style={{ background: 'linear-gradient(to right, #0066ff, #003399)' }}>
//         <div className="container">
//           <h1 className="display-4 fw-bold">Welcome to MySite</h1>
//           <button onClick={handleSubmit1}>Home Page</button>
//           <p className="lead">We build modern web solutions with React, Bootstrap, and creativity.</p>
//           <a href="/about" className="btn btn-warning mt-3 px-4 py-2 fw-bold">Learn More</a>
//         </div>
//       </section>

//       Features Section 
//       <section className="py-5 bg-light">
//         <div className="container">
//           <div className="row text-center">
//             <div className="col-md-4 mb-4">
//               <div className="card shadow h-100">
//                 <div className="card-body">
//                   <h5 className="card-title">Fast Development</h5>
//                   <p className="card-text">Using React + Bootstrap, we deliver lightning-fast experiences.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-4">
//               <div className="card shadow h-100">
//                 <div className="card-body">
//                   <h5 className="card-title">Responsive Design</h5>
//                   <p className="card-text">All pages are mobile-first and adapt beautifully to all devices.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-4">
//               <div className="card shadow h-100">
//                 <div className="card-body">
//                   <h5 className="card-title">Clean Code</h5>
//                   <p className="card-text">Codebase is well-organized, readable, and easy to maintain.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-5 text-center text-white" style={{ backgroundColor: '#222' }}>
//         <div className="container">
//           <h2>Ready to Start Your Project?</h2>
//           <p className="mb-4">We help you turn your ideas into digital products that grow your business.</p>
//           <a href="/contact" className="btn btn-outline-light px-4 py-2">Contact Us</a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from 'react';

const Home = () => {
  const handleClick = async (path) => {
    try {
      const res = await fetch(`http://localhost:8000${path}`);
      const data = await res.text();
      console.log("Frontend Response:", data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 text-center text-white" style={{ background: 'linear-gradient(to right, #0066ff, #003399)' }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to MySite</h1>

          {/* Buttons */}
          <button onClick={() => handleClick("/home")} className="btn btn-light m-2">Home</button>
          <button onClick={() => handleClick("/about")} className="btn btn-light m-2">About</button>
          <button onClick={() => handleClick("/contact")} className="btn btn-light m-2">Contact</button>

          <p className="lead">We build modern web solutions with React, Bootstrap, and creativity.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
