import React from "react";
import { RiFolderDownloadFill } from "react-icons/ri";

const Tab = ({ name, version, date, link }) => {
  return (
    <section className="post-section">
      <div className="post-title">
        <h2>{`${name} ${version}`}</h2>
        <p className="date">{date}</p>
      </div>
      <div className="post-download">
        <h1>DOWNLOAD</h1>
        <a href={link} className="link">
          <RiFolderDownloadFill size={35} className="icon" />
        </a>
      </div>
    </section>
  );
};

export default Tab;
