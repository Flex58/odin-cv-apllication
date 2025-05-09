import { useState } from "react";
import "./App.css";
import General from "./components/General";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import Education from "./components/Education";
import ExperienceForm from "./components/ExperienceForm";
import Experience from "./components/Experience";

function App() {
  const [isSubmit, setIsSubmit] = useState(false);

  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
  });
  const [submitGeneral, setSubmitGeneral] = useState(null);

  const [educationData, setEducationData] = useState([
    { id: crypto.randomUUID(), name: "", notes: "", from: "", to: "" },
  ]);
  const [submitEducation, setSubmitEducation] = useState(null);

  const [experienceData, setExperienceData] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "",
      position: "",
      notes: "",
      from: "",
      to: "",
    },
  ]);
  const [submitExperience, setSubmitExperience] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
    setSubmitGeneral(generalData);
    setSubmitEducation(educationData);
    setSubmitExperience(experienceData);
  }

  function addButtonHandler(e) {
    const btn = e.target.id;
    switch (btn) {
      case "addEducation":
        setEducationData([
          ...educationData,
          {
            id: crypto.randomUUID(),
            name: "",
            notes: "",
            from: "",
            to: "",
          },
        ]);
        break;
      case "addExperience":
        setExperienceData([
          ...experienceData,
          {
            id: crypto.randomUUID(),
            companyName: "",
            position: "",
            notes: "",
            from: "",
            to: "",
          },
        ]);
        break;
    }
  }

  function arrayDataUpdate(array, id, property, value) {
    return array.map((item) => {
      if (item.id == id) {
        return { ...item, [property]: value };
      } else {
        return item;
      }
    });
  }

  function handleChange(e) {
    const parent = e.target.parentElement.parentElement.className;
    const id = e.target.parentElement.parentElement.getAttribute("name");
    const property = e.target.name;
    const value = e.target.value;
    switch (parent) {
      case "generalForm":
        setGeneralData({ ...generalData, [property]: value });
        break;
      case "educationForm":
        setEducationData(arrayDataUpdate(educationData, id, property, value));
        break;
      case "experienceForm":
        setExperienceData(arrayDataUpdate(experienceData, id, property, value));
        break;
    }
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="generalDiv">
          <h2>General Data</h2>
          <GeneralForm
            onChange={handleChange}
            firstName={generalData.firstName}
            lastName={generalData.lastName}
            telephone={generalData.telephone}
            email={generalData.email}
          />
        </div>
        {educationData.map((item) => (
          <div className="educationDiv" key={item.id}>
            <h2>Education #{educationData.indexOf(item) + 1}</h2>
            <EducationForm
              id={item.id}
              name={item.name}
              notes={item.notes}
              from={item.from}
              to={item.to}
              onChange={handleChange}
            />
            <button
              id="removeEducation"
              onClick={() => {
                setEducationData(educationData.filter((a) => item.id !== a.id));
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <button type="button" id="addEducation" onClick={addButtonHandler}>
          Add Education
        </button>

        {experienceData.map((item) => (
          <div className="experienceDiv" key={item.id}>
            <h2>Experience #{experienceData.indexOf(item) + 1}</h2>
            <ExperienceForm
              id={item.id}
              companyName={item.companyName}
              position={item.position}
              notes={item.notes}
              from={item.from}
              to={item.to}
              onChange={handleChange}
            />
            <button
              id="removeExperience"
              onClick={() => {
                setExperienceData(
                  experienceData.filter((a) => item.id !== a.id)
                );
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <button type="button" id="addExperience" onClick={addButtonHandler}>
          Add Experience
        </button>
        {/*Experience*/}
        {/*Skills*/}
        <button type="submit">Submit</button>
      </form>
      {
        isSubmit && (
          <>
            <General
              firstName={submitGeneral.firstName}
              lastName={submitGeneral.lastName}
              telephone={submitGeneral.telephone}
              email={submitGeneral.email}
            />
            {submitEducation.map((item) => {
              return (
                <Education
                  name={item.name}
                  notes={item.notes}
                  from={item.from}
                  to={item.to}
                />
              );
            })}
          {submitExperience.map(item => {
            return (
              <Experience
              companyName={item.companyName}
              positon={item.position}
              notes={item.notes}
              from={item.from}
              to={item.to}
              />
            )
          })}
          </>
        )
        /*Switch Form Product visiblity?*/
      }
    </>
  );
}

export default App;
