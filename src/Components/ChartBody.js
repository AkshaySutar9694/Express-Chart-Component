import React from "react";
import TextRenderer from "./TextRenderer";
import ChartRenderer from "./ChartRenderer";
import "../Styles/chartbody.scss";

const ChartBody = (props) => {
  return (
    <div className="chartBodyWrapper">
      <TextRenderer
        classToAdd={"chartHeaderTitle"}
        textToRender={"Spending - Last 7 days"}
      />
      <ChartRenderer />
    </div>
  );
};

export default ChartBody;
