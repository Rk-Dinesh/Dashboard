import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
//const Dashboard = lazy(() => import("./pages/dashboard"));
const Dashboard = lazy(() => import("./pages/dashboard"))
const Patient = lazy(() => import("./pages/patient"));
const Doctor = lazy(() => import("./pages/doctors"))
const DoctorForm = lazy(() => import ("./pages/doctors/DoctorForm"))
const Viewpage = lazy(() => import("./pages/patient-details/Viewpage"));
const UpdateForm =lazy(() => import ("./pages/doctors/UpdateForm") )
const Diagnostica = lazy(() => import ("./pages/patient-details/Diagnostica") )


const Login = lazy(() => import("./pages/auth/login"));
const Login2 = lazy(() => import("./pages/auth/login2"));
const Login3 = lazy(() => import("./pages/auth/login3"));
const Register = lazy(() => import("./pages/auth/register"));
const Register2 = lazy(() => import("./pages/auth/register2"));
const Register3 = lazy(() => import("./pages/auth/register3"));
const ForgotPass = lazy(() => import("./pages/auth/forgot-password"));
const ForgotPass2 = lazy(() => import("./pages/auth/forgot-password2"));
const ForgotPass3 = lazy(() => import("./pages/auth/forgot-password3"));
const LockScreen = lazy(() => import("./pages/auth/lock-screen"));
const LockScreen2 = lazy(() => import("./pages/auth/lock-screen2"));
const LockScreen3 = lazy(() => import("./pages/auth/lock-screen3"));

import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";
import AddDoctor from "./pages/doctors/DoctorForm";

function App() {
  return (
    <main className="App  relative">
      <Routes>
        
        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="patient" element={<Patient />} />
          <Route path="doctors" element={<Doctor/>} />
          <Route path="view" element={<Viewpage/>} />
          <Route path = "form" element = {<DoctorForm/>}/>
          <Route path = "updateform/:id" element = {<UpdateForm/>}/>
          

        </Route>  
      </Routes>  
    </main>
  );
}

export default App;
