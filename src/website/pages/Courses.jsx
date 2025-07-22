// src/pages/Courses.jsx
import React from 'react';
import dataAnalyticsImg from '../../images/Image (1).png';
import dataAnalyticsImg1 from '../../images/Image (2).png';
import dataAnalyticsImg3 from '../../images/Image (3).png';

import sapImg1 from '../../images/Image (4).png';
import sapImg2 from '../../images/Image (5).png';
import sapImg3 from '../../images/Image (10).png';
import sapImg4 from '../../images/Image (6).png';
import sapImg5 from '../../images/Image (7).png';
import sapImg6 from '../../images/Image (8).png';
import '../../website/css/Courses.css'; // ✅ CSS is imported

export default function Courses() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      {/* Header */}
      {/* <div className="courses-container">
        <h2 className="heading">Explore Our Industry-Ready Tech Courses</h2>
        <p className="description">
          Welcome to EdTech’s course catalog. Our 6-month, beginner-friendly programs in Data Analytics, SAP, and CAD/CAE are designed to give you practical skills and career-focused training. Learn from industry experts, work on real projects, and build your future—one course at a time.
        </p>
      </div> */}
      <div className="header-section">
        <div className="header-left">
          <h2 className="course-heading">Explore Our Industry-Ready Tech Courses</h2>
        </div>
        <div className="header-right">
          <p className="course-description">
            Welcome to EdTech’s course catalog. Our 6-month, beginner-friendly programs in Data Analytics, SAP, and CAD/CAE are designed to give you practical skills and career-focused training. Learn from industry experts, work on real projects, and build your future—one course at a time.
          </p>
        </div>
      </div>
      <hr className="mb-6" />

  

      {/* === Course Card: Data Analytics === */}
      <div  className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-12">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Data Analytics</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Learn to collect, clean, and analyze data using tools like Excel, SQL, Python, and Power BI. Gain practical skills for business intelligence and data-driven decision making.
          </p>
        </div>

        {/* <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 mb-4">
          <img src={dataAnalyticsImg} alt="Data Analytics 1" className="course-image" />
          <img src={dataAnalyticsImg1} alt="Data Analytics 2" className="course-image" />
          <img src={dataAnalyticsImg3} alt="Data Analytics 3" className="course-image" />
        </div> */}
        <div className="flex flex-col md:flex-row gap-6 mb-4 mx-auto custom-container">
          <img src={dataAnalyticsImg} alt="Data Analytics 1" className="custom-course-image" />
          <img src={dataAnalyticsImg1} alt="Data Analytics 2" className="custom-course-image" />
          <img src={dataAnalyticsImg3} alt="Data Analytics 3" className="custom-course-image" />
        </div>



        <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 mb-4">
          <span className="bg-gray-200 px-3 py-1 rounded-full">4 Weeks</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full">Beginner</span>
          <span className="ml-auto text-gray-500">By Sagar</span>
        </div>

        {/* <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Curriculum</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Introduction to Data Analytics',
              'Excel & Google Sheets for Analysis',
              'SQL for Data Management',
              'Python for Data Science',
              'Data Visualization with Power BI'
            ].map((item, index) => (
              <div key={index} className="bg-white p-3 rounded shadow text-center">
                <p className="text-orange-500 font-bold text-xl">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-1 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div> */}
        <div className="curriculum-container">
          <h4 className="curriculum-title">Curriculum</h4>
          <div className="curriculum-grid-wrapper">
            <div className="curriculum-grid">
              {[
                'Introduction to Data Analytics',
                'Excel & Google Sheets for Analysis',
                'SQL for Data Management',
                'Python for Data Science',
                'Data Visualization with Power BI',
                'Data Visualization with Power BI'
              ].map((item, index) => (
                <div key={index} className="curriculum-box">
                  <p className="curriculum-number">{String(index + 1).padStart(2, '0')}</p>
                  <p className="curriculum-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>



      </div>

      {/* === Course Card: SAP === */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">SAP</h3>
          <p className="mt-1 text-gray-600 text-sm">
            Master SAP modules like FICO, MM, and SD. Learn how enterprise systems work in finance, procurement,
            and supply chain — and prepare for ERP roles.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 mb-4">
          <img src={sapImg1} alt="SAP 1" className="course-image" />
          <img src={sapImg2} alt="SAP 2" className="course-image" />
          <img src={sapImg3} alt="SAP 3" className="course-image" />
        </div>

        <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 mb-4">
          <span className="bg-gray-200 px-3 py-1 rounded-full">8 Weeks</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full">Intermediate</span>
          <span className="ml-auto text-gray-500">By David Brown</span>
          <button className="ml-4 px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-100 text-sm">
            View Course
          </button>
        </div>
        <div className="curriculum-container">
          <h4 className="curriculum-title">Curriculum</h4>
          <div className="curriculum-grid-wrapper">
            <div className="curriculum-grid">
              {[
                'Overview of ERP & SAP',
                'SAP FICO – Financial Accounting',
                'SAP MM – Materials Management',
                'SAP SD – Sales & Distribution',
                'SAP Integration & Reporting'
              ].map((item, index) => (
                <div key={index} className="curriculum-box" style={{ width: '190px' }}>
                  <p className="curriculum-number">{String(index + 1).padStart(2, '0')}</p>
                  <p className="curriculum-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Curriculum</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Overview of ERP & SAP',
              'SAP FICO – Financial Accounting',
              'SAP MM – Materials Management',
              'SAP SD – Sales & Distribution',
              'SAP Integration & Reporting'
            ].map((item, index) => (
              <div key={index} className="bg-white p-3 rounded shadow text-center">
                <p className="text-orange-500 font-bold text-xl">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-1 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* === CAD/CAE Card === */}
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md mt-12">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-semibold">CAD/CAE</h2>
            <p className="text-gray-600 mt-1">
              Design and simulate engineering projects using AutoCAD, SolidWorks, and ANSYS. Ideal for mechanical, civil, and structural engineering aspirants.
            </p>
          </div>
          <button className="px-4 py-1 text-sm border border-gray-400 rounded-md hover:bg-gray-100">
            View Course
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <img src={sapImg4} alt="cad" className="course-image" />
          <img src={sapImg5} alt="solidworks" className="course-image" />
          <img src={sapImg6} alt="ansys" className="course-image" />
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-md">8 Weeks</span>
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-md">Intermediate</span>
          </div>
          <p className="text-sm text-gray-500">By David Brown</p>
        </div>
        <div className="curriculum-container">
          <h4 className="curriculum-title">Curriculum</h4>
          <div className="curriculum-grid-wrapper">
            <div className="curriculum-grid">
              {[
                '2D Drafting with AutoCAD',
                '3D Modeling in SolidWorks',
                'Structural Analysis with ANSYS',
                'Real-world Design Projects',
                'Design Validation & Final Presentation'
              ].map((item, index) => (
                <div key={index} className="curriculum-box" style={{ width: '190px' }}>
                  <p className="curriculum-number">{String(index + 1).padStart(2, '0')}</p>
                  <p className="curriculum-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
