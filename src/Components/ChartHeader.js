import React from "react";
import TextRenderer from "./TextRenderer";
import "../Styles/header.scss";

const ChartHeader = (props) => {
  return (
    <div className="chartHeaderWrapper">
      <div className="headerDataWrapper">
        <TextRenderer classToAdd={"balnaceTitle"} textToRender={"My balance"} />
        <TextRenderer classToAdd={"balanceData"} textToRender={"$921.48"} />
      </div>
      <div className="imageWrapper">
        <img
          sizes=""
          src="/images/logo.svg"
          alt="logo"
          className="imageClass"
        />
      </div>
    </div>
  );
};

export default ChartHeader;
