import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function Interface() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-gray-800">
      <Header />
      <main className="flex justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
