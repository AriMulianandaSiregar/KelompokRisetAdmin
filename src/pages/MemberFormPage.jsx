import React from "react";
import { Form, Button } from "react-bootstrap";

const MemberFormPage = () => {
  return (
    <section className="ms-3 me-3 mt-4">
      <h2>Tambah Member</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nama Dosen</Form.Label>
          <Form.Control type="text" placeholder="Masukan nama dosen" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Foto</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Jabatan</Form.Label>
          <Form.Control type="text" placeholder="Masukan jabatan dosen" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Bidang Penelitian</Form.Label>
          <Form.Control type="text" placeholder="Masukan bidang penelitian" />
        </Form.Group>

        <Button variant="success" className="mt-3">
          Konfirmasi
        </Button>
      </Form>
    </section>
  );
};

export default MemberFormPage;
