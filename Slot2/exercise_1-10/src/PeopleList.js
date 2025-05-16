

function PeopleList() {
  const people = ["Alice", "Bob", "Charlie", "David", "Eve"];

  return (
    <div>
      <h2>List of people </h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
