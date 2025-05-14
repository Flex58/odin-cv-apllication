export default function Skills({ skillName, skillLevel, skillDescription }) {
  return (
    <div className="skillsContainer">
      <div className="positionContainer">
        <h2>{skillName}</h2>
        <p>{skillLevel}</p>
      </div>
      <p>{skillDescription}</p>
    </div>
  );
}
