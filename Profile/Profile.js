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
    const [edit, setEdit] = useState(true);

    function editProfileDetails(){
        setDisabled(false);
        setEdit(false);
    }

    return (
        <div className="profile-section">
      <h2 className="profile-h2">My Profile {edit && <i class="bi bi-pencil-square icon-click" onClick={editProfileDetails}></i>}</h2>
      <Form>
        <NameComponent disabled={disabled} />
        <MobileComponent disabled={disabled} />
        <GenderComponent disabled={disabled} />
        <EmailComponent disabled={disabled} />
        <PasswordComponent disabled={disabled} component="profile" />
      </Form>
    </div>
    );
};

export default Profile;