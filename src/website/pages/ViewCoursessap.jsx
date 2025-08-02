import React from 'react';
import courseImage from '../../images/Container (1).png';

import '../../website/css/viewcourses.css';

export default function ViewCoursessap() {
    return (
        <div className="container py-5">

            {/* === Course Header === */}
            <div className="course-header mb-5">
                <div className="header-section">
                    <div className="header-left">
                        <h2 className="course-heading">SAP</h2>
                    </div>
                    <div className="header-right">
                        <p className="course-description">
                        Master core SAP modules like FICO, MM, and HANA. Learn how to manage business processes in finance, procurement, and reporting through real-world ERP simulations and hands-on SAP training.
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
                        <h5 className="text-orange fw-bold">01</h5>
                         <p className="fw-bold">AP Basics & Navigation</p>
                        <ul className="list-unstyled small">
                            <li>SAP Intro – ERP, Modules<span className="text-muted">Core Lesson</span></li>
                            <li>System Navigation – User Roles<span className="text-muted">Hands-On</span></li>
                            <li>Master Data – SAP Setup<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Logins & Transactions<span className="text-muted">Project</span></li>
                        </ul>

                    </div>
                </div>


                {/* Month 2 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">02</h5>
                        <p className="fw-bold">SAP FICO</p>
                        <ul className="list-unstyled small">
                            <li>GL Accounting – Structure<span className="text-muted">Core Lesson</span></li>
                            <li>AP/AR Processes – Invoicing<span className="text-muted">Hands-On</span></li>
                            <li>Cost Center – Internal Orders<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Journal Entries<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                {/* Month 3 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">03</h5>
                        <p className="fw-bold">SAP MM</p>
                        <ul className="list-unstyled small">
                            <li>Procurement – Purchase Orders<span className="text-muted">Core Lesson</span></li>
                            <li>Inventory – Stock Overview<span className="text-muted">Hands-On</span></li>
                            <li>Material Master Data – Setup<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Procurement Flow<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                {/* Month 4 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">04</h5>
                        <p className="fw-bold">SAP SD</p>
                        <ul className="list-unstyled small">
                            <li>Sales Process – Order Cycle<span className="text-muted">Core Lesson</span></li>
                            <li>Delivery & Billing Basics<span className="text-muted">Hands-On</span></li>
                            <li>Pricing – Availability Check<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Order to Cash<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                 <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">05</h5>
                        <p className="fw-bold">SAP ABAP</p>
                        <ul className="list-unstyled small">
                            <li>ABAP Basics – Structure, Syntax<span className="text-muted">Core Lesson</span></li>
                            <li>Data Dictionary – Tables<span className="text-muted">Hands-On</span></li>
                            <li>Reports – Simple Programs<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – ABAP Report<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                 <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">06</h5>
                        <p className="fw-bold">Integration & Career</p>
                        <ul className="list-unstyled small">
                            <li>Modules Integration – Examples<span className="text-muted">Core Lesson</span></li>
                            <li>Resume – SAP Portfolio<span className="text-muted">Hands-On</span></li>
                            <li>Mock Interviews – SAP Focus<span className="text-muted">Practice Session</span></li>
                            <li>Capstone Project – Presentation<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
