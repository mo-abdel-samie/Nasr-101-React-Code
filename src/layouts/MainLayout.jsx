import { Outlet } from "react-router-dom";
import MainFooter from "../components/MainFooter";
import MainNavbar from "../components/MainNavbar";

export default function MainLayout() {
  return (
    <>
      <MainNavbar />
      <main className="bg-secondary">
        <section className="container py-5">
          <Outlet />
        </section>
      </main>
      <MainFooter />
    </>
  );
}