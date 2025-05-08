export default function General({firstName, lastName, telephone, email}) {
    const fullName = firstName + " " + lastName
    return (
        <>
        <h2>{fullName}</h2>
        <p>{telephone}</p>
        <p>{email}</p>
        </>
    )
}