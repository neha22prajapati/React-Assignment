import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import "./Login.css";
import EmailComponent from "../CommonComponents/EmailComponent";
import PasswordComponent from "../CommonComponents/PasswordComponent";

const Login = () => {
const navigate = useNavigate();

function registerUser() {
    navigate("/register");
}

function loginUser() {
    navigate(-1);
}

  return (
    <Card className="login-section">
      <img className="offer-img" src="../assets/sale.jpg" alt="sale" />
      <div className="login-div">
        <h2 className="login-h2">Login or Signup</h2>
       <Form>
       <EmailComponent />
       <PasswordComponent component="login" />
        <Button variant="primary" onClick={loginUser}>Continue</Button>
        <Button variant="link" onClick={registerUser}>Signup</Button>
       </Form>
      </div>
    </Card>
  );
};

export default Login;
