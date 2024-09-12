import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Login from "./components/user/Login";
import ToDoList from "./components/to-do_list/ToDoList";

function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken !== token) {
      setToken(storedToken);
    }
  }, [token]);


  return (
    <div>
      <h1>To-Do List</h1>
      {token === null ? <Login setToken={setToken} /> : <ToDoList setToken={setToken} />}
    </div>
  )
}

export default App;
