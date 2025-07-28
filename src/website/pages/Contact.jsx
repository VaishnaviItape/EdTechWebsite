// src/pages/Contact.jsx
import React from 'react';
import '../../website/css/Contact.css'; // ✅ CSS is imported
import MapSection from '../../images/MAP SECTION.png';
import student1 from '../../images/student (1).png';
import student2 from '../../images/student (2).png';
import student3 from '../../images/student (3).png';
import student4 from '../../images/student (4).png';
import student5 from '../../images/student (5).png';

export default function Contact() {
  return (
    <div className="container py-5">
      {/* === Header Section === */}
      <div className="header-section">
        <div className="header-left">
          <h2 className="course-heading">Contact Us</h2>
        </div>
        <div className="header-right">
          <p className="course-description">
            Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
          </p>
        </div>
      </div>

      <hr className="mt-6 mb-4" />

      {/* === Contact Form Section === */}
      <section >
        <div >
          {/* Section Title */}
          {/* <div className="mb-4">
            <h3 className="fw-bold">Got Questions? Let’s Talk.</h3>
            <p className="text-muted small">Students From All Over India Trust Us</p>
          </div> */}

          {/* Form + Image Row */}
          <div className="contact-card-wrapper row bg-white shadow-sm p-4 mx-auto">
            {/* Form Column */}
            <div className="col-lg-6">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small">First Name</label>
                    <input type="text" className="form-control" placeholder="Enter First Name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small">Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter Last Name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small">Email</label>
                    <input type="email" className="form-control" placeholder="Enter your Email" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small">Phone</label>
                    <input type="tel" className="form-control" placeholder="Enter Phone Number" />
                  </div>
                  <div className="col-12">
                    <label className="form-label small">Course</label>
                    <select className="form-select" defaultValue="">
                      <option value="" disabled>Choose your course</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Web Development">Web Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                    </select>

                  </div>
                  <div className="col-12">
                    <label className="form-label small">Message</label>
                    <textarea className="form-control" rows="4" placeholder="Enter your Message here..."></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn px-4 mt-2 text-white"
                      style={{ backgroundColor: '#FF7F22' }}
                    >
                      Send Your Message
                    </button>
                  </div>

                  {/* <div className="col-12">
                    <button className="btn btn-warning text-white px-4 mt-2">Send Your Message</button>
                  </div> */}
                </div>
              </form>
            </div>

            {/* Image Column */}
            <div className="col-lg-6 text-center map-container">
              <img src={MapSection} alt="India Map" className="img-fluid default-img" />

              {/* Student images */}
              <img src={student1} alt="student1" className="student-img student1" />
              <img src={student2} alt="student2" className="student-img student2" />
              <img src={student3} alt="student3" className="student-img student3" />
              <img src={student4} alt="student4" className="student-img student4" />
              <img src={student5} alt="student5" className="student-img student5" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
