import { useState } from "react";
import "./App.css";
import General from "./components/General";
import GeneralForm from "./components/GeneralForm";

function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
  });

  const [submitGeneral, setSubmitGeneral] = useState({ ...generalData });

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
    setSubmitGeneral(generalData);
  }

  function handleChange(e) {
    setGeneralData({ ...generalData, [e.target.name]: e.target.value });
  }
  /*form handlers 
  for education experience etc need state to be array or set to be able to add and remove panels.
  make sure add button is independent so you can technically have 0 education or expirenece skills etc.*/

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        {/*General Info*/}
        <GeneralForm
          onChange={handleChange}
          firstName={generalData.firstName}
          lastName={generalData.lastName}
          telephone={generalData.telephone}
          email={generalData.email}
        />
        {/*Education*/}
        {/*Experience*/}
        {/*Skills*/}
        <button type="submit">Submit</button>
      </form>
      {
        isSubmit && (
          <General
            firstName={submitGeneral.firstName}
            lastName={submitGeneral.lastName}
            telephone={submitGeneral.telephone}
            email={submitGeneral.email}
          />
        )
        /*Switch Form Product visiblity?*/
      }
    </>
  );
}

export default App;
