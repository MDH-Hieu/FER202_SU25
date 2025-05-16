

function GroupByOccupation() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 22, occupation: "Designer" },
    { name: "Charlie", age: 30, occupation: "Engineer" },
    { name: "David", age: 28, occupation: "Designer" },
    { name: "Eve", age: 35, occupation: "Manager" },
  ];

 
  const grouped = people.reduce((acc, person) => {
    const key = person.occupation;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(person);
    return acc;
  }, {}); 

  return (
    <div>
      <h2>People Grouped by Occupation</h2>
      {Object.entries(grouped).map(([occupation, people]) => (
        <div key={occupation}>
          <h3>{occupation}</h3>
          <ul>
            {people.map((person, index) => (
              <li key={index}>
                {person.name}, {person.age} years old
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupByOccupation;
