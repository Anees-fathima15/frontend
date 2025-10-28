import React, { useState } from "react";
import axios from "axios";

export default function SearchEmployee() {
  const [id, setId] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = async () => {
    try {
      const res = await axios.get(`https://backend-yiwf.onrender.com/api/employees/search/${id}`);
      setResult(JSON.stringify(res.data, null, 2));
    } catch (err) {
      setResult(err.response?.data?.message || "Error searching employee");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Employee</h2>
      <input placeholder="Enter EmployeeID" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <textarea rows="8" cols="50" readOnly value={result}></textarea>
    </div>
  );
}
