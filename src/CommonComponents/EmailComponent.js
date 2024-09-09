import { FloatingLabel, Form } from "react-bootstrap"

const EmailComponent = ({disabled}) => {
    return (
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" disabled={disabled} />
      </FloatingLabel>
    );
};

export default EmailComponent;