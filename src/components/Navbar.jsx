import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex justify-around">
      <Link to="/calendar">Calendar</Link>
      <Link to="/">Home</Link>
      <Link to="/list">List</Link>
    </nav>
  );
}
