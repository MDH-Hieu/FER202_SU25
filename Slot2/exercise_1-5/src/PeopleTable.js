function PeopleTable() {
  const people = [
    { id: 1, name: "Alice", age: 25, address: "123 Main St" },
    { id: 2, name: "Bob", age: 30, address: "456 Maple Ave" },
    { id: 3, name: "Charlie", age: 28, address: "789 Oak Dr" },
  ];

  return (
    <div>
      <h2>Danh sách người </h2>
      <table border="1" cellPadding="10" style={{ margin: "0 auto", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#eee" }}>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleTable;
