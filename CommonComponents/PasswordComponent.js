
import { useEffect, useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import "./PasswordComponent.css";

const PasswordComponent = ({component, disabled}) => {
  const [passwordDisabled, setPasswordDisabled] = useState(true);
  const [buttonText, setButtonText] = useState("Change Password");

  function changePassoword() {
    setPasswordDisabled(false);
    setButtonText("Submit");
  }
  
    return (
       <div className="password-section">
      
      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
        <Form.Control type="password" placeholder="Password" disabled={(component === "profile" || disabled) ? passwordDisabled : !passwordDisabled} />
      </FloatingLabel>
     
     {(component === "register" || !passwordDisabled ) && <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password" className="mb-3">
       <Form.Control type="password" placeholder="Password" />
     </FloatingLabel>}

    {(component === "profile" && !disabled) && <div  className="d-grid gap-2">
      <Button 
        variant={(buttonText === "Submit") ? "primary" : "link"} 
        onClick={changePassoword}>
        {buttonText}
      </Button>
    </div>}
  </div>
  );
};

export default PasswordComponent;