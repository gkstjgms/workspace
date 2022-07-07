import React from "react";
import Navbar from "../../../app/Navbar";
import Tab from "../../../components/tab";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

// Release note json file 필요
const dbmList = {
  version: "1.0.0",
  date: "2022-00-00",
  link: "https://www.google.com",
};

const Dbm = () => {
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.user);

  if (!users.isLogined) {
    navigate("/");
  }

  return (
    <div>
      <Navbar />
      <Tab
        name="DBM"
        version={dbmList.version}
        date={dbmList.date}
        link={dbmList.link}
      />
    </div>
  );
};

export default Dbm;
