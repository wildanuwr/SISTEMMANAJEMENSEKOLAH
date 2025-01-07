import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"; // Tambahkan Outlet
import Dashboard from "./Dashboard/Dashboard";
import Siswa from "./Dashboard/Siswa";
import Home from "./Layout/Home";
import Navbar from "./Component/Navbar";
import About from "./Layout/Tentang";
import Contact from "./Layout/Kontak";
import Login from "./Layout/Login";
import Register from "./Layout/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rute dengan Layout yang memiliki Navbar */}
        <Route path="/" element={<LayoutWithNavbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/siswa" element={<Siswa />} />
        {/* Tambahkan route lainnya di sini */}
      </Routes>
    </Router>
  );
};

const LayoutWithNavbar = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default App;
