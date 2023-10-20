import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./pages/dashboard";
import Patient from "./pages/patient";
import Doctor from "./pages/doctors";
import DoctorForm from "./pages/doctors/DoctorForm";
import Viewpage from "./pages/patient-details/Viewpage";
import UpdateForm from "./pages/doctors/UpdateForm";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Layout from "./layout/Layout";

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
  }

  return (
    <div>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="" element={<Login setToken={setToken} />} />
        <Route path="/*" element={token ? <Layout /> : <Navigate to='/' />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="patient" element={<Patient />} />
          <Route path="doctors" element={<Doctor />} />
          <Route path="view" element={<Viewpage />} />
          <Route path="form" element={<DoctorForm />} />
          <Route path="updateform/:id" element={<UpdateForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
