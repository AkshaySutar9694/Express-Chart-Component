import React, { useEffect, useState } from "react";
import TextRenderer from "./TextRenderer";
import "../Styles/chartrenderer.scss";

const ChartRenderer = (props) => {
  const [chartData, setChartData] = useState(null);
  const [selectedBar, setSelectedBar] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setChartData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="chartMainContainer">
      <div className="chartRendererWrapper">
        {!!chartData
          ? chartData.map((item, index) => {
              return (
                <div className="chartBarContainer">
                  <TextRenderer
                    classToAdd={"barTitle"}
                    textToRender={item.day}
                  />
                  <div
                    className={
                      selectedBar === index
                        ? "chartBarWrapperSelected"
                        : "chartBarWrapper"
                    }
                    style={{ height: item.amount + "%" }}
                    onClick={() => {
                      setSelectedBar(index);
                    }}
                  >
                    <span
                      className={
                        selectedBar === index
                          ? "chartBarToolTipSelected"
                          : "chartBarToolTip"
                      }
                    >
                      {"$" + item.amount}
                    </span>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <div className="chartBarLine"></div>
      <div className="dataWrapper">
        <div className="totalValueWrapper">
          <TextRenderer
            classToAdd={"totalValueLabel"}
            textToRender={"Total this month"}
          />
          <TextRenderer
            classToAdd={"totalValueData"}
            textToRender={
              chartData != null
                ? "$" +
                  chartData.reduce((acc, value) => {
                    return (acc += value.amount);
                  }, 0)
                : "$" + 0
            }
          />
        </div>
        <div className="totalPercentageWrapper">
          <TextRenderer classToAdd={"percentageValue"} textToRender={"+2.4%"} />
          <TextRenderer
            classToAdd={"percentageLabel"}
            textToRender={"from last month"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartRenderer;
