export default function Experience({companyName, positon, notes, from, to}) {
    return (
        <>
        <p>{companyName}</p>
        <p>{positon}</p>
        <p>{notes}</p>
        <p>{from}</p>
        <p>{to}</p>
        </>
    )
}