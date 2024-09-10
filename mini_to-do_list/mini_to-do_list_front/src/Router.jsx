import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import PostToDoList from "./components/PostToDoList"
import ToDoDetails from "./components/ToDoDetails"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post" element={<PostToDoList />} />
        <Route path="/tododetails/:todonum" element={<ToDoDetails />} />
      </Routes>
    </BrowserRouter>
  )
}