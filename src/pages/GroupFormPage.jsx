import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const GroupFormPage = () => {
  const [selectedMembers, setSelectedMembers] = useState([]);
  const availableMembers = ["Prof. Dr. Noverita Dian Takarina, M.Sc.", "Drs. Erwin Nurdin, M.Si", "Dimas Haryo Pradana, M.Si.", "Dr. Andi Wijaya, M.T.", "Dr. Siti Rahmawati, M.Sc."];
  const handleAddMember = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue && !selectedMembers.includes(selectedValue)) {
      setSelectedMembers([...selectedMembers, selectedValue]);
    }
    event.target.value = "";
  };

  const handleRemoveMember = (member) => {
    setSelectedMembers(selectedMembers.filter((m) => m !== member));
  };

  return (
    <section className="ms-3 me-3 mt-4">
      <h2>Tambah Kelompok Penelitian</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nama Kelompok Penelitian</Form.Label>
          <Form.Control type="text" placeholder="Masukan nama kelompok Penelitian" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control as="textarea" rows={2} placeholder="Masukan deskripsi" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Logo</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Ketua Kelompok Penelitian</Form.Label>
          <Form.Select>
            {availableMembers.map((member, index) => (
              <option key={index} value={member}>
                {member}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Anggota Kelompok Penelitian</Form.Label>
          <Form.Select onChange={handleAddMember}>
            <option value="">Pilih Anggota</option>
            {availableMembers.map((member, index) => (
              <option key={index} value={member}>
                {member}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Row className="mb-3">
          {selectedMembers.map((member, index) => (
            <Col key={index} xs="auto" className="mb-2">
              <div className="d-inline-flex align-items-center bg-light border p-2 rounded">
                {member}
                <Button variant="link" className="text-danger ms-2" onClick={() => handleRemoveMember(member)}>
                  &times;
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        <Button variant="success" className="mt-3">
          Konfirmasi
        </Button>
      </Form>
    </section>
  );
};

export default GroupFormPage;
