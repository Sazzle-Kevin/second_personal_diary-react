import Navbar from "./Navbar";

export default function Header() {
  return (
    <header
      className="h-10
     w-full bg-fuchsia-400 rounded-b-[50px] shadow-lg"
    >
      <Navbar />
      {/* <h1 className="m-6 font-serif italic text-center text-[100px] text-gray-700 [-webkit-text-stroke:2px_pink] opacity-5 hover:opacity-20 hover:m-4 transition-all ease-in-out duration-2000">
        <strong>Tagebuch</strong>
      </h1> */}
    </header>
  );
}
