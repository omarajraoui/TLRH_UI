import Login from "./Components/Infos/Login"; 
import Register from "./Components/Infos/Register";
import ErrorPage from "./Components/Infos/ErrorPage";
import ResetPassword from "./Components/Infos/ResetPassword";
import Navbar from "./Components/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          
        <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

    </>



  );
}

export default App;
