import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/css/Sidebar.css"; // Import file CSS
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import imgUAJY from "../assets/images/logo uajy2.png";
import iconAnggota from "../assets/icons/icon_anggota.png";
import icondashboard from "../assets/icons/icon_dashboard.png";
import iconkelompok from "../assets/icons/icon_kelompok.png";
import { Navigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false); // State untuk mengontrol Offcanvas
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* Tombol untuk membuka sidebar */}
      <Button variant="primary" onClick={handleShow} className="m-3 ps-4 pe-4">
        ☰ Menu
      </Button>
      <Button variant="danger" onClick={() => navigate("/login")} className="ms-0 m-3 ps-4 pe-4">
        Keluar
      </Button>
      {/* Sidebar Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="start" style={{ backgroundColor: "#0056B3", width: "36vh" }}>
        {" "}
        {/* Sidebar muncul dari kiri */}
        <Offcanvas.Header>
          <Offcanvas.Title>
            <div className="sidebar-header">
              <img src={imgUAJY} alt="Logo" className="sidebar-logo" />
              <h3>Admin Panel</h3>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr className="my-0 ms-4 me-4" style={{ borderColor: "#ffac24", borderWidth: "2px", opacity: "100%" }} />
        <Offcanvas.Body>
          <ul className="sidebar-menu">
            <li onClick={() => navigate("/dashboard")}>
              <img src={iconAnggota} alt="Dashboard" className="menu-icon" />
              <span className="ms-2">Beranda</span>
            </li>
            <li onClick={() => navigate("/researchgroupmanagement")}>
              <img src={icondashboard} alt="Research" className="menu-icon" />
              <span className="ms-2">Manajemen Kelompok Penelitian</span>
            </li>
            <li onClick={() => navigate("/membermanagement")}>
              <img src={iconkelompok} alt="User" className="menu-icon" />
              <span className="ms-2">Manajemen Anggota</span>
            </li>
          </ul>
        </Offcanvas.Body>
        <Button variant="light" className="ms-5 me-5 mb-4" onClick={handleClose}>
          Tutup
        </Button>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
