export default function Navbar({ onAddEntry }) {
  return (
    <nav className="flex justify-around h-full">
      <button
        onClick={onAddEntry}
        className="flex justify-center w-full items-center h-full text-center text-xl hover:border-b-3 hover:border-fuchsia-800 hover:bg-fuchsia-300 transition-all ease-in-out duration-500 rounded-b-[50px] cursor-pointer"
      >
        Add Entry
      </button>
    </nav>
  );
}
