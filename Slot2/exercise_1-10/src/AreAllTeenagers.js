
function AreAllTeenagers() {
  const people = [
    { name: "Alice", age: 2525 },
    { name: "Bob", age: 3030 },
    { name: "Charlie", age: 2828 },
  ];


  const allTeenagers = people.every(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>Are All Teenagers?</h2>
      <p>{allTeenagers ? "Yes, all are teenagers!" : "No, not all are teenagers."}</p>
    </div>
  );
}

export default AreAllTeenagers;
