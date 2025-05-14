export default function SkillsForm({
  id,
  skillName,
  skillLevel,
  skillDescription,
  onChange,
}) {
  return (
    <div className="skillsForm formDiv" name={id}>
      <div className="inputDiv">
        <label htmlFor={"skillName" + id}>Skill: </label>
        <input
          type="text"
          id={"skillName" + id}
          name="skillName"
          value={skillName}
          onChange={onChange}
        />
      </div>
      <div className="inputDiv">
        <label htmlFor={"skillLevel" + id}>Experience: </label>
        <input
          type="text"
          id={"skillLevel" + id}
          name="skillLevel"
          value={skillLevel}
          placeholder="Years active, Proficiency..."
          onChange={onChange}
        />
      </div>
      <div className="inputDiv ">
        <label htmlFor={"skillDescription" + id}>Description: </label>
        <textarea
          type="text"
          id={"skillDescription" + id}
          name="skillDescription"
          value={skillDescription}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
