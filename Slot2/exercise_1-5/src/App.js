import "./App.css";
import PeopleList from "./PeopleList";
import PeopleTable from "./PeopleTable";
import NamePerson from "./NamePerson";
function App() {
  return (
    <div>
      <h1 className="h1Style">Hello world!</h1>
      <PeopleTable />
      <PeopleList />
     <NamePerson />
    </div>
  );
}

export default App;
