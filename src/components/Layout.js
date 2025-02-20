
import React from "react";
import Topbar from "./topbar/Topbar";  
import Sidebar from "./sidebar/Sidebar";  
import './layout.css';

export default function Layout({ children }) {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <div className="side">
        <Sidebar />
        </div>
        <div className="content">{children}</div>
      </div>
    </>
  );
}
