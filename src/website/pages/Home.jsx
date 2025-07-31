
import heroImg from '../../images/young-pretty-woman-looking.png';
import ellipseImg from '../../images/Ellipse 2.png';
import Vector from '../../images/Vector_Animation.png';
import mobileImg from '../../images/iPhone Space Deep Purple Front 1.png';
import Avatar from '../../images/Avatar.png';
import MapSection from '../../images/MAP SECTION.png';
import leftImg1 from "../../images/one app 1.png";
import leftImg2 from "../../images/secure payment 1.png";
import rightImg from "../../images/Component 6 1.png";
import { useEffect, useState } from 'react';
import student1 from '../../images/student (1).png';
import student2 from '../../images/student (2).png';
import student3 from '../../images/student (3).png';
import student4 from '../../images/student (4).png';
import student5 from '../../images/student (5).png';
import { useNavigate } from 'react-router-dom';

import '../css/Home.css';
export default function Home() {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/brochure.pdf'; // 🔁 Put the correct PDF path here
    link.download = 'Course-Brochure.pdf';
    link.click();
    setShowDownloadPopup(false); // Close popup after download
  };


  // FAQ Data Array
  const faqData = [
    {
      question: "Can I enroll in more than one course at a time?",
      answer: "Yes, you can enroll in multiple courses simultaneously based on your schedule.",
    },
    {
      question: "What kind of support do I get during the course?",
      answer:
        "You’ll get full access to instructor guidance, live doubt-clearing sessions, community forums, and downloadable resources. Our team is here to help you every step of the way—just like having a mentor beside you.",
      expanded: true,
    },
    {
      question: "Will I receive a certificate after completing a course?",
      answer:
        "Yes, you will receive a certificate of completion after successfully finishing the course.",
    },
    {
      question: "Do I need any prior experience to join?",
      answer: "No prior experience is required. The course is beginner-friendly.",
    },
  ];


  const [openIndex, setOpenIndex] = useState(null); // initialize state properly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) { // Adjust value as needed
        setShowFormPopup(true);
        window.removeEventListener('scroll', handleScroll); // Trigger only once
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showFormPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [showFormPopup]);


  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/courses');
  };
  const handleNavigate = (courseTitle) => {
    if (courseTitle === 'Data Analytics') {
      navigate('/view-course');
    } else if (courseTitle === 'SAP') {
      navigate('/view-coursesap');
    } else if (courseTitle === 'CAD/CAE') {
      navigate('/view-coursescda');
    }
  };
  return (
    <div className="container py-5">
      <div className="text-center py-5 position-relative overflow-hidden hero-section">
        <h1 className="display-5 fw-bold hero-heading">
          Learn Skills That <br /> Get You Hired
        </h1>

        <div className="hero-container">
          <img src={ellipseImg} alt="ellipse" className="ellipse-background" />
          <img src={Vector} alt="vector" className="vector-animation" />
          <img src={heroImg} alt="girl" className="girl-image" />

          <div className="hero-buttons">
            <button className="explore-btn" onClick={handleExploreClick}>
              Explore Courses <span>&rarr;</span>
            </button>
            <button className="download-btn" onClick={() => setShowDownloadPopup(true)}>
              Download Free Syllabus
            </button>


          </div>
          <div className="bottom-info d-flex justify-content-between align-items-end">
            <div className="info-text text-start">
              <p className="custom-paragraph m-0">
                Learn Data Analytics, SAP, or CAD/CAE<br />
                from industry experts. Get certified and <br />
                land your dream job with expert mentorship
                and career support.
              </p>
            </div>


            <div className="info-years text-end">
              <div className="fs-4" style={{ color: '#ff6600' }}>★★★★★</div>
              <h5
                className="mb-0"
                style={{
                  fontWeight: 700,
                  fontSize: '47px',
                  fontFamily: 'Urbanist, sans-serif'
                }}
              >
                10 Years
              </h5>
              <small className="text-muted">Experience</small>
            </div>
          </div>
        </div>
      </div>

      <section className="why-section">
        {/* --- Simplified Learning Section --- */}
        <div className="row align-items-center flex-column-reverse flex-md-row mt-5">
          {/* Text Section */}
          <div className="col-md-6 text-center text-md-start mt-4 mt-md-0">
            <h1 className="display-4 fw-bold">
              Your <br /> <span className="text-highlight">Learning,</span> <br /> Simplified
            </h1>
            <p className="my-3 text-muted">
              Live classes, notes, and progress — all in one smart dashboard. <br />
              No juggling apps or searching for links. Just log in and start learning.
            </p>
            <button className="btn btn-warning px-4 py-2 rounded-pill" onClick={handleExploreClick}>Get Course Details</button>

            <div className="d-flex align-items-center gap-3 mt-4">
              <div className="d-flex">
                <img src="https://i.pravatar.cc/40?img=1" className="rounded-circle me-1" alt="student1" />
                <img src="https://i.pravatar.cc/40?img=2" className="rounded-circle me-1" alt="student2" />
                <img src="https://i.pravatar.cc/40?img=3" className="rounded-circle me-1" alt="student3" />
              </div>
              <div>
                <h1 className="mb-0">10,000+ Learners</h1>
                <small className="text-muted">Trusted across India</small>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center hover-container">
            <img src={mobileImg} alt="mobile dashboard" className="main-image img-fluid" />

            <img src={leftImg1} alt="left " className="side-image left-image one" />
            <img src={leftImg2} alt="left " className="side-image left-image two" />
            <img src={rightImg} alt="right" className="side-image right-image" />
          </div>
          {/* <div className="col-md-6 text-center">
            <img src={mobileImg} alt="mobile dashboard" className="img-fluid" style={{ maxWidth: '190px' }} />
          </div> */}
        </div>
      </section>

      <section className="why-section">
        <h2>Why You'll Love This Course</h2>

        <div className="why-grid">
          {[
            {
              number: '01',
              title: 'Flexible Learning Schedule',
              desc: 'Fit your coursework around your job, studies, or personal commitments.',
            },
            {
              number: '02',
              title: 'Expert Instruction',
              desc: 'Learn directly from experienced professionals working in top industries.',
            },
            {
              number: '03',
              title: 'Diverse Course Offerings',
              desc: 'Choose from high-demand fields like Data Analytics, SAP, and CAD/CAE.',
            },
            {
              number: '04',
              title: 'Updated Curriculum',
              desc: 'Stay current with content tailored to the latest tools and industry trends.',
            },
            {
              number: '05',
              title: 'Practical Projects & Assignments',
              desc: 'Work on real-world assignments and build a job-ready portfolio.',
            },
            {
              number: '06',
              title: 'Interactive Learning Environment',
              desc: 'Engage with peers, share feedback, and grow in a supportive environment.',
            },
          ].map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-number">{item.number}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <div className="why-arrow">↗</div>
            </div>
          ))}
        </div>


      </section>
      {showFormPopup && (
        <div className="overlay-form">
          <div className="form-popup">
            <button className="close-btn" onClick={() => setShowFormPopup(false)}>&times;</button>
            <h4 className="form-title">✅ Ready to Learn Something New?</h4>
            <p className="form-subtitle">Get updates, tips & resources!</p>

            <div className="form-grid">
              <input type="text" placeholder="Enter Your Full Name" />
              <input type="text" placeholder="Enter Your Phone No." />
              <input type="email" placeholder="Enter Your Email" />
              <select>
                <option>Choose your course</option>
                <option>Data Analytics</option>
                <option>SAP</option>
                <option>CAD/CAE</option>
              </select>
            </div>

            <div className="form-actions">
              <button className="btn btn-secondary">Cancel</button>
              <button className="btn btn-warning">Confirm</button>
            </div>
          </div>
        </div>)}


      <div className="courses-section">
        <h2>Our Courses</h2>
        <p className="courses-subtitleh">
          Build job-ready skills with expert-led, hands-on programs in today's most in-demand tech fields.
        </p>

        <div className="courses-grid">
          {[
            {
              title: 'Data Analytics',
              image: require('../../images/image 8.png'),
              desc: 'Learn to collect, analyze, and visualize data using Excel, SQL, Python, and Power BI. Gain practical skills in business intelligence,reporting, and data-driven decision-making.'
            },
            {
              title: 'SAP',
              image: require('../../images/image 9.png'),
              desc: 'Master SAP modules like FICO, MM, and SD. Learn real-world applications in finance, procurement, and supply chain to prepare for ERP roles in global companies'
            },
            {
              title: 'CAD/CAE',
              image: require('../../images/industry-work.png'),
              desc: 'Design and simulate real engineering projects using tools like AutoCAD, SolidWorks, and ANSYS. Ideal for aspiring mechanical civil, and structural engineers.'
            },
          ].map((course, index) => (
            <div className="course-cardhome" key={index}>
              <img src={course.image} alt={course.title} />

              <div className="course-overlay">
                <div className="course-content">
                  <h3 className="data-analytics-title">{course.title}</h3>
                  <p className="courses-subtitle">
                    {course.desc}
                  </p>
                </div>
                <div className="circle-arrow" onClick={() => handleNavigate(course.title)} style={{ cursor: 'pointer' }}>
                  <span className="arrow">→</span>
                </div>

                {/* <div className="circle-arrow">
                  <span className="arrow">→</span>
                </div> */}
              </div>
            </div>


          ))}
        </div>
      </div>
      {showDownloadPopup && (
        <div className="form-popupdownload-wrapper">
          <div className="form-popupdownload">
            <button className="close-btn" onClick={() => setShowDownloadPopup(false)}>
              &times;
            </button>
            <h4 className="form-title">✅ Ready to Learn Something New?</h4>
            <p className="form-subtitle">Get updates, tips & resources!</p>

            <div className="form-grid">
              <input type="text" placeholder="Enter Your Full Name" />
              <input type="text" placeholder="Enter Your Phone No." />
              <input type="email" placeholder="Enter Your Email" />
              <select>
                <option>Choose your course</option>
                <option>Data Analytics</option>
                <option>SAP</option>
                <option>CAD/CAE</option>
              </select>
            </div>

            <div className="form-actions">
              <button className="btn btn-warning" onClick={handleDownload}>
                Download
              </button>
            </div>
          </div>
        </div>
      )}
      <section className="mentors-section">
        <h2 className="mentors-title">Meet Your Mentors</h2>

        <div className="mentors-grid">
          {[
            {
              name: "Priya Mehta",
              title: "Senior Data Analyst",
              desc: "With 8+ years in analytics, Priya brings real-world business intelligence into every session.",
            },
            {
              name: "Rajesh Kumar",
              title: "SAP FICO Consultant",
              desc: "Rajesh simplifies complex SAP modules with practical insights from real enterprise projects.",
            },
            {
              name: "Sneha Patil",
              title: "Design Engineer",
              desc: "From 3D modeling to simulation, Sneha teaches tools engineers actually use in the industry.",
            },
          ].map((mentor, index) => (
            <div key={index} className="mentor-card">
              <img src={Avatar} alt={mentor.name} className="mentor-avatar" />
              <div>
                <h4>{mentor.name}</h4>
                <p className="mentor-title">{mentor.title}</p>
                <p className="mentor-desc">{mentor.desc}</p>
              </div>

              {/* Hover content (initially hidden) */}
              <div className="hover-overlay">
                {/* <p>With 8+ years in analytics, Priya brings real-world business intelligence into every session.</p> */}
                <a href="/" className="linkedin-link">
                  <img src="/linkedin-icon.png" alt="LinkedIn" className="linkedin-icon" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

          ))}
        </div>
      </section>

      <div className="scroll-wrapper overflow-hidden">
        <section className="bg-gray-50 py-12 px-4">
          <div className="max-w-6xl mx-auto">

            {/* Title + Button Section */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
              <div>
                <h2 className="fw-semibold">Our Testimonials</h2>
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
                </p>
              </div>
              {/* <button className="btn btn-outline-secondary btn-sm mt-3 mt-md-0">View All</button> */}
            </div>

            {/* Scrollable Testimonials */}
            <div className="scroll-track d-flex  flex-nowrap gap-4 pb-3">

              {/* Card 1 */}
              <div className="card shadow-sm custom-card" style={{ minWidth: '300px', flex: '0 0 auto' }}>
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="text-warning fs-3">❝</div>
                      <div className="text-warning small">★★★★★</div>
                    </div>
                    <p className="card-text small">
                      The Data Analytics course provided a perfect blend of theory and hands-on practice...
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                    <div className="d-flex align-items-center">
                      <img src={Avatar} alt="Dipak" className="rounded-circle me-2" width="40" height="40" />
                      <div>
                        <div className="fw-semibold small">Dipak</div>
                        <div className="text-muted small">Data Analytic @ TCS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card shadow-sm custom-card" style={{ minWidth: '300px', flex: '0 0 auto' }}>
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="text-warning fs-3">❝</div>
                      <div className="text-warning small">★★★★★</div>
                    </div>
                    <p className="card-text small">
                      I had no prior experience in analytics, but this course made it approachable...
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                    <div className="d-flex align-items-center">
                      <img src={Avatar} alt="Sakshi" className="rounded-circle me-2" width="40" height="40" />
                      <div>
                        <div className="fw-semibold small">Sakshi</div>
                        <div className="text-muted small">Data Analytic @ TCS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="card shadow-sm custom-card" >
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="text-warning fs-3">❝</div>
                      <div className="text-warning small">★★★★★</div>
                    </div>
                    <p className="card-text small">
                      The modules on Excel, SQL, and Python were incredibly helpful...
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                    <div className="d-flex align-items-center">
                      <img src={Avatar} alt="Ovi" className="rounded-circle me-2" width="40" height="40" />
                      <div>
                        <div className="fw-semibold small">Ovi</div>
                        <div className="text-muted small">Data Analytic @ TCS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeated Cards for Scrolling */}

              {/* Repeat Card 1 */}
              <div className="card shadow-sm custom-card" style={{ minWidth: '300px', flex: '0 0 auto' }}>
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="text-warning fs-3">❝</div>
                      <div className="text-warning small">★★★★★</div>
                    </div>
                    <p className="card-text small">
                      The Data Analytics course provided a perfect blend of theory and hands-on practice...
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                    <div className="d-flex align-items-center">
                      <img src={Avatar} alt="Dipak" className="rounded-circle me-2" width="40" height="40" />
                      <div>
                        <div className="fw-semibold small">Dipak</div>
                        <div className="text-muted small">Data Analytic @ TCS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeat Card 2 */}
              <div className="card shadow-sm custom-card" style={{ minWidth: '300px', flex: '0 0 auto' }}>
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="text-warning fs-3">❝</div>
                      <div className="text-warning small">★★★★★</div>
                    </div>
                    <p className="card-text small">
                      I had no prior experience in analytics, but this course made it approachable...
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                    <div className="d-flex align-items-center">
                      <img src={Avatar} alt="Sakshi" className="rounded-circle me-2" width="40" height="40" />
                      <div>
                        <div className="fw-semibold small">Sakshi</div>
                        <div className="text-muted small">Data Analytic @ TCS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeat Card 3 */}
              <div className="card shadow-sm custom-card" style={{ minWidth: '300px', flex: '0 0 auto' }}>
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="text-warning fs-3">❝</div>
                      <div className="text-warning small">★★★★★</div>
                    </div>
                    <p className="card-text small">
                      The modules on Excel, SQL, and Python were incredibly helpful...
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                    <div className="d-flex align-items-center">
                      <img src={Avatar} alt="Ovi" className="rounded-circle me-2" width="40" height="40" />
                      <div>
                        <div className="fw-semibold small">Ovi</div>
                        <div className="text-muted small">Data Analytic @ TCS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class=" py-5">
        <div class="container">
          {/* <!-- Section Title --> */}
          <div class="mb-4">
            <h3 class="fw-bold">Got Questions? Let’s Talk.</h3>
            <p class="text-muted small">Students From All Over India Trust Us</p>
          </div>

          {/* <!-- Form + Image Row --> */}
          <div class="row bg-white rounded shadow-sm p-4 g-4 align-items-center">
            {/* <!-- Form Column --> */}
            <div class="col-lg-6">
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label small">First Name</label>
                    <input type="text" class="form-control" placeholder="Enter First Name" />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small">Last Name</label>
                    <input type="text" class="form-control" placeholder="Enter Last Name" />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small">Email</label>
                    <input type="email" class="form-control" placeholder="Enter your Email" />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small">Phone</label>
                    <input type="tel" class="form-control" placeholder="Enter Phone Number" />
                  </div>
                  <div class="col-12">
                    <label class="form-label small">Course</label>
                    <select className="form-select" defaultValue="">
                      <option value="" disabled>Choose your course</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Web Development">Web Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                    </select>

                  </div>
                  <div class="col-12">
                    <label class="form-label small">Message</label>
                    <textarea class="form-control" rows="4" placeholder="Enter your Message here..."></textarea>
                  </div>
                  <div class="col-12">
                    <button class="btn text-white px-4 mt-2" style={{ backgroundColor: '#FF7F22' }}>Send Your Message</button>
                  </div>
                </div>
              </form>
            </div>

            {/* <!-- Image Column --> */}
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

      <section className="bg-white py-5">
        <div className="container">
          <div className="row g-4">
            {/* Left Side Title */}
            <div className="col-md-4">
              <h3 className="faq-heading">Frequently<br />Asked<br />Questions</h3>
            </div>

            {/* Accordion */}
            <div className="col-md-8">
              <div className="accordion" id="faqAccordion">
                {faqData.map((faq, idx) => (
                  <div key={idx} className="accordion-item border-0 mb-2 rounded shadow-sm">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button rounded faq-question ${openIndex === idx ? 'bg-white text-orange fw-semibold' : 'collapsed bg-light'}`}
                        type="button"
                        onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openIndex === idx ? 'show' : ''}`}>
                      <div className={`accordion-body faq-answer ${openIndex === idx ? 'border-start border-3 border-warning bg-light-subtle' : ''}`}>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


  );
}
