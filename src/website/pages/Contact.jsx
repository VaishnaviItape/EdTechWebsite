import React, { useState } from 'react';
import '../../website/css/Contact.css';
import MapSection from '../../images/MAP SECTION.png';
import student1 from '../../images/student (1).png';
import student2 from '../../images/student (2).png';
import student3 from '../../images/student (3).png';
import student4 from '../../images/student (4).png';
import student5 from '../../images/student (5).png';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',  // ✅ changed from phone
    service: '',
    message: '',
    companyName: 'EdTech',
    companyCode: 'EdTech'
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';

    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Enter 10 digit phone number';

    if (!formData.service) newErrors.service = 'Please select a course';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('http://amkore7-001-site1.ltempurl.com/api/ContactUs/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // ✅ Show success alert
        alert('✅ Message sent successfully!');

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          service: '',
          message: '',
          companyName: 'EdTech',
          companyCode: 'EdTech'
        });

      } else {
        alert('❌ Failed to send. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      alert('⚠️ Something went wrong. Please try again.');
    }
  };


  return (
    <div className="container py-5">
      {/* === Header Section === */}
      <div className="header-section">
        <div className="header-left">
          <h2 className="course-heading">Contact Us</h2>
        </div>
        <div className="header-right">
          <p className="course-description">
            Welcome to SkillBridge's Pricing Plan page...
          </p>
        </div>
      </div>

      <hr className="mt-6 mb-4" />

      <section>
        <div className="contact-card-wrapper row bg-white shadow-sm p-4 mx-auto">
          {/* Form Column */}
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                {/* First Name */}
                <div className="col-md-6">
                  <label className="form-label small">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter First Name"
                  />
                  {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                </div>

                {/* Last Name */}
                <div className="col-md-6">
                  <label className="form-label small">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Last Name"
                  />
                  {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label className="form-label small">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your Email"
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                {/* Phone */}
                {/* Phone */}
                <div className="col-md-6">
                  <label className="form-label small">Phone</label>
                  <input
                    type="tel"
                    name="phoneNumber"   // ✅ changed
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Phone Number"
                  />
                  {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
                </div>


                {/* Course */}
                <div className="col-12">
                  <label className="form-label small">Course</label>
                  <select
                    name="service"    // ✅ changed
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Choose your service</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                  {errors.service && <small className="text-danger">{errors.service}</small>}
                </div>

                {/* Message */}
                <div className="col-12">
                  <label className="form-label small">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    placeholder="Enter your Message here..."
                  ></textarea>
                  {errors.message && <small className="text-danger">{errors.message}</small>}
                </div>

                {/* Submit Button */}
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn px-4 mt-2 text-white"
                    style={{ backgroundColor: '#FF7F22' }}
                  >
                    Send Your Message
                  </button>
                  {submitStatus && (
                    <div className="mt-2">
                      <small className={submitStatus.includes('successfully') ? 'text-success' : 'text-danger'}>
                        {submitStatus}
                      </small>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Image Column */}
          <div className="col-lg-6 text-center map-container">
            <img src={MapSection} alt="India Map" className="img-fluid default-img" />
            <img src={student1} alt="student1" className="student-img student1" />
            <img src={student2} alt="student2" className="student-img student2" />
            <img src={student3} alt="student3" className="student-img student3" />
            <img src={student4} alt="student4" className="student-img student4" />
            <img src={student5} alt="student5" className="student-img student5" />
          </div>
        </div>
      </section>
    </div>
  );
}
