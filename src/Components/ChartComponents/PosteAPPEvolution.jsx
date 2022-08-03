import { faker } from "@faker-js/faker";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReportingService from "../../services/ReportingService";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";

const generateValues = (dataArray) => {
  const datePosts = [];
  const posteName = [];
  dataArray.forEach((e) => {
    datePosts.push(e["datePost"]);
    posteName.push(e["postName"]);
  });

  return [datePosts.reverse(), posteName.reverse()];
};

const ChartGraph = (data, options, loading) => {
  return (
    <div className="w-full p-1 ">
      <h2 className="text-xl m-2 text-center font-bold  ">
        Graphe de l'évolution du poste APP par année
      </h2>
      {!loading ? (
        <Line options={options} data={data} />
      ) : (
        <div className="text-center m-auto p-1 ">
          <ReactBootStrap.Spinner animation="border" />
        </div>
      )}
    </div>
  );
};

const PosteAPPEvolution = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState([
    {
      id: id,
      datePost: "",
      postName: "",
    },
  ]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    setloading(true);
    try {
      //data could use some time to render so we use the await
      //so we convert the method to async
      const response = await ReportingService.getPosteAPPById(id);
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

  console.log(generateValues(datas)[0]);
  console.log(generateValues(datas)[1]);

  const columns = [
    { dataField: "postName", text: "Nom du poste" },
    { dataField: "datePost", text: "Date du poste" },
  ];

  const data = {
    labels: generateValues(datas)[0],
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2, 3, 6],
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
    <div className="mx-2 my-2 grid grid-cols-2 space-x-2">
      {/* Components of table and chart of Evolution  */}

      <h1 className="text-2xl m-2 mb-4 text-center col-span-2 font-bold ">
        Evolution du poste APP du collaborateur {faker.name.firstName()} par
        année
      </h1>

      {ChartGraph(data, options, loading)}

      <div className="w-full p-1">
        <h2 className="text-xl m-2 text-center font-bold ">
          Table de l'évolution du poste APP par année
        </h2>
        {!loading ? (
          <BootstrapTable
            keyField="id"
            data={datas}
            columns={columns}
            pagination={paginationFactory()}
          ></BootstrapTable>
        ) : (
          <div className="text-center m-auto p-1 ">
            <ReactBootStrap.Spinner animation="border" />
          </div>
        )}
        {/* {Table(data)} */}
      </div>
    </div>
  );
};

export default PosteAPPEvolution;
