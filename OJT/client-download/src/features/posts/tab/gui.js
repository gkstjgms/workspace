import React from "react";
import Tab from "../../../components/tab";

const guiList = {
  version: "1.0.1",
  date: "2022/00/00",
};

const Gui = () => {
  return <Tab version={guiList.version} date={guiList.date} />;
};

export default Gui;
