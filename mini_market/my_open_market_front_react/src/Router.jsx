import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Login from "./components/Login"
import CreateAccount from "./components/CreateAccount"
import UserHome from "./components/UserHome"

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/userhome" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  )
}