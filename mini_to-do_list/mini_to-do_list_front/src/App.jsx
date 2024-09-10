import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function App() {

  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/')
      .then(res => {
        setToDoList(res.data)
      })
  }, [])

  return (
    <div>
      <h3>To-Do List</h3>
      <Link to="/post">추가</Link>
      <form>
        <table border="1">
          <thead>
            <tr>
              <td>우선 순위</td>
              <td>To-Do</td>
            </tr>
          </thead>
          <tbody>
            {toDoList.map((toDo) => (
              <tr key={toDo.number}>
                <th>{toDo.number}</th>
                <th><Link to={"/tododetails/" + toDo.number}>{toDo.toDo}</Link></th>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default App;
