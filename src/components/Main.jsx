import React from "react";
import Sidebar from "./Sidebar";
import Container from "./Container";

function Main() {
  return (
    <div className="flex w-fit h-fit">
      <Sidebar />
      <Container />
    </div>
  );
}

export default Main;
