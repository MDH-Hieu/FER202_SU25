

function NamePerson() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 28, occupation: "Manager" },
  ];

  return (
    <div>
      <h2>People Details</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <p>
              <strong>Name:</strong> {person.name} <br />
              <strong>Age:</strong> {person.age} <br />
              <strong>Occupation:</strong> {person.occupation}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NamePerson;
