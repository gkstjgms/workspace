import React from "react";
import Navbar from "../../app/Navbar";
import MainTab from "../../components/mainTab";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// Release note json file 필요
const mainList = {
  version: "1.0.0",
  date: "2022/00/00",
  note: "업데이트 된 내용을 적습니다.",
  link: "https://www.google.com",
};

const Main = () => {
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.user);

  if (!users.isLogined) {
    navigate("/");
  }

  return (
    <div>
      <Navbar />
      <MainTab
        version={mainList.version}
        date={mainList.date}
        note={mainList.note}
        link={mainList.link}
      />
    </div>
  );
};

export default Main;
