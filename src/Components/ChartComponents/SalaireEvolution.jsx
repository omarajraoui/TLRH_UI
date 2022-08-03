import { faker } from "@faker-js/faker";
import { Line } from "react-chartjs-2";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";

const ChartGraph = (data, options) => {
  return (
    <div className="w-full p-1 ">
      <h2 className="text-xl m-2 text-center font-bold  ">
        Graphe de l'évolution de salaire du collaborateur par année
      </h2>
      <Line options={options} data={data} />
    </div>
  );
};

const SalaireEvolution = ({ data, datas, options, columns, loading, name }) => {
  return (
    <div className="mx-2 my-2 grid grid-cols-2 space-x-2">
      {/* Components of table and chart of Evolution  */}

      <h1 className="text-2xl m-2 mb-4 text-center col-span-2 font-bold ">
        Evolution de salaire du collaborateur {name} par année
      </h1>
      {!loading ? (
        ChartGraph(data, options)
      ) : (
        <div className="text-center m-auto p-1 ">
          <ReactBootStrap.Spinner animation="border" />
        </div>
      )}

      <div className="w-full p-1">
        <h2 className="text-xl m-2 text-center font-bold ">
          Table de l'évolution de salaire du collaborateur par année
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

export default SalaireEvolution;
