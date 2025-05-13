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
import Icon from "@mdi/react";
import {
  mdiChevronDown,
  mdiChevronUp,
  mdiTrashCanOutline,
  mdiPlus,
} from "@mdi/js";

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
    const btn = e.target.closest("button").id;
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
    const parent = e.target.parentElement.parentElement.classList[0];
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
          <button onClick={() => setIsSubmit(false)} className="submitBtn">Edit</button>
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
          <div className="generalDiv cardDiv">
            <h2>General Data</h2>
            <hr />
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
                <Icon
                  path={item.isVisible ? mdiChevronUp : mdiChevronDown}
                  title={item.isVisible ? "collapse button" : "expand button"}
                  size={1}
                />
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
                    className="deleteBtn"
                    onClick={() => {
                      setEducationData(
                        educationData.filter((a) => item.id !== a.id)
                      );
                    }}
                  >
                    <Icon
                      path={mdiTrashCanOutline}
                      size={1}
                      color={"red"}
                      title={"delete button"}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button type="button" id="addEducation" className="addBtn" onClick={addButtonHandler}>
            <Icon path={mdiPlus} size={1} color={"#646cff"} />
            <p>Education</p>
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
                <Icon
                  path={item.isVisible ? mdiChevronUp : mdiChevronDown}
                  title={item.isVisible ? "collapse button" : "expand button"}
                  size={1}
                />
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
                    className="deleteBtn"
                    onClick={() => {
                      setExperienceData(
                        experienceData.filter((a) => item.id !== a.id)
                      );
                    }}
                  >
                    <Icon
                      path={mdiTrashCanOutline}
                      size={1}
                      color={"red"}
                      title={"delete button"}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button type="button" id="addExperience" className="addBtn" onClick={addButtonHandler}>
            <Icon path={mdiPlus} size={1} color={"#646cff"} />
            <p>Experience</p>
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
                <Icon
                  path={item.isVisible ? mdiChevronUp : mdiChevronDown}
                  title={item.isVisible ? "collapse button" : "expand button"}
                  size={1}
                />
                <hr />
              </button>
              <div
                className={item.isVisible ? "formWrapper open" : "formWrapper"}
              >
                <div className="formContent">
                  <SkillsForm
                    id={item.id}
                    skillName={item.skillName}
                    skillLevel={item.skillLevel}
                    skillDescription={item.skillDescription}
                    onChange={handleChange}
                  />
                  <button
                    id="removeSkills"
                    className="deleteBtn"
                    onClick={() => {
                      setSkillsData(skillsData.filter((a) => item.id !== a.id));
                    }}
                  >
                    <Icon
                      path={mdiTrashCanOutline}
                      size={1}
                      color={"red"}
                      title={"delete button"}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button type="button" id="addSkills" className="addBtn" onClick={addButtonHandler}>
            <Icon path={mdiPlus} size={1} color={"#646cff"} />
            <p>Skills</p>
          </button>

          <button type="submit" className="submitBtn">Submit</button>
        </form>
      )}
    </>
  );
}

export default App;
