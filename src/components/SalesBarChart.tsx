import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", blue: 35, green: 27, red: 9 },
  { month: "Feb", blue: 6, green: 27, red: 9 },
  { month: "Mar", blue: 14, green: 7, red: 3 },
  { month: "Apr", blue: 14, green: 25, red: 10 },
  { month: "May", blue: 10, green: 2, red: 7 },
  { month: "Jun", blue: 37, green: 48, red: 7 },
  { month: "Jul", blue: 23, green: 37, red: 17 },
  { month: "Aug", blue: 23, green: 6, red: 17 },
  { month: "Sep", blue: 37, green: 33, red: 6 },
];

export default function SalesBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barCategoryGap="16" barGap={3}>
        <CartesianGrid strokeDasharray="3 3" stroke="" />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 10, fill: "#666" }}
        />
        <YAxis
          axisLine={{ stroke: "#E4E4E4" }}
          tickLine={false}
          tick={{ fontSize: 10, fill: "#919191" }}
          minTickGap={13}
          domain={[0, 50]}
          ticks={[0, 10, 20, 30, 40, 50]}
          tickFormatter={(value) => ` ${value > 0 ? value + "m" : value}`}
        />
        <Bar dataKey="blue" fill="#4545FE" barSize={5} />
        <Bar dataKey="green" fill="#12B76A" barSize={5} />
        <Bar dataKey="red" fill="#F04438" barSize={5} />
      </BarChart>
    </ResponsiveContainer>
  );
}
