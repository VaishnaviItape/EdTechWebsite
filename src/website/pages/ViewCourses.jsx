import React from 'react';
import courseImage from '../../images/Container.png';
import '../../website/css/viewcourses.css';
import courseVideo from '../../images/data-analytics.mp4';

export default function ViewCourses() {
    return (
        <div className="container py-5">

            {/* === Course Header === */}
            <div className="course-header mb-5">
                <div className="header-section">
                    <div className="header-left">
                        <h2 className="course-heading">Data Analytics</h2>
                    </div>
                    <div className="header-right">
                        <p className="course-description">
                            Learn to collect, clean, and analyze data using tools like Excel, SQL, Python, and Power BI.
                            Gain practical skills for business intelligence and data-driven decision making.
                        </p>
                    </div>
                </div>
                <hr className="mb-6" />
            </div>

            {/* === Video Preview Section === */}
            <div className="video-preview mb-5 position-relative">
                <video
                    className="img-fluid rounded shadow-sm"
                    controls
                    poster={courseImage} // Optional thumbnail before play
                >
                    <source src={courseVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* <img
                    src={courseImage}
                    alt="Data Analytics Course Preview"
                    className="img-fluid rounded shadow-sm"
                /> */}
                {/* Play Icon Overlay */}
                {/* <div className="play-icon position-absolute top-50 start-50 translate-middle">
                    <span style={{ fontSize: '3rem', color: '#fff' }}>&#9658;</span>
                </div> */}
            </div>

            {/* === Monthly Breakdown Heading === */}
            <h4 className="fw-bold mt-4 mb-4">What You’ll Learn Month by Month</h4>

            {/* === Monthly Cards === */}
            <div className="row g-4">
                {/* Month 1 */}
                <div className="col-md-6">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">01</h5>
                        <p className="fw-bold">Data Analytics Basics & Excel </p>
                        <ul className="list-unstyled small">
                            <li>Data Analytics Overview – Concepts<span className="text-muted">Core Lesson</span></li>
                            <li>Excel Formulas – Functions & Logic<span className="text-muted">Hands-On</span></li>
                            <li>Excel Visualization – Charts, Graphs<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Sales Data Excel<span className="text-muted">Project</span></li>
                        </ul>

                    </div>
                </div>


                {/* Month 2 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">02</h5>
                        <p className="fw-bold">Advanced Excel</p>
                        <ul className="list-unstyled small">
                            <li>Data Cleaning – Sorting, Filtering<span className="text-muted">Core Lesson</span></li>
                            <li>Working with Large Datasets <span className="text-muted">Hands-On</span></li>
                            <li>Advanced Excel Features <span className="text-muted">Practice Session</span></li>
                            <li>Mini Project - Marketing Campaign Analysis <span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                {/* Month 3 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">03</h5>
                        <p className="fw-bold">SQL for Data Analysis</p>
                        <ul className="list-unstyled small">
                            <li>SQL Basics – SELECT, Filters<span className="text-muted">Core Lesson</span></li>
                            <li>Joins & Data Import/Export<span className="text-muted">Hands-On</span></li>
                            <li>SQL Data Management – Update, Delete <span className="text-muted">Practice Session</span></li>
                            <li> Mini Project – SQL Database <span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                {/* Month 4 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">04</h5>
                        <p className="fw-bold">Power BI & Dashboards</p>
                        <ul className="list-unstyled small">
                            <li>Power BI Intro – Data Connect<span className="text-muted">Core Lesson</span></li>
                            <li>Data Visuals – Charts, Tables<span className="text-muted">Hands-On</span></li>
                            <li>Interactive Dashboards – Setup<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Power BI Report<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">05</h5>
                        <p className="fw-bold">Python for Data Analysis</p>
                        <ul className="list-unstyled small">
                            <li>Python Setup – Syntax, Data Types<span className="text-muted">Core Lesson</span></li>
                            <li> Data Analysis – Pandas, Numpy<span className="text-muted">Hands-On</span></li>
                            <li>Data Cleaning – Scripts, Methods<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Data Insights<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">06</h5>
                        <p className="fw-bold">Capstone & Career Prep</p>
                        <ul className="list-unstyled small">
                            <li> Capstone Project – Data Pipeline<span className="text-muted">Core Lesson</span></li>
                            <li>Resume – Portfolio <span className="text-muted">Hands-On</span></li>
                            <li>Mock Interviews – Q&A<span className="text-muted">Practice Session</span></li>
                            <li>Final Presentation – Feedback<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
