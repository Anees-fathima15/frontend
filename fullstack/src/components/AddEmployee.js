import React, { useState } from "react";
import axios from "axios";

export default function AddEmployee() {
  const [form, setForm] = useState({
    EmployeeName: "",
    EmployeeID: "",
    Designation: "",
    Department: "",
    JoiningDate: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend-yiwf.onrender.com/api/employees/add", form);
      alert("Employee added successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Error adding employee");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((key) => (
          <div key={key}>
            <label>{key}: </label>
            <input
              type={key === "JoiningDate" ? "date" : "text"}
              name={key}
              value={form[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
