import { Link, useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs mt-2">
      <Link to="/Home"
            className={`nav-link ${pathname.includes("home") ? "active" : ""}`}>Home</Link>
     
     <Link to="/Login"
            className={`nav-link ${pathname.includes("login") ? "active" : ""}`}>Login</Link>
     
     <Link to="/Feedback"
            className={`nav-link ${pathname.includes("feedback") ? "active" : ""}`}>Feedback</Link>
     
     <Link to="/Search"
            className={`nav-link ${pathname.includes("search") ? "active" : ""}`}>Search</Link>
     
     <Link to="/Profile"
            className={`nav-link ${pathname.includes("profile") ? "active" : ""}`}>Profile</Link>
     
     <Link to="/Dashboard"
            className={`nav-link ${pathname.includes("dashboard") ? "active" : ""}`}>Dashboard</Link>
     

     <Link to="/Settings"
            className={`nav-link ${pathname.includes("settings") ? "active" : ""}`}>Settings</Link>





    </nav>
  );
}
export default Nav;