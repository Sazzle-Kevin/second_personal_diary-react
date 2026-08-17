import Navbar from "./Navbar";

export default function Header({ onAddEntry }) {
  return (
    <div>
      <header className="h-10 w-full bg-fuchsia-400 text-gray-800 rounded-b-[50px] shadow-lg">
        <Navbar onAddEntry={onAddEntry} />
      </header>
      <h1 className="mt-4 mx-auto w-max font-serif italic text-center text-[100px] text-gray-700 [-webkit-text-stroke:2px_pink] opacity-5 hover:opacity-20 hover:mb-2 hover:mt-2 transition-all ease-in-out duration-2000 cursor-default">
        <strong>Tagebuch</strong>
      </h1>
      ;
    </div>
  );
}
