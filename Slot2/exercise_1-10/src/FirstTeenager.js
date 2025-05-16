
function FirstTeenager() {
  const people = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 15 },
    { name: "David", age: 21 },
  ];

 
  const teenager = people.find((person) => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>First Teenager</h2>
      {teenager ? (
        <p>
          Name: {teenager.name}, Age: {teenager.age}
        </p>
      ) : (
        <p>No teenager found.</p>
      )}
    </div>
  );
}

export default FirstTeenager;
