import React from "react";
import { RiFolderDownloadFill } from "react-icons/ri";

const TabRT = ({ name, version, date, link1, link2 }) => {
  return (
    <section className="post-section">
      <div className="post-title">
        <h2>{`${name} ${version}`}</h2>
        <p className="date">{date}</p>
      </div>
      <div className="post-download">
        <h1>R300</h1>
        <a href={link1} className="link">
          <RiFolderDownloadFill size={35} className="icon" />
        </a>
        <h1>T300</h1>
        <a href={link2} className="link">
          <RiFolderDownloadFill size={35} className="icon" />
        </a>
      </div>
    </section>
  );
};

export default TabRT;
