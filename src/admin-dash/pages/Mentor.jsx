import React, { useEffect, useState } from "react";

const Mentor = () => {
    const [mentors, setMentors] = useState([]);
    const [showDrawer, setShowDrawer] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        linkedInId: "",
        photo: null,
    });
    const [editingId, setEditingId] = useState(null);

    const token = sessionStorage.getItem("authToken");

    // Fetch mentor data
    const fetchMentors = () => {
        fetch("http://amkore7-001-site1.ltempurl.com/api/Mentor", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then((data) => setMentors(data))
            .catch((err) => console.error("Error fetching mentors:", err));
    };

    useEffect(() => {
        fetchMentors();
    }, []);

    // Handle form change
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Handle add/update mentor
    const handleSubmit = (e) => {
        e.preventDefault();

        const method = editingId ? "PUT" : "POST";
        const url = editingId
            ? `http://amkore7-001-site1.ltempurl.com/api/Mentor/${editingId}`
            : "http://amkore7-001-site1.ltempurl.com/api/Mentor";

        const formPayload = new FormData();
        formPayload.append("name", formData.name || "");
        formPayload.append("description", formData.description || "");
        formPayload.append("linkedInId", formData.linkedInId || "");
        if (formData.photo) formPayload.append("photo", formData.photo);

        fetch(url, {
            method,
            headers: { Authorization: `Bearer ${token}` },
            body: formPayload,
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to save mentor");
                return res.json();
            })
            .then(() => {
                fetchMentors();
                setShowDrawer(false);
                setFormData({ name: "", description: "", linkedInId: "", photo: null });
                setEditingId(null);
            })
            .catch((err) => console.error(err));
    };

    // Handle delete
    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete this mentor?")) return;

        fetch(`http://amkore7-001-site1.ltempurl.com/api/Mentor/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to delete");
                fetchMentors();
            })
            .catch((err) => console.error(err));
    };

    // Handle edit
    const handleEdit = (mentor) => {
        setFormData({
            name: mentor.name || "",
            description: mentor.description || "",
            linkedInId: mentor.linkedInId || "",
            photo: null,
        });
        setEditingId(mentor.id);
        setShowDrawer(true);
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Mentor List</h3>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setShowDrawer(true);
                        setEditingId(null);
                        setFormData({ name: "", description: "", linkedInId: "", photo: null });
                    }}
                >
                    + Add Mentor
                </button>
            </div>

            {/* Table */}
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>LinkedIn</th>
                            <th>Photo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mentors.length > 0 ? (
                            mentors.map((mentor, index) => (
                                <tr key={mentor.id}>
                                    <td>{index + 1}</td>
                                    <td>{mentor.name}</td>
                                    <td>{mentor.description}</td>
                                    <td>
                                        {mentor.linkedInId ? (
                                            <a href={mentor.linkedInId} target="_blank" rel="noreferrer">
                                                LinkedIn
                                            </a>
                                        ) : (
                                            "-"
                                        )}
                                    </td>
                                    <td>
                                        {mentor.photo ? (
                                            <img
                                                src={`data:image/jpeg;base64,${mentor.photo}`}
                                                alt="mentor"
                                                width="50"
                                                height="50"
                                            />
                                        ) : (
                                            "-"
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-warning btn-sm me-2"
                                            onClick={() => handleEdit(mentor)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(mentor.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">
                                    No mentors available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Drawer (Bootstrap Offcanvas) */}
            <div
                className={`offcanvas offcanvas-end ${showDrawer ? "show" : ""}`}
                tabIndex="-1"
                style={{ visibility: showDrawer ? "visible" : "hidden", width: "400px" }}
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">
                        {editingId ? "Edit Mentor" : "Add Mentor"}
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setShowDrawer(false)}
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name *</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                                name="description"
                                className="form-control"
                                value={formData.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">LinkedIn ID</label>
                            <input
                                type="text"
                                name="linkedInId"
                                className="form-control"
                                value={formData.linkedInId}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Photo</label>
                            <input
                                type="file"
                                name="photo"
                                className="form-control"
                                accept="image/*"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-success w-50 me-2">
                                {editingId ? "Update" : "Save"}
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary w-50"
                                onClick={() => {
                                    setShowDrawer(false);
                                    setFormData({ name: "", description: "", linkedInId: "", photo: null });
                                    setEditingId(null);
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Mentor;
