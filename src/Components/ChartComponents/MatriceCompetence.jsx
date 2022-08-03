import { faker } from "@faker-js/faker";
import ReportingService from "../../services/ReportingService";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";

const MatriceCompetence = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState([
    {
      id: id,
      competenceName: "",
      expertise: "",
    },
  ]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    setloading(true);
    try {
      //data could use some time to render so we use the await
      //so we convert the method to async
      const response = await ReportingService.getCompetenceById(id);
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

  //const data = [generateRes(40)];
  console.log(datas);

  const columns = [
    { dataField: "competenceName", text: "Compétences" },
    { dataField: "expertise", text: "Niveau d’expertise" },
  ];
  return (
    <div className="mx-2 my-2 ">
      {/* Components of table and chart of Evolution  */}

      <h1 className="text-2xl m-2 mb-4 text-center  font-bold ">
        Evolution de la Matrice de Compétence du collaborateur{" "}
        {faker.name.firstName()} par niveau d’expertise
      </h1>

      <div className="w-full p-1">
        <h2 className="text-xl m-2 text-center font-bold ">
          Table de l'évolution de la Matrice de Compétence
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

export default MatriceCompetence;
