import { Form } from "react-bootstrap";
import "./GenderComponent.css";

const GenderComponent = ({disabled}) => {
    return (
       <>
        <Form.Label className="mb-3">
            Gender
        </Form.Label>

        <table className={`gender-table ${disabled ? "disable-gender" : ""}`}>
          <tbody>
            <tr>
              <td>Male</td>
              <td>Female</td>
            </tr>
          </tbody>
        </table>
       </>
    )
}

export default GenderComponent;