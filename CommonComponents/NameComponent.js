import { FloatingLabel, Form } from "react-bootstrap";

const NameComponent = ({disabled}) => {
  return (
    <FloatingLabel
    controlId="floatingInput"
    label="Name"
    className="mb-3"
  >
    <Form.Control type="text" placeholder="Enter Your Name" disabled={disabled} />
  </FloatingLabel>
  )
}

export default NameComponent;