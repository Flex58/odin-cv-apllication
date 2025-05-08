export default function GeneralForm({
  firstName,
  lastName,
  email,
  telephone,
  onChange,
}) {
  return (
    <div className="generalForm">
      <div className="inputDiv">
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={onChange}
        />
      </div>
      <div className="inputDiv">
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={onChange}
        />
      </div>
      <div className="inputDiv">
        <label htmlFor="telephone">Telephone: </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={telephone}
          onChange={onChange}
        />
      </div>
      <div className="inputDiv">
        <label htmlFor="email">Email: </label>
        <input
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
