import { useState } from "react";
import "./App.css";
import General from "./components/General";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import Education from "./components/Education";
import ExperienceForm from "./components/ExperienceForm";
import Experience from "./components/Experience";
import SkillsForm from "./components/SkillsForm";
import Skills from "./components/Skills";

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
    {
      id: crypto.randomUUID(),
      name: "",
      notes: "",
      from: "",
      to: "",
      isVisible: false,
    },
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
      isVisible: false,
    },
  ]);
  const [submitExperience, setSubmitExperience] = useState(null);

  const [skillsData, setSkillsData] = useState([
    {
      id: crypto.randomUUID(),
      skillName: "",
      skillLevel: "",
      skillDescription: "",
      isVisible: false,
    },
  ]);
  const [submitSkills, setSubmitSkills] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
    setSubmitGeneral(generalData);
    setSubmitEducation(educationData);
    setSubmitExperience(experienceData);
    setSubmitSkills(skillsData);
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
            isVisible: true,
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
            isVisible: true,
          },
        ]);
        break;
      case "addSkills":
        setSkillsData([
          ...skillsData,
          {
            id: crypto.randomUUID(),
            skillName: "",
            skillLevel: "",
            skillDescription: "",
            isVisible: true,
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
      case "skillsForm":
        setSkillsData(arrayDataUpdate(skillsData, id, property, value));
        break;
    }
  }

  return (
    <>
      {isSubmit ? (
        <>
          <button onClick={() => setIsSubmit(false)}>Edit</button>
          <General
            firstName={submitGeneral.firstName}
            lastName={submitGeneral.lastName}
            telephone={submitGeneral.telephone}
            email={submitGeneral.email}
          />
          {submitEducation.map((item) => {
            return (
              <div key={"display" + item.id}>
                <Education
                  name={item.name}
                  notes={item.notes}
                  from={item.from}
                  to={item.to}
                />
              </div>
            );
          })}

          {submitExperience.map((item) => {
            return (
              <div key={"display" + item.id}>
                <Experience
                  companyName={item.companyName}
                  positon={item.position}
                  notes={item.notes}
                  from={item.from}
                  to={item.to}
                />
              </div>
            );
          })}

          {submitSkills.map((item) => {
            return (
              <div key={"display" + item.id}>
                <Skills
                  skillName={item.skillName}
                  skillLevel={item.skillLevel}
                  skillDescription={item.skillDescription}
                />
              </div>
            );
          })}
        </>
      ) : (
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
            <div
              className="educationDiv cardDiv"
              name="isVisible"
              key={item.id}
            >
              <button
                type="button"
                className="headerDiv"
                onClick={() =>
                  setEducationData(
                    arrayDataUpdate(
                      educationData,
                      item.id,
                      "isVisible",
                      !item.isVisible
                    )
                  )
                }
              >
                <h2>Education #{educationData.indexOf(item) + 1}</h2>
                <img src="null" alt="expand-icon" />
                <hr />
              </button>
              <div className={`formWrapper ${item.isVisible ? "open" : ""}`}>
                <div className="formContent">
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
                      setEducationData(
                        educationData.filter((a) => item.id !== a.id)
                      );
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button type="button" id="addEducation" onClick={addButtonHandler}>
            Add Education
          </button>

          {experienceData.map((item) => (
            <div className="experienceDiv cardDiv" key={item.id}>
              <button
                type="button"
                className="headerDiv"
                onClick={() =>
                  setExperienceData(
                    arrayDataUpdate(
                      experienceData,
                      item.id,
                      "isVisible",
                      !item.isVisible
                    )
                  )
                }
              >
                <h2>Experience #{experienceData.indexOf(item) + 1}</h2>
                <img src="null" alt="expand-icon" />
                <hr />
              </button>
              <div className={`formWrapper ${item.isVisible ? "open" : ""}`}>
                <div className="formContent">
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
              </div>
            </div>
          ))}
          <button type="button" id="addExperience" onClick={addButtonHandler}>
            Add Experience
          </button>

          {skillsData.map((item) => (
            <div className="skillsDiv cardDiv" key={item.id}>
              <button
                type="button"
                className="headerDiv"
                onClick={() =>
                  setSkillsData(
                    arrayDataUpdate(
                      skillsData,
                      item.id,
                      "isVisible",
                      !item.isVisible
                    )
                  )
                }
              >
                <h2>Skill #{skillsData.indexOf(item) + 1}</h2>
                <img src="null" alt="expand-icon" />
              </button>
              <div
                className={item.isVisible ? "formWrapper open" : "formWrapper"}
              >
                <div className="formContent">
                  <hr />
                  <SkillsForm
                    id={item.id}
                    skillName={item.skillName}
                    skillLevel={item.skillLevel}
                    skillDescription={item.skillDescription}
                    onChange={handleChange}
                  />
                  <button
                    id="removeSkills"
                    onClick={() => {
                      setSkillsData(skillsData.filter((a) => item.id !== a.id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button type="button" id="addSkills" onClick={addButtonHandler}>
            Add Skill
          </button>

          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

export default App;
