import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex justify-around h-full">
      <Link
        to="/calendar"
        className="flex justify-center w-1/3 items-center h-full text-center text-xl hover:border-b-3 hover:border-fuchsia-800 hover:bg-fuchsia-300 transition-all ease-in-out duration-500 rounded-bl-[50px]"
      >
        Calendar
      </Link>
      <Link
        to="/"
        className="flex justify-center w-1/3 items-center h-full text-center text-xl hover:border-b-3 hover:border-fuchsia-800 hover:bg-fuchsia-300 transition-all ease-in-out duration-500 "
      >
        Home
      </Link>
      <Link
        to="/list"
        className="flex justify-center w-1/3 items-center h-full text-center text-xl hover:border-b-3 hover:border-fuchsia-800 hover:bg-fuchsia-300 transition-all ease-in-out duration-500  rounded-br-[50px]"
      >
        List
      </Link>
    </nav>
  );
}
