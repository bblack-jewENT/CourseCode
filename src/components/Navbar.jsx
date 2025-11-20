import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        CourseCode
      </Link>
      <div className="container">
        <div style={{ marginRight: "35px" }}>
          <Link className="navbar-link" to="/">
            Home
          </Link>
          <Link className="navbar-link" to="/courses">
            Courses
          </Link>
          <Link className="navbar-link" to="/dashboard">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
