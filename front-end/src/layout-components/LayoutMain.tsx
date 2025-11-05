import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function LayoutMain() {
  return (
    <main className="w-full mx-auto md:w-192 min-w-80">
      <Header />
      <div className="p-4 md:pt-10">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
