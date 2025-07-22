import React from 'react'; // optional: if you want to move styling here
// import heroImg from '../assets/hero-girl.png'; // replace with your actual image path

export default function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <p className="text-orange small mb-2">
            <i className="bi bi-quote"></i> Learn Data Analytics, SAP, or CAD/CAE from industry experts.
          </p>
          <h1 className="fw-bold display-5 mb-3">Learn Skills That Get You Hired</h1>
          <p className="mb-4">
            Get certified and land your dream job with expert mentorship and career support.
          </p>
          <div className="d-flex gap-3 justify-content-center justify-content-md-start">
            <button className="btn btn-outline-warning rounded-pill px-4">
              Explore Courses <span className="ms-1">↗</span>
            </button>
            <button className="btn btn-light border rounded-pill px-4">
              Download Free Syllabus
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-md-6 text-center position-relative">
          <div className="bg-warning rounded-circle d-inline-block p-4">
            {/* <img src={heroImg} alt="Hero" className="img-fluid rounded-circle" style={{ maxHeight: '300px' }} /> */}
          </div>
          <div className="position-absolute top-0 end-0 me-4 mt-3 text-end">
            <div className="bg-white rounded shadow p-3 d-inline-block">
              <h4 className="mb-0">⭐ 10 Years</h4>
              <small className="text-muted">Experience</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
