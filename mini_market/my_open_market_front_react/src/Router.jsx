import Login from "./components/Login"
import UserHome from "./components/UserHome"
import { Routes, Route } from "react-router-dom"

export default function Router() {

  return (
    <Routes>
      <Route path="/userhome" element={<UserHome />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}