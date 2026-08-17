import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = e.target.elements.date.value;
    const image = e.target.elements.image.value;
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;

    console.log(date, image, title, content);

    switch (true) {
      case !date:
        e.target.elements.date.focus();
        return;

      case !image:
        e.target.elements.image.focus();
        return;

      case !title:
        e.target.elements.title.focus();
        return;

      case !content:
        e.target.elements.content.focus();
        return;
    }

    const storedEntries = localStorage.getItem("entries");
    const entries = JSON.parse(storedEntries || "[]");

    const exists = entries.some((entry) => entry.date === date);

    if (exists) {
      alert("An entry for this date already exists.");
      return;
    }

    entries.push({
      date,
      image,
      title,
      content,
    });

    localStorage.setItem("entries", JSON.stringify(entries));

    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-h-[80vh] h-180 max-w-full w-250 sm:max-w-8/10 bg-pink-200 text-gray-800 rounded-b-[100px] rounded-t-[40px] border-4 border-fuchsia-800 shadow-xl overflow-hidden"
    >
      <div className="flex justify-between">
        <div className="flex flex-col items-center ml-8 mt-4">
          <label htmlFor="date" className="w-max cursor-pointer">
            <strong>Datum</strong>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="DD.MM.YYYY"
            className="py-2 px-4 max-w-[30vw] w-40 text-center bg-fuchsia-300 border-fuchsia-800 border-3 rounded-lg cursor-text"
          />
        </div>
        <div className="flex flex-col items-center mr-8 mt-4">
          <label htmlFor="image" className="w-max cursor-pointer">
            <strong>Image</strong>
          </label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Image URL"
            className="py-2 px-4 max-w-[30vw] w-40 text-center bg-fuchsia-300 border-fuchsia-800 border-3 rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mx-8 mt-4">
        <label htmlFor="title" className="w-max cursor-pointer">
          <strong>Title</strong>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title For My Day"
          className="py-2 px-4 w-full text-center bg-fuchsia-300 border-fuchsia-800 border-3 rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-grow items-center mx-8 mt-4">
        <label htmlFor="content" className="w-max cursor-pointer">
          <strong>Dead Diary ...</strong>
        </label>
        <div className="mb-7 h-full w-full">
          <textarea
            type="text"
            id="content"
            name="content"
            placeholder="Today ..."
            className="h-full py-2 px-4 w-full bg-fuchsia-300 border-fuchsia-800 border-3 rounded-lg resize-none rounded-b-[80px]"
          />
        </div>
      </div>
      <button
        type="submit"
        className="flex justify-center items-center self-center -mb-1 py-4 px-8 h-8 w-max text-2xl bg-fuchsia-300 rounded-t-[100px] border-fuchsia-800 border-2 hover:bg-fuchsia-800 hover:text-pink-200 hover:m-0 transition-all duration-500 cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
