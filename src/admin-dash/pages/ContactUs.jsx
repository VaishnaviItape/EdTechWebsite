import React, { useEffect, useState } from 'react';

const ContactUs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with actual API
    fetch('/api/contact-submissions')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('Error fetching data:', err));
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
                  <td>{entry.phone}</td>
                  <td>{entry.course}</td>
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
