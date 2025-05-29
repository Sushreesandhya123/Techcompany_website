import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-200px)] w-full pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;