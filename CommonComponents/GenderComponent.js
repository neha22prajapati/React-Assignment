import { useState } from "react";
import { ButtonGroup, Form, ToggleButton } from "react-bootstrap";
import "./GenderComponent.css";

const GenderComponent = ({disabled}) => {
  const [checked, setChecked] = useState(false);
  const [genderName, setGenderName] = useState('1');

  const gender = [
    { name: 'Male', value: '0' },
    { name: 'Female', value: '1' },
  ];

    return (
       <>
        <Form.Label className="mb-3">
            Gender
        </Form.Label>

        {/* <table className={`gender-table ${disabled ? "disable-gender" : ""}`}>
          <tbody>
            <tr>
              <td>Male</td>
              <td>Female</td>
            </tr>
          </tbody>
        </table> */}

      <ButtonGroup className="gender-component">
        {gender.map((g, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant='outline-success'
            name="radio"
            value={g.value}
            checked={genderName === g.value}
            onChange={(e) => setGenderName(e.currentTarget.value)}
            disabled={disabled}
          >
            {g.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
       </>
    )
}

export default GenderComponent;