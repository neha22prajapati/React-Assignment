import { useState } from "react";
import { Form } from "react-bootstrap";
import EmailComponent from "../CommonComponents/EmailComponent";
import GenderComponent from "../CommonComponents/GenderComponent";
import MobileComponent from "../CommonComponents/MobileComponent";
import NameComponent from "../CommonComponents/NameComponent";
import PasswordComponent from "../CommonComponents/PasswordComponent";
import "./Profile.css";

const Profile = () => {
    const [disabled, setDisabled] = useState(true);

    function editProfileDetails(){
        setDisabled(false);
    }

    return (
        <div className="profile-section">
      <h2 className="profile-h2">My Profile <i class="bi bi-pencil-square" onClick={editProfileDetails}></i></h2>
      <Form>
        <NameComponent disabled={disabled} />
        <MobileComponent disabled={disabled} />
        <GenderComponent disabled={disabled} />
        <EmailComponent disabled={disabled} />
        <PasswordComponent />
      </Form>
    </div>
    );
};

export default Profile;