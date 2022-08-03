import { useNavigate } from "react-router";

const Rapports = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-8 my-8 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-8 content-center">
      <h1 className="text-2xl mx-auto lg:col-span-4 sm:col-span-1 md:col-span-2 font-bold ">
        Bilans de compétences
      </h1>

      <button
        onClick={() => navigate("/rapports/salaire")}
        className=" bg-cyan-600 hover:bg-cyan-700 text-white  py-4 px-4 rounded"
      >
        Evolution de salaire
      </button>

      <button
        onClick={() => navigate("/rapports/posteApp")}
        className=" bg-cyan-600 hover:bg-cyan-700 text-white  py-4 px-4 rounded "
      >
        Evolution du poste APP
      </button>
      <button
        onClick={() => navigate("/rapports/competence")}
        className=" bg-cyan-600 hover:bg-cyan-700 text-white  py-4 px-4 rounded"
      >
        Matrice de compétence
      </button>
      <button
        onClick={() => navigate("/rapports/ratioFemininMasculin")}
        className=" bg-cyan-800 hover:bg-cyan-700 text-white  py-4 px-4 rounded"
      >
        Ratio Féminin masculin
      </button>
      <button
        onClick={() => navigate("/rapports/recrutement")}
        className=" bg-cyan-800 hover:bg-cyan-700 text-white  py-4 px-4 rounded"
      >
        Evolution recrutement par année
      </button>
      <button
        onClick={() => navigate("/rapports/turnOver")}
        className=" bg-cyan-800 hover:bg-cyan-700 text-white  py-4 px-4 rounded"
      >
        Taux de turn over
      </button>
      <button
        onClick={() => navigate("/rapports/technologie")}
        className=" bg-cyan-800 hover:bg-cyan-700 text-white  py-4 px-4 rounded"
      >
        Pourcentage de chaque technologie
      </button>
      <button
        onClick={() => navigate("/rapports/etudes")}
        className=" bg-cyan-800 hover:bg-cyan-700 text-white  py-4 px-4 rounded"
      >
        Pourcentage par école, par diplôme, par type de diplôme
      </button>
    </div>
  );
};

export default Rapports;
