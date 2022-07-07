import React from "react";
import Navbar from "../../app/Navbar";
import MainTab from "../../components/mainTab";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// Release note json file 연동 필요
let obj = JSON.parse(
  '{"version": "1.0.4", "date": "2022-06-15", "note": "업데이트 된 내용을 적습니다.", "link": "http://192.168.0.118:8080/Zone-Editor/v1.0.4/zone-editor-1.0.4-win32.exe"}'
);

var getJSON = function (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

getJSON("http://192.168.0.118:8080/release_list.json", function (err, data) {
  if (err !== null) {
    alert("Something went wrong: " + err);
  } else {
    alert("Your query count: " + data.countryCode);
  }
});

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
        version={obj.version}
        date={obj.date}
        note={obj.note}
        link={obj.link}
      />
    </div>
  );
};

export default Main;
