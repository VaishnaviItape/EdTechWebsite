import React from 'react';
import courseImage from '../../images/Container.png';
import '../../website/css/viewcourses.css';

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
                <img
                    src={courseImage}
                    alt="Data Analytics Course Preview"
                    className="img-fluid rounded shadow-sm"
                />
                {/* Play Icon Overlay */}
                <div className="play-icon position-absolute top-50 start-50 translate-middle">
                    <span style={{ fontSize: '3rem', color: '#fff' }}>&#9658;</span>
                </div>
            </div>

            {/* === Monthly Breakdown Heading === */}
            <h4 className="fw-bold mt-4 mb-4">What You’ll Learn Month by Month</h4>

            {/* === Monthly Cards === */}
            <div className="row g-4">
                {/* Month 1 */}
                <div className="col-md-6">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">02</h5>
                        <p className="fw-bold">SQL for Data Handling</p>
                        <ul className="list-unstyled small">
                            <li>Descriptive Statistics in Excel <span className="text-muted">Core Lesson</span></li>
                            <li>Working with Large Datasets <span className="text-muted">Hands-On</span></li>
                            <li>Advanced Excel Features <span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Marketing Campaign Analysis <span className="text-muted">Project</span></li>
                        </ul>

                    </div>
                </div>


                {/* Month 2 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">02</h5>
                        <p className="fw-bold">SQL for Data Handling</p>
                        <ul className="list-unstyled small">
                            <li>Descriptive Statistics in Excel <span className="text-muted">Core Lesson</span></li>
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
                        <p className="fw-bold">Introduction to SQL for Data Analysis</p>
                        <ul className="list-unstyled small">
                            <li>Getting Started with Databases <span className="text-muted">Core Lesson</span></li>
                            <li>Basic SQL Queries <span className="text-muted">Hands-On</span></li>
                            <li>Intermediate SQL <span className="text-muted">Practice Session</span></li>
                            <li>Mini Project - Customer Order Database <span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                {/* Month 4 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">04</h5>
                        <p className="fw-bold">Data Visualization & Storytelling</p>
                        <ul className="list-unstyled small">
                            <li>Principles of Data Visualization <span className="text-muted">Core Lesson</span></li>
                            <li>Using Tableau or Power BI <span className="text-muted">Hands-On</span></li>
                            <li>Building Interactive Dashboards <span className="text-muted">Practice Session</span></li>
                            <li>Mini Project - Business KPI Dashboard <span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
