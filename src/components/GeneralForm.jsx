export default function GeneralForm({
  firstName,
  lastName,
  email,
  telephone,
  onChange,
}) {
  return (
    <div className="generalForm formDiv" name="test">
      <div className="inputDiv fromDiv">
        <label htmlFor="firstName">First Name: </label>
        <input
          required
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={onChange}
        />
      </div>
      <div className="inputDiv toDiv">
        <label htmlFor="lastName">Last Name: </label>
        <input
          required
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={onChange}
        />
      </div>
      <div className="inputDiv fromDiv">
        <label htmlFor="telephone">Telephone: </label>
        <input
          required
          type="tel"
          id="telephone"
          name="telephone"
          value={telephone}
          onChange={onChange}
        />
      </div>
      <div className="inputDiv toDiv">
        <label htmlFor="email">Email: </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
