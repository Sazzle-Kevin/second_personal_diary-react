import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="h-24 w-full bg-fuchsia-400 rounded-b-2xl shadow-lg">
      <Navbar />
      <h1>Tagebuch</h1>
    </header>
  );
}
