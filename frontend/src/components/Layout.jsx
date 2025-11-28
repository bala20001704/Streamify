import React, { Children } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSidebar = false }) => {
  return (
    <div className="min-h-screen">
      <div className="flex bg-orange-200">
        {showSidebar && <Sidebar />}

        <div className="flex-1 flex flex-col bg-base-300">
          <Navbar />
          <main className="flex-1 overflow-y-auto bg-base-400">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
