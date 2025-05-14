export default function Education({ name, notes, from, to }) {
  return (
    <div className="educationContainer">
    <h2>{from} ~ {to}</h2>
      <h3>{name}</h3>
      <p>{notes}</p>
    </div>
  );
}
