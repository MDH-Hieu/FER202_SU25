import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import CourseList from './CourseList';
import TeenagerCheck from './TeenagerCheck';
import ReduceExample from './ReduceExample';
import ThreeVariables from './ThreeVariables';
import Shapes from './shapes.js';
import RamdomNumPromises from './RamdomNumPromises';
function App() {
  return (
  <div>
      <h1 >Hello <span className="h1Style">React</span></h1>

    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="divider">
        <div className="center-notch"></div>
        </div>
      <p className="logo-caption">This is the React logo!</p>
      <p className="logo-subcaption">(I don't know why it is here either)</p>
      <p className="description">
        The library for web and native user interfaces
      </p>
    </div>
     <Navbar />
      <h1 className="h1Style">This is a JSX</h1>
      <CourseList />
      <TeenagerCheck />
       <ReduceExample />
        <ThreeVariables />
        <Shapes />
        <RamdomNumPromises />
  </div>
  );
  
}

export default App;