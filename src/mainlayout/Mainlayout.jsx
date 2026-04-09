import { Outlet } from "react-router";
import CustomNavbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function Mainlayout() {
  return (
    <>
      <CustomNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
