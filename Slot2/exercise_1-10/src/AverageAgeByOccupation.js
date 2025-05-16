
function AverageAgeByOccupation() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 22, occupation: "Designer" },
    { name: "Charlie", age: 30, occupation: "Engineer" },
    { name: "David", age: 28, occupation: "Designer" },
    { name: "Eve", age: 35, occupation: "Manager" },
  ];

  const occupationStats = people.reduce((acc, person) => {
    const key = person.occupation;
    if (!acc[key]) {
      acc[key] = { totalAge: 0, count: 0 };
    }
    acc[key].totalAge += person.age;
    acc[key].count += 1;
    return acc;
  }, {});


  const averageAges = Object.entries(occupationStats).map(([occupation, stats]) => {
    const average = stats.totalAge / stats.count;
    return { occupation, averageAge: average.toFixed(1) };
  });

  return (
    <div>
      <h2>Average Age by Occupation</h2>
      <ul>
        {averageAges.map((item) => (
          <li key={item.occupation}>
            <strong>{item.occupation}:</strong> {item.averageAge} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;
