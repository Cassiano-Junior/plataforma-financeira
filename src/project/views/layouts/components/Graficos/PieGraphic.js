import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 1200 },
  { name: "Group B", value: 300 },
  
];
const COLORS = ["#6EB5E5", "#EEEEEE"];

export default function PieGraphic() {
  return (
      <PieChart width={250} height={180}>
      <Pie
        data={data}
        cx={120}
        cy={85}
        innerRadius={60}
        outerRadius={90}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
      </Pie>
      
    </PieChart>
  );
}