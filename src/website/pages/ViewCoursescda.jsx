import React from 'react';
import courseImage from '../../images/Container (2).png';

import '../../website/css/viewcourses.css';

export default function ViewCoursescda() {
    return (
        <div className="container py-5">

            {/* === Course Header === */}
            <div className="course-header mb-5">
                <div className="header-section">
                    <div className="header-left">
                        <h2 className="course-heading">CAD/CAE</h2>
                    </div>
                    <div className="header-right">
                        <p className="course-description">
                            Design, simulate, and analyze engineering components using tools like AutoCAD, SolidWorks, CATIA, and ANSYS. Learn industry-standard techniques for product design, 3D modeling, and structural analysis.
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
                        <p className="fw-bold">Introduction to Design & Drafting Tools</p>
                        <ul className="list-unstyled small">
                            <li>Overview of CAD/CAE & Industry Use Cases<span className="text-muted">Core Lesson</span></li>
                            <li>AutoCAD Basics – Interface, Tools, Layers<span className="text-muted">Hands-On</span></li>
                            <li>2D Drawing & Dimensioning Techniques<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Floor Plan Drafting<span className="text-muted">Project</span></li>
                        </ul>

                    </div>
                </div>


                {/* Month 2 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">02</h5>
                        <p className="fw-bold">3D Modelling with SolidWorks / CATIA</p>
                        <ul className="list-unstyled small">
                            <li>3D Concepts & Parametric Modeling<span className="text-muted">Core Lesson</span></li>
                            <li>Part Design & Assembly Tools<span className="text-muted">Hands-On</span></li>
                            <li>Creating Technical Drawings from 3D Models<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Mechanical Assembly Design<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                {/* Month 3 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">03</h5>
                        <p className="fw-bold">Advanced CAD Features & Surface Modeling</p>
                        <ul className="list-unstyled small">
                            <li>Sketching Constraints & Feature Tools<span className="text-muted">Core Lesson</span></li>
                            <li>Surface Modeling & Sheet Metal Design<span className="text-muted">Hands-On</span></li>
                            <li>Working with Complex Assemblies<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Product Design Draft<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                {/* Month 4 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">04</h5>
                        <p className="fw-bold">Introduction to CAE – Simulation & Analysis</p>
                        <ul className="list-unstyled small">
                            <li>Basics of CAE, FEA & Analysis Tools<span className="text-muted">Core Lesson</span></li>
                            <li>Stress, Strain & Boundary Conditions<span className="text-muted">Hands-On</span></li>
                            <li>Running Simulations in ANSYS or SolidWorks<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Static Structural Analysis<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">05</h5>
                        <p className="fw-bold">Real-World Applications & Industry Standards</p>
                        <ul className="list-unstyled small">
                            <li>Design for Manufacturing (DFM) Basics<span className="text-muted">Core Lesson</span></li>
                            <li>Industry Standards, GD&T & Tolerances<span className="text-muted">Hands-On</span></li>
                            <li>Working on Client-Spec Requirements<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Reverse Engineering Challenge<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">06</h5>
                        <p className="fw-bold">Capstone Project & Career Preparation</p>
                        <ul className="list-unstyled small">
                            <li>Project Planning & Tool Selection<span className="text-muted">Core Lesson</span></li>
                            <li>CAD Modeling + CAE Integration<span className="text-muted">Hands-On</span></li>
                            <li>Capstone Project – Full Product Lifecycle<span className="text-muted">Practice Session</span></li>
                            <li>Portfolio Finalization & Interview Prep<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
