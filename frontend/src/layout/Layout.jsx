import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Routers from "../../src/routes/Routers";
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
