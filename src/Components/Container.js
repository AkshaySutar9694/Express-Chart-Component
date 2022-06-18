import React from "react";
import ChartBody from "./ChartBody";
import ChartHeader from "./ChartHeader";
import "../Styles/container.scss";

const Container = (props) => {
  return (
    <div className="mainContainerWrapper">
      <ChartHeader />
      <ChartBody />
    </div>
  );
};

export default Container;
