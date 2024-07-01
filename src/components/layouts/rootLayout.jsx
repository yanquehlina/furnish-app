import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Navbar from "../navbar";

const RootLayout = () => {
  return (
   <>
   <Navbar />
   <Outlet/>
   <Footer />

   </>
  )
}

export default RootLayout;