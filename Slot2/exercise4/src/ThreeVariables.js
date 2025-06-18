

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

function ThreeVariables() {
  // ✅ 1. In tên từng công ty bằng forEach
  const companyNames = companies.map(c => c.name).join(', ');

  // ✅ 2. Lọc những công ty thành lập sau năm 1987
  const startedAfter1987 = companies.filter(c => c.start > 1987);

  // ✅ 3. Lọc các công ty có category là Retail, tăng năm start lên 1, hiển thị thông tin
  const retailCompanies = companies
    .filter(c => c.category === "Retail")
    .map(c => ({ ...c, start: c.start + 1 }));

  // ✅ 4. Sắp xếp công ty theo năm kết thúc tăng dần
  const sortedByEnd = [...companies].sort((a, b) => a.end - b.end);

  // ✅ 5. Sắp xếp mảng tuổi theo thứ tự giảm dần
  const sortedAgesDesc = [...ages].sort((a, b) => b - a);

  // ✅ 6. Tính tổng tất cả tuổi bằng reduce
  const ageSum = ages.reduce((acc, age) => acc + age, 0);

  // ✅ 7. Tạo object mới chứa name và category của company[0], có method print dùng object destructuring
  const { name, category } = companies[0];
  const newObj = {
    name,
    category,
    print() {
      return `Company Name: ${this.name}, Category: ${this.category}`;
    }
  };

  // ✅ 8. Hàm nhận số lượng đối số không xác định là số và trả về tổng
  const sumArgs = (...args) => args.reduce((a, b) => a + b, 0);

  // ✅ 9. Hàm nhận số lượng đối số không xác định (có thể là mảng hoặc không) và gộp thành 1 mảng
  const collectArgs = (...args) => args.flatMap(arg => Array.isArray(arg) ? arg : [arg]);

  // ✅ 10. Destructuring thuộc tính street thành biến street từ object person
  const {
    address: { street }
  } = person;

  // ✅ 11. Viết hàm mỗi lần gọi thì trả về số tăng dần từ 0
  const counter = (() => {
    let count = 0;
    return () => count++;
  })();

  // ✅ 12. Tạo hàm phân tích query string trong URL và trả về object {key: value}
  const parseQuery = (url) => {
    const query = url.split('?')[1];
    if (!query) return {};
    return query.split('&').reduce((acc, curr) => {
      const [key, val] = curr.split('=');
      acc[decodeURIComponent(key)] = decodeURIComponent(val);
      return acc;
    }, {});
  };
    return (
    <div className="custom-margin">
      <h2>Exercise 4: JSX and ES6</h2>

      <p><strong>All Companies:</strong> {companyNames}</p>

      <p><strong>Companies started after 1987:</strong> {startedAfter1987.map(c => c.name).join(', ')}</p>

            <div>
        <p><strong>Retail Companies (start +1):</strong></p>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            {retailCompanies.map((c, i) => (
              <tr key={i}>
                <td><strong>{c.name}</strong></td>
                <td>{c.start}</td>
                <td>{c.end}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p><strong>Companies sorted by end:</strong> {sortedByEnd.map(c => c.name).join(', ')}</p>
      <p><strong>Ages sorted descending:</strong> {sortedAgesDesc.join(', ')}</p>
      <p><strong>Sum of Ages:</strong> {ageSum}</p>
      <p><strong>New Company Object:</strong> {newObj.print()}</p>
      <p><strong>Sum Arguments (1,2,3,4):</strong> {sumArgs(1, 2, 3, 4)}</p>
      <p><strong>Collected Args (1, [2,3], "hi"):</strong> {collectArgs(1, [2, 3], "hi").join(', ')}</p>
      <p><strong>Destructured Street:</strong> {street}</p>
      <p><strong>Counter Call 1:</strong> {counter()}</p>
      <p><strong>Counter Call 2:</strong> {counter()}</p>
      <p><strong>Query Object:</strong> {JSON.stringify(parseQuery("https://example.com?name=John&age=30"))}</p>
    </div>
  );
}

export default ThreeVariables;