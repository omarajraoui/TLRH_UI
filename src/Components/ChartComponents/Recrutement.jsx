import { faker } from "@faker-js/faker";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const ChartGraph = (data, options) => {
  return (
    <div className="w-6/12 m-auto p-1 ">
      <h2 className="text-xl m-2 text-center font-bold  ">
        Graphe d'évolution du Recrutement par année
      </h2>
      <Line options={options} data={data} />
    </div>
  );
};
const start = 2010;
const end = 2022;
const labels = [...Array(end - start + 1).keys()].map((x) => x + start);

const Recrutement = () => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        position: "bottom",
        text: "Chart.js Line Chart",
      },
    },
  };
  return (
    <div className="mx-2 my-2">
      {/* Components of table and chart of Evolution  */}

      <h1 className="text-2xl m-2 mb-4 text-center font-bold ">
        Evolution du Recrutement par année
      </h1>

      {ChartGraph(data, options)}
    </div>
  );
};

export default Recrutement;
