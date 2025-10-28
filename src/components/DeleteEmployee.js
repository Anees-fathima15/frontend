import React, { useState } from "react";
import axios from "axios";

export default function DeleteEmployee() {
  const [id, setId] = useState("");

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`https://backend-yiwf.onrender.com/api/employees/delete/${id}`);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error deleting employee");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Delete Employee</h2>
      <input placeholder="Enter EmployeeID" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
