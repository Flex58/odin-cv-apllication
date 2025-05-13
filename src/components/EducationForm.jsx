export default function EducationForm({ id, name, notes, from, to, onChange }) {
  return (
    <div className="educationForm formDiv" name={id}>
      <div className="inputDiv soloName">
        <label htmlFor={"name" + id}>Name: </label>
        <input
          type="text"
          id={"name" + id}
          name="name"
          value={name}
          onChange={onChange}
        />
      </div>
      <div className="inputDiv textareaDiv">
        <label htmlFor={"notes" + id}>Notes: </label>
        <textarea
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
          placeholder="MM-YYYY, 04-2019...."
          onChange={onChange}
        />
      </div>
      <div className="inputDiv toDiv">
        <label htmlFor={"name" + id}>Until: </label>
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
