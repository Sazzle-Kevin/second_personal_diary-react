import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function Interface() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-800">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
