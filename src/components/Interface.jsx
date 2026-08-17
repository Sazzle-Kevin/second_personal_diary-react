import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import AddEntry from "./AddEntry";

export default function Interface() {
  const [entries, setEntries] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const storedEntries = localStorage.getItem("entries");
    const loadedEntries = JSON.parse(storedEntries || "[]");

    loadedEntries.sort((a, b) => b.date.localeCompare(a.date));

    setEntries(loadedEntries);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-gray-800">
      <Header onAddEntry={() => setIsAddModalOpen(true)} />

      <main className="flex justify-center">
        <Home entries={entries} />
      </main>

      <Footer />

      {isAddModalOpen && (
        <AddEntry
          onClose={() => setIsAddModalOpen(false)}
          setEntries={setEntries}
        />
      )}
    </div>
  );
}
