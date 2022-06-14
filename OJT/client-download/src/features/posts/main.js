import React from "react";
import { RiFolderDownloadFill } from "react-icons/ri";

const Main = () => {
  return (
    <section className="post-section">
      <div className="post-title">
        <h2>{`1.0.0`}</h2>
        <p className="date">2022/00/00</p>
      </div>
      <div className="post-note">
        <h2>Release note</h2>
        <p>업데이트 된 내용을 적습니다.</p>
      </div>
      <div className="post-download">
        <h1>DOWNLOAD</h1>
        <RiFolderDownloadFill size={35} className="icon" />
      </div>
    </section>
  );
};

export default Main;
