import "./App.css";
import PeopleList from "./PeopleList";
import PeopleTable from "./PeopleTable";
import NamePerson from "./NamePerson";
import FirstTeenager from "./FirstTeenager";
import AreAllTeenagers from "./AreAllTeenagers";
import SortedPeople from "./SortedPeople";
import GroupByOccupation from "./GroupByOccupation";
import OldestAndYoungest from "./OldestAndYoungest";
import AverageAgeByOccupation from "./AverageAgeByOccupation";
function App() {
  return (
    <div>
      <h1 className="h1Style">Hello world!</h1>
      <NamePerson />   {/* Ex 2 ,3*/}
      <PeopleList />  {/* Ex 4  */}
      <PeopleTable />  {/* Ex 5  */}
      <FirstTeenager /> {/* Ex 6  */}
      <AreAllTeenagers /> {/* Ex 7  */}
      <SortedPeople />{/* Ex 8  */}
      <GroupByOccupation />{/* Ex 9.1  */}
      <OldestAndYoungest />{/* Ex 9.2  */}
       <AverageAgeByOccupation />{/* Ex 10  */}
    </div>
  );
}

export default App;
