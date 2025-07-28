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
                        <p className="fw-bold">Introduction to SAP & ERP Fundamentals</p>
                        <ul className="list-unstyled small">
                            <li>Understanding ERP & SAP Overview<span className="text-muted">Core Lesson</span></li>
                            <li>SAP System Navigation & User Interface<span className="text-muted">Hands-On</span></li>
                             <li>Organizational Structure in SAP <span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Company & Chart of Accounts Setup <span className="text-muted">Project</span></li>
                        </ul>

                    </div>
                </div>


                {/* Month 2 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">02</h5>
                        <p className="fw-bold">SAP Financial Accounting (FI) – Basics</p>
                        <ul className="list-unstyled small">
                            <li>General Ledger & Account Groups<span className="text-muted">Core Lesson</span></li>
                            <li>Posting Transactions & Journal Entries <span className="text-muted">Hands-On</span></li>
                            <li>Accounts Payable & Receivable Basics<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Vendor & Customer Transactions<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                {/* Month 3 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">03</h5>
                        <p className="fw-bold">SAP Controlling (CO) – Cost Management</p>
                        <ul className="list-unstyled small">
                            <li>Cost Centers & Internal Orders<span className="text-muted">Core Lesson</span></li>
                            <li>Cost Element Accounting<span className="text-muted">Hands-On</span></li>
                            <li>Cost Allocations & Reporting<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Cost Tracking Setup<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                {/* Month 4 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">04</h5>
                        <p className="fw-bold">SAP Materials Management (MM)</p>
                        <ul className="list-unstyled small">
                            <li>Procure-to-Pay Cycle<span className="text-muted">Core Lesson</span></li>
                            <li>Material & Vendor Master Data<span className="text-muted">Hands-On</span></li>
                            <li>Purchase Orders & Goods Receipt<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – P2P Cycle Simulation<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                 <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">05</h5>
                        <p className="fw-bold">Python for Data Analysis</p>
                        <ul className="list-unstyled small">
                            <li>Introduction to SAP HANA<span className="text-muted">Core Lesson</span></li>
                            <li>Using HANA Studio<span className="text-muted">Hands-On</span></li>
                            <li>Real-Time Analytics in SAP<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Financial Dashboard in HANA<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                 <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">06</h5>
                        <p className="fw-bold">SAP HANA & Real-Time Reporting</p>
                        <ul className="list-unstyled small">
                            <li>Project Planning & Scope Definition<span className="text-muted">Core Lesson</span></li>
                            <li>System Configuration & Testing<span className="text-muted">Hands-On</span></li>
                            <li>End-to-End Capstone Project<span className="text-muted">Practice Session</span></li>
                            <li>Resume Building & Interview Practice<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
