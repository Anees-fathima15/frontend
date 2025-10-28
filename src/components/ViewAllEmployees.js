import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ViewAllEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("https://backend-yiwf.onrender.com/api/employees/all")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Employees</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Joining Date</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => (
              <tr key={e.EmployeeID}>
                <td>{e.EmployeeName}</td>
                <td>{e.EmployeeID}</td>
                <td>{e.Designation}</td>
                <td>{e.Department}</td>
                <td>{e.JoiningDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
