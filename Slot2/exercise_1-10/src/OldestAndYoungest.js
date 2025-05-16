
function OldestAndYoungest() {
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 19 },
    { name: "Eve", age: 35 },
  ];

  const youngest = people.reduce((min, person) =>
    person.age < min.age ? person : min
  );


  const oldest = people.reduce((max, person) =>
    person.age > max.age ? person : max
  );

  return (
    <div>
      <h2>Oldest and Youngest Person</h2>
      <p><strong>Youngest:</strong> {youngest.name} ({youngest.age} years old)</p>
      <p><strong>Oldest:</strong> {oldest.name} ({oldest.age} years old)</p>
    </div>
  );
}

export default OldestAndYoungest;
