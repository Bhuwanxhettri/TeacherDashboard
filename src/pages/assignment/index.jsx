import { useState } from "react";
import NavBar from "@/component/NavBar";
import MyEditor from "@/component/Editor";

const index = () => {
  return (
    <div className="flex">
      <div>
        <NavBar />
      </div>
      <div className="ml-56 mt-5 px-5">
        <MyEditor />
      </div>
    </div>
  );
};

export default index;
