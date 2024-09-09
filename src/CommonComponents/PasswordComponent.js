
import { useState } from "react";
import { FloatingLabel, Form, Button, ButtonGroup } from "react-bootstrap";
import "./PasswordComponent.css";

const PasswordComponent = ({register}) => {
  const [disabled, setDisabled] = useState(true);
    return (
       <div className="password-section">
      
      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
        <Form.Control type="password" placeholder="Password" disabled={disabled} />
      </FloatingLabel>
      <Button variant="link">Change Password</Button>
     
     {register && <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password" className="mb-3">
       <Form.Control type="password" placeholder="Password" />
     </FloatingLabel>}
       </div>
    );
};

export default PasswordComponent;