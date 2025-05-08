export default function EducationForm({ id, name, notes, from, to, onChange }) {
  return (
    <div className="educationForm" name={id}>
      <div className="inputDiv">
        <label htmlFor={"name" + id}>Name: </label>
        <input
          type="text"
          id={"name" + id}
          name="name"
          value={name}
          onChange={onChange}
        />
      </div>
      <div className="inputDiv">
        <label htmlFor={"notes" + id}>Notes: </label>
        <input
          type="text"
          id={"notes" + id}
          name="notes"
          value={notes}
          onChange={onChange}
        />
      </div>
      <div className="inputDiv">
        <label htmlFor={"from" + id}>From: </label>
        <input
          type="date"
          id={"from" + id}
          name="from"
          value={from}
          onChange={onChange}
        />
      </div>
      <div className="inputDiv">
        <label htmlFor={"name" + id}>Until: </label>
        <input
          type="date"
          id={"to" + id}
          name="to"
          value={to}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
