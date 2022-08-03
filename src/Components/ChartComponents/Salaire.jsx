import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReportingService from "../../services/ReportingService";

import SalaireEvolution from "./SalaireEvolution";
import SalaireMoyenne from "./SalaireMoyenne";

const generateValues = (dataArray) => {
  const dateSalaire = [];
  const salaire = [];
  dataArray.forEach((e) => {
    dateSalaire.push(e["dateSalaire"]);
    salaire.push(e["salaire"]);
  });

  return [dateSalaire, salaire];
};

const Salaire = () => {
  const { id } = useParams();
  const [type, setType] = useState("0");
  const [datas, setDatas] = useState([
    {
      id: id,
      dateSalaire: "",
      salaire: "",
    },
  ]);
  const [collab, setcollab] = useState([
    {
      id: id,
      name: "",
      dateEmbauche: "",
      sexe: "",
    },
  ]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    setloading(true);
    try {
      const response1 = await ReportingService.getSalaireById(id);
      setDatas(response1.data);
      const response2 = await ReportingService.getCollabById(id);
      setcollab(response2.data);
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { dataField: "salaire", text: "Salaire" },
    { dataField: "dateSalaire", text: "Date du Salaire" },
  ];

  const data = {
    labels: generateValues(datas)[0],
    datasets: [
      {
        label: "Dataset 1",
        data: generateValues(datas)[1],
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
        display: true,
        position: "top",
        text: "Graphe de l'évolution de salaire du collaborateur",
      },
    },
  };

  return (
    <div>
      <form className="w-full m-auto p-4 col-span-2 ">
        <fieldset>
          <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
            <label htmlFor="frm-whatever" className="sr-only">
              My field
            </label>

            <select
              className="appearance-none w-full py-1 px-2 bg-white"
              name="whatever"
              id="frm-whatever"
              onChange={(e) => setType(e.currentTarget.value)}
            >
              <option key="0" value="0">
                Selectionner ...
              </option>
              <option key="1" value="1">
                Mon évolution du salaire
              </option>
              <option key="2" value="2">
                Mon évolution de la moyenne d’augmentation du salaire par durée
              </option>
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
      </form>
      {type == 1 ? (
        <SalaireEvolution
          name={collab["name"]}
          datas={datas}
          data={data}
          options={options}
          columns={columns}
          loading={loading}
        />
      ) : type == 2 ? (
        <SalaireMoyenne
          datas={datas}
          name={collab["name"]}
          data={data}
          options={options}
          columns={columns}
          loading={loading}
        />
      ) : (
        <h2 className="text-xl m-2 text-center font-bold  ">
          Merci de choisir un type à afficher.
        </h2>
      )}
    </div>
  );
};

export default Salaire;
