import { useState } from "react";

export default function List({ entries }) {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ul className="flex flex-wrap justify-center gap-6">
        {entries.map((entry) => (
          <li
            key={entry.date}
            onClick={() => {
              setSelectedEntry(entry);
              setIsModalOpen(true);
            }}
            className="flex flex-col w-80 bg-pink-200 border-4 border-fuchsia-800 rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:rotate-1 hover:scale-101 transition-all ease-in-out duration-800"
          >
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full h-48 object-cover"
            />

            <div className="flex flex-col p-4">
              <h2 className="text-xl font-bold">{entry.title}</h2>
              <p>{entry.date}</p>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && selectedEntry && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50">
          <div className="flex flex-col w-150 max-w-[90vw] max-h-[90vh] bg-pink-200 border-4 border-fuchsia-800 rounded-3xl overflow-hidden shadow-xl">
            <img
              src={selectedEntry.image}
              alt={selectedEntry.title}
              className="w-full h-64 object-cover"
            />

            <div className="flex flex-col gap-3 p-6 overflow-y-auto">
              <h2 className="text-3xl font-bold">{selectedEntry.title}</h2>

              <p className="font-semibold">{selectedEntry.date}</p>

              <p className="whitespace-pre-line">{selectedEntry.content}</p>

              <button
                onClick={() => setIsModalOpen(false)}
                className="self-center px-6 py-2 bg-fuchsia-300 border-2 border-fuchsia-800 rounded-xl cursor-pointer hover:bg-fuchsia-800 hover:text-pink-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
