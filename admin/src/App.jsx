import React, { useContext } from "react"
import Login from "./Pages/Login"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from "./context/AdminContext";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/admin/Dashboard";
import AllAppointments from "./Pages/admin/AllAppointments";
import AddDoctor from "./Pages/admin/AddDoctor";
import DoctorsList from "./Pages/admin/DoctorsList";

const App = () =>{
  const {aToken} = useContext(AdminContext)

  return aToken ?(
    <div className="bg-[#f8f9fd]">
      
      <ToastContainer/>
      <NavBar/>
      <div className="flex items-start">
      <SideBar/>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/admin-dashboard" element={<Dashboard/>} />
        <Route path="/all-appointments" element={<AllAppointments/>} />
        <Route path="/add-doctor" element={<AddDoctor/>} />
        <Route path="/doctor-list" element={<DoctorsList/>} />
      </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login/>
    </>
  )
}

export default App