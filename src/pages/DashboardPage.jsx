import React from "react";
import { Row, Col } from "react-bootstrap";
import "../assets/css/Dashboard.css"; // Import file CSS

const DashboardPage = () => {
  const data = [
    { title: "Total Research Group", value: 20 },
    { title: "Total Dosen Terdaftar", value: 50 },
    { title: "Total Publikasi", value: 100 },
    { title: "Total Penelitian", value: 128 },
    { title: "Total Hibah", value: 20 },
    { title: "Total Pengabdian Masyarakat", value: 50 },
    { title: "Total Haki", value: 100 },
  ];
  return (
    <>
      <section className="ms-3 me-3 mt-4">
        <Row>
          <Col md={12}>
            <div className="dashboard-container">
              <h2>Dashboard</h2>
              <div className="dashboard-grid">
                {data.map((item, index) => (
                  <div className="dashboard-card d-flex justify-content-center" key={index}>
                    <p className="card-title">{item.title}</p>
                    <p className="card-value">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default DashboardPage;
