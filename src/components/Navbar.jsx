import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          CodeLearn
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/courses" className="hover:underline">
            Courses
          </Link>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
