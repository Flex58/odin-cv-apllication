import Icon from "@mdi/react";
import { mdiEmail, mdiPhone } from "@mdi/js";

export default function General({ firstName, lastName, telephone, email }) {
  const fullName = firstName + " " + lastName;
  return (
    <div className="generalContainer">
      <h1>{fullName}</h1>
      <div className="infoContainer">
        <Icon path={mdiPhone} size={1} />
        <p>{telephone}</p>
      </div>
      <div className="infoContainer">
      <Icon path={mdiEmail} size={1}/>  
      <p>{email}</p>
      </div>
    </div>
  );
}
