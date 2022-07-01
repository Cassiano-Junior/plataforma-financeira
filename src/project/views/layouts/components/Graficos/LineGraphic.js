import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Jan",
    Investimento: 4000,
    Saque: 2400,
  },
  {
    name: "Fev",
    Investimento: 3000,
    Saque: 1398,
  },
  {
    name: "Mar",
    Investimento: 2000,
    Saque: 1800,
  },
  {
    name: "Abr",
    Investimento: 2780,
    Saque: 3908,
  },
  {
    name: "Mai",
    Investimento: 1890,
    Saque: 4800,
  },
  {
    name: "Jun",
    Investimento: 2390,
    Saque: 3800,
  },
  {
    name: "Jul",
    Investimento: 3490,
    Saque: 4300,
  }
];

export default function LineGraphic() {
  return (
    <ResponsiveContainer className="w-[100%]" height={300}>
    <LineChart
      width={100}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Investimento"
        stroke="#6EB5E5"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Saque" stroke="#F86B4E" />
    </LineChart>
    </ResponsiveContainer>
  );
}