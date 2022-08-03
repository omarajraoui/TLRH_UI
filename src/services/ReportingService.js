import axios from "axios";

const REPORTING_API_BASE_URL = "http://localhost:8080/rapports/";
const Collabs_API_BASE_URL = "http://localhost:8080/collabs/";

class EmployeeService {
  getCompetenceById(id) {
    return axios.get(REPORTING_API_BASE_URL + "competence/" + id);
  }

  getSexe() {
    return axios.get(REPORTING_API_BASE_URL + "sexe");
  }
  getCompetences() {
    return axios.get(REPORTING_API_BASE_URL + "competences");
  }

  getDiplomes() {
    return axios.get(REPORTING_API_BASE_URL + "diplomes");
  }

  getPosteAPPById(id) {
    return axios.get(REPORTING_API_BASE_URL + "poste/" + id);
  }
  getSalaireById(id) {
    return axios.get(REPORTING_API_BASE_URL + "salaire/" + id);
  }

  getCollabById(id) {
    return axios.get(Collabs_API_BASE_URL + "getCollab/" + id);
  }
}

export default new EmployeeService();
