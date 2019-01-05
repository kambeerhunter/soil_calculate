import React from 'react';
import PropTypes from 'prop-types';

import { Line } from 'react-chartjs-2';

const LineChart = ({ data, lineColor }) => {
  const [time, ...restData] = data;
  const chartXData = [...Array(restData.length).keys()].map(i => (i * time).toFixed(2));
  const chartYData = [...restData].map((item, index) => {
    return { x: time * index, y: parseFloat(item) }
  });

  const lineData = {
    labels: chartXData,
    datasets: [
      {
        label: 'Accelerogram',
        data: chartYData,
        backgroundColor: lineColor,
        borderWidth: 2,
      },
    ],
  };

  return (
    <Line
      data={lineData}
    />
  );
}

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  lineColor: PropTypes.string.isRequired,
}

export { LineChart };
