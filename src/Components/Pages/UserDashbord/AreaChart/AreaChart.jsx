// import React from 'react';

import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { data } from "../../../../utilities/areaChart";

const DashboardAreaChart = () => {
  return (
    <div>
      <AreaChart
        className="c"
        width={550}
        height={250}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorMath" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorEng" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPhy" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#eb0c0c" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#eb0c0c" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis dataKey="Y" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Math"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorMath)"
        />
        <Area
          type="monotone"
          dataKey="Eng"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorEng)"
        />
        <Area
          type="monotone"
          dataKey="Phy"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPhy)"
        />
      </AreaChart>
    </div>
  );
};

export default DashboardAreaChart;
