import React from "react";
import Sidebar from "./Sidebar";
import Container from "./Container";

function Main() {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <Container />
    </div>
  );
}

export default Main;
