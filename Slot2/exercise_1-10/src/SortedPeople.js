

function SortedPeople() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 22, occupation: "Designer" },
    { name: "Charlie", age: 30, occupation: "Engineer" },
    { name: "David", age: 28, occupation: "Designer" },
    { name: "Eve", age: 35, occupation: "Manager" },
  ];


  const sortedPeople = [...people].sort((a, b) => {

    const occCompare = a.occupation.localeCompare(b.occupation);
    if (occCompare !== 0) return occCompare;

    return a.age - b.age;
  });

  return (
    <div>
      <h2>Sorted by Occupation then Age</h2>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            {person.name} — {person.occupation}, {person.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedPeople;
