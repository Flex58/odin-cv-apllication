export default function Experience({ companyName, positon, notes, from, to }) {
  return (
    <div className="experienceContainer">
      <h2>
        {from} ~ {to}
      </h2>
      <div className="positionContainer">
        <h3>{companyName}</h3>
        <h3>{positon}</h3>
      </div>
      <p>{notes}</p>
    </div>
  );
}
