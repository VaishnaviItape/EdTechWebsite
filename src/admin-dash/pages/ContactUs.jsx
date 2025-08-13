import React, { useEffect, useState } from 'react';

const ContactUs = () => {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");

    fetch("http://amkore7-001-site1.ltempurl.com/api/ContactUs/company/EdTech", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Pagination logic
  const totalRecords = data.length;
  const totalPages = Math.ceil(totalRecords / pageSize);
  const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Contact Details</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Course</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((entry, index) => (
                <tr key={index}>
                  <td>{(page - 1) * pageSize + index + 1}</td>
                  <td>{entry.firstName}</td>
                  <td>{entry.lastName}</td>
                  <td>{entry.email}</td>
                  <td>{entry.phoneNumber}</td>
                  <td>{entry.service}</td>
                  <td>{entry.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination + Info */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mt-3">
        {/* Pagination buttons */}
        <nav>
          <ul className="pagination mb-0">
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setPage(page - 1)}>Prev</button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i} className={`page-item ${page === i + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => setPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setPage(page + 1)}>Next</button>
            </li>
          </ul>
        </nav>

        {/* Records Info + Page Size */}
        <div className="d-flex align-items-center gap-3">
          <div className="text-muted small">
            Showing <strong>{(page - 1) * pageSize + 1}</strong> - 
            <strong>{Math.min(page * pageSize, totalRecords)}</strong> of 
            <strong>{totalRecords}</strong> records
          </div>
          <select
            className="form-select"
            style={{ width: "auto" }}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value={10}>10 items per page</option>
            <option value={25}>25 items per page</option>
            <option value={50}>50 items per page</option>
            <option value={100}>100 items per page</option>
            <option value={500}>500 items per page</option>
          </select>
        </div>
      </div>
    </div>
  );                                                                                                                                                                                        
};

export default ContactUs;
