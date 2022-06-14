import React from "react";
import Tab from "../../../components/tab";

const dbmList = {
  version: "1.0.0",
  date: "2022/00/00",
};

const Dbm = () => {
  return <Tab version={dbmList.version} date={dbmList.date} />;
};

export default Dbm;
