import './App.css';
import React from "react";
import RegisterCompany from "./feauters/auth/RegisterCompany";
import RegisterUser from "./feauters/auth/RegisterUser";
import HomePage from "./feauters/homePage/HomePage";
import Login from "./feauters/auth/Login";
import {BrowserRouter, Outlet, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./feauters/navBar/NavBar";
import MyVacancies from "./feauters/vacancies/MyVacancies";
import Vacancies from "./feauters/vacancies/Vacancies";

const App = () =>  {
  return (
      <BrowserRouter>
          <div className="App">
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/register/company" element={<RegisterCompany />} />
                      <Route path="/register/user" element={<RegisterUser />} />
                      <Route path="/login" element={<Login />} />
                      <Route element={<WithNavBar />}>
                          <Route path="/my-vacancies" element={<ProtectedRoute element={MyVacancies} />} />
                          <Route path="/vacancies" element={<ProtectedRoute element={Vacancies} />} />
                      </Route>
                  </Routes>
          </div>
      </BrowserRouter>
  );
}


const WithNavBar = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default App;
