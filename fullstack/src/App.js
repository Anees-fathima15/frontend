import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import SearchEmployee from "./components/SearchEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import DeleteEmployee from "./components/DeleteEmployee";
import ViewAllEmployees from "./components/ViewAllEmployees";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", backgroundColor: "#ddd" }}>
        <Link to="/" style={{ margin: "10px" }}>Add Employee</Link>
        <Link to="/search" style={{ margin: "10px" }}>Search</Link>
        <Link to="/update" style={{ margin: "10px" }}>Update</Link>
        <Link to="/delete" style={{ margin: "10px" }}>Delete</Link>
        <Link to="/view" style={{ margin: "10px" }}>View All</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AddEmployee />} />
        <Route path="/search" element={<SearchEmployee />} />
        <Route path="/update" element={<UpdateEmployee />} />
        <Route path="/delete" element={<DeleteEmployee />} />
        <Route path="/view" element={<ViewAllEmployees />} />
      </Routes>
    </BrowserRouter>
  );
}
