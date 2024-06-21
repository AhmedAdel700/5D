import { ResponsivePie } from "@nivo/pie";

const PieChart = ({
  data,
  size = 160,
  activeColor = "#7579FF",
  inactiveColor = "#EDEEFF",
}) => {
  const chartData = [
    {
      id: "active",
      label: "active",
      value: data.percentage,
      color: activeColor,
    },
    {
      id: "inactive",
      label: "inactive",
      value: 100 - data.percentage,
      color: inactiveColor,
    },
  ];

  return (
    <div className="pie-chart-container" style={{ width: size, height: size }}>
      <ResponsivePie
        data={chartData}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        innerRadius={0.8}
        padAngle={0.7}
        cornerRadius={0}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        colors={{ datum: "data.color" }}
      />
    </div>
  );
};

export default PieChart;
