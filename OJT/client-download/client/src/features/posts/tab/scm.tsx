import React from "react";
import Navbar from "../../../app/Navbar";
import Tab from "../../../components/tab";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

// Release note json file 필요
const scmList = {
  version: "1.0.2",
  date: "2022-00-00",
  link: "https://www.google.com",
};

const Scm = () => {
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.user);

  if (!users.isLogined) {
    navigate("/");
  }

  return (
    <div>
      <Navbar />
      <Tab
        name="SCM"
        version={scmList.version}
        date={scmList.date}
        link={scmList.link}
      />
    </div>
  );
};

export default Scm;
