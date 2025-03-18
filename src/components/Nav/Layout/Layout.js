import React, { Fragment } from "react";
import { Navbar } from "../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
