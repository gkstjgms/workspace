import React from "react";
import Navbar from "../../../app/Navbar";
import Tab from "../../../components/tab";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

// Release note json file 필요
const guiList = {
  version: "1.0.1",
  date: "2022/00/00",
  link: "https://www.google.com",
};

const Gui = () => {
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.user);

  if (!users.isLogined) {
    navigate("/");
  }

  return (
    <div>
      <Navbar />
      <Tab
        name="GUI"
        version={guiList.version}
        date={guiList.date}
        link={guiList.link}
      />
    </div>
  );
};

export default Gui;
