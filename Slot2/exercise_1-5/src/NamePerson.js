function NamePerson() {
  const person = {
    name: "Alice",
    age: 25,
    occupation: "Engineer",
  };

  return (
    <div>
      <h2>Thông tin người</h2>
      <p>
        Name: {person.name} <br />
        Age : {person.age} <br />
        Occupation: {person.occupation}
      </p>
    </div>
  );
}

export default NamePerson;
