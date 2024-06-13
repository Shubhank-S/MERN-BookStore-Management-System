import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ role }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="navbar-brand">
          Book Store
        </NavLink>
      </div>
      <div className="navbar-right">
        <NavLink to="/books" className="navbar-link">
          Books
        </NavLink>
        {role === "admin" && (
          <>
            <NavLink to="/addbook" className="navbar-link">
              Add Book
            </NavLink>
            <NavLink to="/addstudent" className="navbar-link">
              Add Student
            </NavLink>
            <NavLink to="/dashboard" className="navbar-link">
              Dashboard
            </NavLink>
          </>
        )}

        {role === "" ? (
          <NavLink to="/login" className="navbar-link">
            Login
          </NavLink>
        ) : (
          <NavLink to="/logout" className="navbar-link">
            Logout
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
