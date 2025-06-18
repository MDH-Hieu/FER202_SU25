import './App.css'; 
function Navbar() {
  return (
    <div className="navbar">
    <button className="nav-item active">Home</button>
    <button className="nav-item">Search</button>
    <button className="nav-item">Contact</button>
    <button className="nav-item login">Login</button>
    </div>
  );
}

export default Navbar;