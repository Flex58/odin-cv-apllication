export default function Education({ name, notes, from, to }) {
  return (
    <>
      <p>{name}</p>
      <p>{notes}</p>
      <p>{from}</p>
      <p>{to}</p>
    </>
  );
}
