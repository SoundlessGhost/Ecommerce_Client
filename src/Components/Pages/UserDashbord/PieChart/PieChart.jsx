// import React from 'react';

import {
  Legend,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

const PieChart = () => {
  const data1 = [
    {
      subject: "Math",
      A: 100,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Chinese",
      A: 100,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "English",
      A: 100,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Geography",
      A: 100,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Physics",
      A: 100,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "History",
      A: 100,
      B: 130,
      fullMark: 150,
    },
  ];
  return (
    <div className="   absolute left-0 ">
      <RadarChart outerRadius={90} width={300} height={250} data={data1}>
        <PolarGrid />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name=""
          dataKey="A"
          stroke="#dadbcc"
          fill="#383f8f"
          fillOpacity={0.6}
        />
        <Radar
          name=""
          dataKey="B"
          stroke="#82ca9d"
          fill="#5cc452"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default PieChart;
