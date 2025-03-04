import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button, Form, InputGroup, Offcanvas, Modal, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
const MemberManagementPage = () => {
  const navigate = useNavigate();
  const members = [
    { id: 1, nama: "Dr. rer. nat. Mufti Petala Patria, M.Sc.", jabatan: "Head of Research Group", bidangPenelitian: "Ecophysiology of Marine Biota" },
    { id: 2, nama: "Dr. Adi Basukriadi, M.Sc", jabatan: "Associate Professor", bidangPenelitian: "Ecology of Insect" },
    { id: 3, nama: "Prof. Dr. Noverita Dian Takarina, M.Sc.", jabatan: "Assistant Professor", bidangPenelitian: "Aquatic Ecotoxycology" },
  ];
  const handleEdit = (member) => {
    setSelectedMember(member);
    setShowEditOffcanvas(true);
  };
  // Fungsi untuk menampilkan modal konfirmasi delete
  const handleDelete = (member) => {
    setSelectedMember(member);
    setShowDeleteModal(true);
  };
  const [showEditOffcanvas, setShowEditOffcanvas] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <section className="ms-3 me-3 mt-4">
      <h2>Manajemen Anggota</h2>

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
          <Button style={{ backgroundColor: "#28A745", borderColor: "#28A745", borderRadius: "10px" }} className="ps-4 pe-4" onClick={() => navigate("/memberform")}>
            Tambah
          </Button>
        </Col>
      </Row>

      {/* Table */}
      <Table striped bordered hover responsive>
        <thead className="bg-secondary text-white ">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Jabatan</th>
            <th>Bidang Penelitian</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody className="">
          {members.map((member, index) => (
            <tr key={member.id}>
              <td>{index + 1}</td>

              <td>{member.nama}</td>
              <td>{member.jabatan}</td>
              <td>{member.bidangPenelitian}</td>
              <td>
                <Button className="me-2 ps-4 pe-4" style={{ backgroundColor: "#FFC107", borderColor: "#FFC107", borderRadius: "10px" }} onClick={() => handleEdit(member)}>
                  Edit
                </Button>
                <Button style={{ backgroundColor: "#DC3545", borderColor: "#DC3545", borderRadius: "10px" }} className="ps-4 pe-4" onClick={() => handleDelete(member)}>
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
          <Offcanvas.Title>Edit Anggota</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* {selectedmember && ( ... )} = Cek apakah selectedmember tidak null atau undefined */}
          {selectedMember && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nama Dosen</Form.Label>
                <Form.Control type="text" defaultValue={selectedMember.nama} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Jabatan</Form.Label>
                <Form.Control type="text" defaultValue={selectedMember.jabatan} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Jabatan</Form.Label>
                <Form.Control type="text" defaultValue={selectedMember.bidangPenelitian} />
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
          {selectedMember && (
            <p>
              Apakah Anda yakin ingin menghapus dosen <strong>{selectedMember.nama}</strong>?
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

export default MemberManagementPage;
