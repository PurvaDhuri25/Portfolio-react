import { Link } from "react-router-dom";
const Connections = () => {
  return (
    <nav className="navbar">
      <h1> Purva Dhuri</h1>
      <div class>
        <Link to="/Home"> Home</Link>

        <Link to="/About"> About me </Link>
        <Link to="/Skills"> Skills </Link>
        <Link to="/Academics"> Academics </Link>
        <Link to="/Projects"> Projects </Link>
        <Link to="/Courses"> Courses </Link>
        <Link to="/Contact"> Contact Me </Link>
        <Link to="/Tms"> Tell me Something</Link>
      </div>
    </nav>
  );
};
export default Connections;
