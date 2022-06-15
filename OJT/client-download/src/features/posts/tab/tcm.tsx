import React from "react";
import Navbar from "../../../app/Navbar";
import TabRT from "../../../components/tabRT";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

// Release note json file 필요
const tcmList = {
  version: "1.0.4",
  date: "2022/00/00",
  link1: "https://www.google.com",
  link2: "https://www.naver.com",
};

const Tcm = () => {
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.user);

  if (!users.isLogined) {
    navigate("/");
  }

  return (
    <div>
      <Navbar />
      <TabRT
        name="TCM"
        version={tcmList.version}
        date={tcmList.date}
        link1={tcmList.link1}
        link2={tcmList.link2}
      />
    </div>
  );
};

export default Tcm;
