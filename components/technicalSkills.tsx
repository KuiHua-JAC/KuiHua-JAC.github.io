import Highcharts from "highcharts"; //core
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more"; //module
import HighchartsExporting from "highcharts/modules/exporting";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
  HC_more(Highcharts);
}

const options = {
  title: {
    text: "Technical skills",
    align: "center",
  },
  tooltip: {
    useHTML: true,
    pointFormat: "<b>{point.name}:</b> {point.value}/100",
  },
  chart: {
    type: "packedbubble",
    backgroundColor: "#CBCBD4",
  },
  plotOptions: {
    packedbubble: {
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        style: {
          color: "black",
          textOutline: "none",
          fontWeight: "normal",
        },
      },
      minSize: "50%",
      maxSize: "150%",
    },
  },
  series: [
    {
      name: "Programming Languages",
      data: [
        { value: 80, name: "C#" },
        { value: 70, name: "Java" },
        { value: 80, name: "JavaScript" },
        { value: 50, name: "Python" },
        { value: 50, name: "Bash" },
        { value: 70, name: "TypeScript" },
        { value: 70, name: "Kotlin" },
        { value: 60, name: "PHP" },
      ],
    },
    {
      name: "Frameworks",
      data: [
        { value: 70, name: "WPF" },
        { value: 70, name: "React" },
        { value: 75, name: "React Native" },
        { value: 20, name: "Angular" },
        { value: 40, name: "Astro" },
        { value: 40, name: "NestJS" },
        { value: 30, name: "Jinja" },
        { value: 70, name: "Node.js" },
      ],
    },
    {
      name: "Web Technologies",
      data: [
        { value: 80, name: "HTML" },
        { value: 60, name: "CSS" },
        { value: 75, name: "Tailwind" },
      ],
    },
    {
      name: "Database Technologies",
      data: [
        { value: 70, name: "SQL" },
        { value: 60, name: "MongoDB" },
        { value: 60, name: "SQLAlchemy" },
      ],
    },
    {
      name: "Testing Tools",
      data: [
        { value: 30, name: "Cypress" },
        { value: 30, name: "Jest" },
        { value: 60, name: "Unit testing" },
        { value: 40, name: "E2E testing" },
      ],
    },
    {
      name: "Methodologies and Tools",
      data: [
        { value: 80, name: "Agile methodologies" },
        { value: 70, name: "Jira" },
        { value: 80, name: "Trello" },
        { value: 80, name: "CI/CD" },
        { value: 80, name: "Flowcharts" },
        { value: 70, name: "Figma" },
      ],
    },
  ],
};

export default function TechnicalSkills() {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      constructorType={"chart"}
    />
  );
}
