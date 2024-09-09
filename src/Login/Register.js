import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import "./Register.css";
import EmailComponent from "../CommonComponents/EmailComponent";
import PasswordComponent from "../CommonComponents/PasswordComponent";
import NameComponent from "../CommonComponents/NameComponent";
import MobileComponent from "../CommonComponents/MobileComponent";
import GenderComponent from "../CommonComponents/GenderComponent";

const Register = () => {
const navigate = useNavigate();

function registerUser(param) {
  navigate("login");
}

  return (
    <div className="register-section">
      <h2 className="register-h2">Signup</h2>
      <Form>
        <NameComponent />
        <MobileComponent />
        <GenderComponent />
        <EmailComponent />
        <PasswordComponent register="true" />
        <Button variant="primary" onClick={registerUser}>Register</Button>
      </Form>
    </div>

  );
};

export default Register;
