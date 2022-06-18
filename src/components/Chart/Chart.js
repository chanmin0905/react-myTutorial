import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = ({expenses}) => {
  const dataPointValues = expenses.map((expense) => expense.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {expenses.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
