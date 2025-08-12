import React, { useEffect, useState } from 'react';

const ContactUs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken"); // get token from storage

    fetch("http://amkore7-001-site1.ltempurl.com/api/ContactUs/company/EdTech", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // pass token here
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
            {data && data.length > 0 ? (
              data.map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
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
    </div>
  );
};

export default ContactUs;
