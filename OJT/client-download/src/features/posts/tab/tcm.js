import React from "react";
import TabRT from "../../../components/tabRT";

const tcmList = {
  version: "1.0.4",
  date: "2022/00/00",
};

const Tcm = () => {
  return <TabRT version={tcmList.version} date={tcmList.date} />;
};

export default Tcm;
