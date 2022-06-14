import React from "react";
import { RiFolderDownloadFill } from "react-icons/ri";

const Tab = ({ version, date }) => {
  return (
    <section className="post-section">
      <div className="post-title">
        <h2>{version}</h2>
        <p className="date">{date}</p>
      </div>
      <div className="post-download">
        <h1>DOWNLOAD</h1>
        <RiFolderDownloadFill size={35} className="icon" />
      </div>
    </section>
  );
};

export default Tab;
