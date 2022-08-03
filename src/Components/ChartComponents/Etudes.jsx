import { faker } from "@faker-js/faker";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";
import ReportingService from "../../services/ReportingService";

import * as ReactBootStrap from "react-bootstrap";

const coutByCritere = (arrayTechno, data, name) => {
  const res = [];
  arrayTechno.forEach((techno) => {
    let cpt = 0;
    data.forEach((e) => {
      if (e[name] == techno) {
        cpt++;
      }
    });
    res.push(cpt);
  });
  return res;
};
const generateValues = (dataArray) => {
  const ecole = [];
  const niveau = [];
  const promotion = [];
  const typeDiplome = [];
  const typeEcole = [];
  dataArray.forEach((e) => {
    ecole.push(e["ecole"]);
    niveau.push(e["niveau"]);
    promotion.push(e["promotion"]);
    typeDiplome.push(e["typeDiplome"]);
    typeEcole.push(e["typeEcole"]);
  });

  return [ecole, niveau, promotion, typeDiplome, typeEcole];
};

const ChartGraph = (data, options, name) => {
  return (
    <div className="lg:w-full md:w-full sm:w-8/12 m-auto  p-1 ">
      <h2 className="text-xl m-2 text-center font-bold  ">
        Graphe de pourcentage par {name}
      </h2>
      <Doughnut options={options} data={data} />
    </div>
  );
};

const labels = ["ENSIAS", "AIAC", "FST", "INPT"];
const Etudes = () => {
  const [datas, setDatas] = useState([
    {
      id: 0,
      ecole: "",
      niveau: "",
      promotion: "",
      typeDiplome: "",
      typeEcole: "",
    },
  ]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    setloading(true);
    try {
      //data could use some time to render so we use the await
      //so we convert the method to async
      const response = await ReportingService.getDiplomes();
      setDatas(response.data);
      //console.log(datas);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };
  useEffect(() => {
    fetchData();
    //console.log(datas);
  }, []);
  console.log(generateValues(datas));

  const labels1 = Array.from(new Set(generateValues(datas)[0]));
  const labels2 = Array.from(new Set(generateValues(datas)[1]));
  const labels3 = Array.from(new Set(generateValues(datas)[3]));
  const datay1 = coutByCritere(labels1, datas, "ecole").map(
    (e) => e * coutByCritere(labels1, datas, "ecole").reduce((a, b) => a + b, 0)
  );
  const datay2 = coutByCritere(labels2, datas, "niveau").map(
    (e) =>
      e * coutByCritere(labels2, datas, "niveau").reduce((a, b) => a + b, 0)
  );
  const datay3 = coutByCritere(labels3, datas, "typeDiplome").map(
    (e) =>
      e *
      coutByCritere(labels3, datas, "typeDiplome").reduce((a, b) => a + b, 0)
  );
  const data1 = {
    labels: labels1,
    datasets: [
      {
        label: "Dataset 1",
        data: datay1,
        backgroundColor: [
          "rgb(84, 34, 88)",
          "rgba(255, 99, 13)",
          "rgb(54, 162, 235)",

          "rgb(23, 73, 25)",
        ],
      },
    ],
  };
  const data2 = {
    labels: labels2,
    datasets: [
      {
        label: "Dataset 1",
        data: datay2,
        backgroundColor: [
          "rgb(84, 34, 88)",
          "rgb(23, 73, 25)",
          "rgba(255, 99, 132, 0.5)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  };

  const data3 = {
    labels: labels3,
    datasets: [
      {
        label: "Dataset 1",
        data: datay3,
        backgroundColor: [
          "rgb(255, 23, 32)",
          "rgb(73, 81, 12)",
          "rgb(84, 34, 88)",
          "rgb(23, 73, 25)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        position: "bottom",
        text: "Chart.js Line Chart",
      },
    },
  };
  return (
    <div className="mx-2 my-2 ">
      {/* Components of table and chart of Evolution  */}

      <h1 className="text-2xl m-2 mb-4 text-center font-bold ">
        Le pourcentage par études
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-3 content-center">
        {ChartGraph(data1, options, "école en %")}
        {ChartGraph(data2, options, "diplôme en %")}
        {ChartGraph(data3, options, "type de diplôme en %")}
      </div>
    </div>
  );
};

export default Etudes;
