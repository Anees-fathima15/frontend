import React, { useState } from "react";
import axios from "axios";

export default function UpdateEmployee() {
  const [id, setId] = useState("");
  const [designation, setDesignation] = useState("");

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`https://backend-yiwf.onrender.com/api/employees/update/${id}`, {
        Designation: designation,
      });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error updating employee");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Employee</h2>
      <input placeholder="Enter EmployeeID" value={id} onChange={(e) => setId(e.target.value)} />
      <input placeholder="New Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
