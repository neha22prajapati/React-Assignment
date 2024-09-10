import { FloatingLabel, Form } from "react-bootstrap"

const MobileComponent = ({disabled}) => {
    return (
        <FloatingLabel
        controlId="floatingInput"
        label="Mobile"
        className="mb-3"
      >
        <Form.Control type="tel" placeholder="Enter Your Mobile" disabled={disabled} />
      </FloatingLabel>
    )
}

export default MobileComponent