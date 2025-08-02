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
                        <p className="fw-bold">CAD 2D Basics</p>
                        <ul className="list-unstyled small">
                            <li>AutoCAD Basics – Interface, Tools, Layers<span className="text-muted">Core Lesson</span></li>
                            <li>2D Drafting – Shapes, Dimensioning<span className="text-muted">Hands-On</span></li>
                            <li>Editing – Blocks, Templates<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – 2D Drawing<span className="text-muted">Project</span></li>
                        </ul>

                    </div>
                </div>


                {/* Month 2 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">02</h5>
                        <p className="fw-bold">3D Modeling</p>
                        <ul className="list-unstyled small">
                            <li>SolidWorks/CATIA – 3D Basics<span className="text-muted">Core Lesson</span></li>
                            <li>Part/Assembly – Constraints<span className="text-muted">Hands-On</span></li>
                            <li>Surface Modeling – Sheet Metal<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – 3D Assembly<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                {/* Month 3 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">03</h5>
                        <p className="fw-bold">Product Design</p>
                        <ul className="list-unstyled small">
                            <li>Assembly – Exploded View<span className="text-muted">Core Lesson</span></li>
                            <li>BOM – Drafting<span className="text-muted">Hands-On</span></li>
                            <li>Sheet Metal – Flat Patterns<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – Detail Drawing<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                {/* Month 4 */}
                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">04</h5>
                        <p className="fw-bold">CAE Fundamentals</p>
                        <ul className="list-unstyled small">
                            <li>ANSYS/Hypermesh – FEA Setup<span className="text-muted">Core Lesson</span></li>
                            <li>Meshing – 2D/3D Geometries<span className="text-muted">Hands-On</span></li>
                            <li>Analysis – Static, Modal, Thermal<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – FEA<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">05</h5>
                        <p className="fw-bold">CAM & CNC</p>
                        <ul className="list-unstyled small">
                            <li>CAM Intro – Toolpaths<span className="text-muted">Core Lesson</span></li>
                            <li>CNC Basics – Milling/Turning<span className="text-muted">Hands-On</span></li>
                            <li>Simulation – G-code<span className="text-muted">Practice Session</span></li>
                            <li>Mini Project – CAM Process<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6 ">
                    <div className="month-card p-3 shadow-sm rounded border">
                        <h5 className="text-orange fw-bold">06</h5>
                        <p className="fw-bold">Integration & Career</p>
                        <ul className="list-unstyled small">
                            <li>Workflow – CAD/CAE/CAM<span className="text-muted">Core Lesson</span></li>
                            <li>Capstone Project – Product Design<span className="text-muted">Hands-On</span></li>
                            <li>Resume – Portfolio Creation<span className="text-muted">Practice Session</span></li>
                            <li>Mock Interviews – Career Prep<span className="text-muted">Project</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
