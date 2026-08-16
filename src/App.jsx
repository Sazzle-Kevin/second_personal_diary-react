import { Routes, Route } from "react-router";
import List from "./pages/List";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Interface from "./components/Interface";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Interface />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/list" element={<List />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
