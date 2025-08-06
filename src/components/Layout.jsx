import Footer from "./commonLayout/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./commonLayout/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
