import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Table, Button, Form, InputGroup, Offcanvas, Row, Col, Modal } from "react-bootstrap";
import logo1 from "../assets/images/hotel1.jpg";
import logo2 from "../assets/images/hotel2.jpg";
import logo3 from "../assets/images/hotel3.jpg";
const GroupManagementPage = () => {
  const navigate = useNavigate();
  const researchGroups = [
    { id: 1, logo: logo1, name: "Kawamura", members: 10 },
    { id: 2, logo: logo2, name: "Genesis", members: 8 },
    { id: 3, logo: logo3, name: "Kawamura", members: 5 },
  ];
  const handleEdit = (group) => {
    setSelectedGroup(group);
    setShowEditOffcanvas(true);
  };
  // Fungsi untuk menampilkan modal konfirmasi delete
  const handleDelete = (group) => {
    setSelectedGroup(group);
    setShowDeleteModal(true);
  };
  const [showEditOffcanvas, setShowEditOffcanvas] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <section className="ms-3 me-3 mt-4">
      <h2>Manajemen Kelompok Penelitian</h2>

      {/* Search Bar and Add Button */}
      <Row className="mb-4 mt-4">
        <Col md={6}>
          <InputGroup>
            <Form.Control placeholder="Search..." style={{ borderRadius: "12px 0 0 12px" }} />
            <Button style={{ borderRadius: "0 12px 12px 0", backgroundColor: "#f8f9fa", borderColor: "#ced4da", color: "#495057" }}>
              <FaSearch />
            </Button>
          </InputGroup>
        </Col>
        <Col className="text-end">
          <Button style={{ backgroundColor: "#28A745", borderColor: "#28A745", borderRadius: "10px" }} className="ps-4 pe-4" onClick={() => navigate("/researchgroupform")}>
            Tambah
          </Button>
        </Col>
      </Row>

      {/* Table */}
      <Table striped bordered hover responsive>
        <thead className="bg-secondary text-white ">
          <tr>
            <th>No</th>
            <th>Logo</th>
            <th>Nama Kelompok Riset</th>
            <th>Jumlah Anggota</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody className="">
          {researchGroups.map((group, index) => (
            <tr key={group.id}>
              <td>{index + 1}</td>
              <td>
                <img src={group.logo} alt="Logo" style={{ width: "40px", borderRadius: "50%" }} />
              </td>
              <td>{group.name}</td>
              <td>{group.members}</td>
              <td>
                <Button className="me-2 ps-4 pe-4" style={{ backgroundColor: "#FFC107", borderColor: "#FFC107", borderRadius: "10px" }} onClick={() => handleEdit(group)}>
                  Edit
                </Button>
                <Button style={{ backgroundColor: "#DC3545", borderColor: "#DC3545", borderRadius: "10px" }} className="ps-4 pe-4" onClick={() => handleDelete(group)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Offcanvas untuk Edit */}
      <Offcanvas show={showEditOffcanvas} onHide={() => setShowEditOffcanvas(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Kelompok Penelitian</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* {selectedGroup && ( ... )} = Cek apakah selectedGroup tidak null atau undefined */}
          {selectedGroup && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nama Kelompok Penelitian</Form.Label>
                <Form.Control type="text" defaultValue={selectedGroup.name} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Logo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Jumlah Anggota</Form.Label>
                <Form.Control type="number" defaultValue={selectedGroup.members} />
              </Form.Group>
              <Button variant="success" className="w-100">
                Simpan Perubahan
              </Button>
            </Form>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      {/* Modal Konfirmasi Delete */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Hapus</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedGroup && (
            <p>
              Apakah Anda yakin ingin menghapus kelompok penelitian <strong>{selectedGroup.name}</strong>?
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Batal
          </Button>
          <Button variant="danger">Hapus</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default GroupManagementPage;
