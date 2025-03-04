import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import FormLogin from "../components/FormLogin";
import "../assets/css/Login.css";
import logoUAJY from "../assets/images/logo uajy2.png";

const LoginPage = () => {
  // const navigate = useNavigate();

  return (
    <Container className="mt-5 pt-5">
      <div className="text-center display-4 mb-4">
        <img src={logoUAJY} alt="" className="responsive-logo" />
        <strong>Welcome Admin!</strong>
      </div>
      <p className="text-center lead">Sebelum anda masuk ke dalam menu admin, silahkan login terlebih dahulu!</p>
      <hr className="featurette-divider" />
      <FormLogin />
    </Container>
  );
};
export default LoginPage;
