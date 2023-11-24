import Highcharts from "highcharts"; //core
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more"; //module

export default function TechnicalSkills() {
  HC_more(Highcharts); //init module

  if (typeof Highcharts === "object") {
    HC_more(Highcharts);
  }
  const options = {
    chart: {
      type: "packedbubble",
    },
    title: {
      text: "Technical skills",
    },
    series: [
      {
        name: "Languages",
        data: [
          {
            name: "Category 1",
            value: 50,
          },
          {
            name: "Category 2",
            value: 12,
          },
          {
            name: "Category 3",
            value: 33,
          },
          {
            name: "Category 4",
            value: 45,
          },
          {
            name: "Category 5",
            value: 60,
          },
        ],
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
