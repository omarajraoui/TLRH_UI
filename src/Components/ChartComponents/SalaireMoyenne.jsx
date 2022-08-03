import { faker } from "@faker-js/faker";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";

const Chart = (data, options, labelsToshow) => {
  return (
    <div className="w-10/12 p-1 m-auto col-span-2 ">
      <Line options={options} data={data} />
    </div>
  );
};

const moyenneSurDureeData = (startValue, endValue) => {
  const end = Date.parse(endValue).valueOf(endValue);
  const start = Date.parse(startValue).valueOf(startValue);
  let period = end - start + 1;
  let res = ((end / start) ** (1 / period) - 1) * 10 ** 13;

  return res.toFixed(2);
};
const ValueofSalaire = (datas) => {
  const salaire = [];
  datas.forEach((e) => {
    salaire.push(e["salaire"]);
  });
  return salaire;
};

const generateStartEnd = (data, datas, startValue, endValue) => {
  const res = [];
  const list1 = [...data["labels"]];
  const list2 = [...ValueofSalaire(datas)];
  const indexOfStart = data["labels"].indexOf(startValue);
  const indexOfEnd = data["labels"].indexOf(endValue) + 1; // depends on array if is it desc or asc
  res.push(list1.slice(indexOfStart, indexOfEnd));
  res.push(list2.slice(indexOfStart, indexOfEnd));

  return res;
};

const SalaireMoyenne = ({ data, datas, options, loading, name }) => {
  const newData = { ...data };
  const labels = newData["labels"];
  const n = labels.length;
  const [dateDebut, setDateDebut] = useState(labels[0]);
  const [dateFin, setDateFin] = useState(labels[n - 1]);
  const labelsToshow = generateStartEnd(data, datas, dateDebut, dateFin);

  const dataToshow = {
    labels: labelsToshow[0],
    datasets: [
      {
        label: "Salaire",
        data: labelsToshow[1],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="mx-2 my-2 grid grid-cols-2 space-x-2">
      <h1 className=" text-2xl m-2 mb-4 text-center col-span-2 font-bold ">
        La moyenne d'évolution de salaire du collaborateur {name} sur ce range
        est{" "}
        <span className="text-red-600">
          {moyenneSurDureeData(dateDebut, dateFin)}
          {"%"}
        </span>
      </h1>
      <form className="w-full m-auto p-4  ">
        <fieldset>
          <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
            <label htmlFor="frm-whatever" className="sr-only">
              My field
            </label>

            <select
              className="appearance-none w-full py-1 px-2 bg-white"
              name="whatever"
              id="frm-whatever"
              onChange={(e) => setDateDebut(e.currentTarget.value)}
            >
              <option key="0" value={labels[0]}>
                Selectionner Date de début
              </option>
              {labels
                .slice()
                .reverse()
                .map(
                  (l) =>
                    Date.parse(l).valueOf(l) <
                      Date.parse(dateFin).valueOf(dateFin) && (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    )
                )}
            </select>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </fieldset>
        {/* <h1>{dateDebut}</h1> */}
      </form>
      <form className="w-full m-auto p-4  ">
        <fieldset>
          <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
            <label htmlFor="frm-whatever" className="sr-only">
              My field
            </label>

            <select
              className="appearance-none w-full py-1 px-2 bg-white"
              name="whatever"
              id="frm-whatever"
              onChange={(e) => setDateFin(e.currentTarget.value)}
            >
              <option key="0" value={labels[n - 1]}>
                Selectionner date de fin
              </option>

              {labels
                .slice()
                .reverse()
                .map(
                  //
                  (l) =>
                    Date.parse(l).valueOf(l) >=
                      Date.parse(dateDebut).valueOf(dateDebut) && (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    )
                )}
            </select>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </fieldset>
        {/* <h1>{dateFin}</h1> */}
      </form>

      {/* Components of table and chart of moy Evolution  */}
      {!loading ? (
        Chart(dataToshow, options, labelsToshow)
      ) : (
        <div className="text-center m-auto p-1 ">
          <ReactBootStrap.Spinner animation="border" />
        </div>
      )}
    </div>
  );
};

export default SalaireMoyenne;
