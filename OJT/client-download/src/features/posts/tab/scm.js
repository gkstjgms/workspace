import React from "react";
import Tab from "../../../components/tab";

const scmList = {
  version: "1.0.2",
  date: "2022/00/00",
};

const Scm = () => {
  return <Tab version={scmList.version} date={scmList.date} />;
};

export default Scm;
