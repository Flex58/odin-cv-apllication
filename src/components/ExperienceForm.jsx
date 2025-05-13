export default function ExperienceForm({
  id,
  companyName,
  position,
  notes,
  from,
  to,
  onChange,
}) {
  return (
    <div className="experienceForm formDiv" name={id}>
      <div className="inputDiv">
        <label htmlFor={"companyName" + id}>Company: </label>
        <input
          type="text"
          id={"companyName" + id}
          name="companyName"
          value={companyName}
          onChange={onChange}
        />
      </div>
      <div className="inputDiv">
        <label htmlFor={"position" + id}>Position: </label>
        <input
          type="text"
          id={"position" + id}
          name="position"
          value={position}
          onChange={onChange}
        />
      </div>
      <div className="inputDiv textareaDiv">
        <label htmlFor={"notes" + id}>Notes: </label>
        <textarea
          type="field"
          id={"notes" + id}
          name="notes"
          value={notes}
          onChange={onChange}
        />
      </div>
      <div className="inputDiv fromDiv">
        <label htmlFor={"from" + id}>From: </label>
        <input
          type="text"
          id={"from" + id}
          name="from"
          value={from}
          placeholder="MM-YYYY"
          onChange={onChange}
        />
      </div>
      <div className="inputDiv toDiv">
        <label htmlFor={"to" + id}>Until: </label>
        <input
          type="text"
          id={"to" + id}
          name="to"
          value={to}
          placeholder="MM-YYYY or Present"
          onChange={onChange}
        />
      </div>
    </div>
  );
}
