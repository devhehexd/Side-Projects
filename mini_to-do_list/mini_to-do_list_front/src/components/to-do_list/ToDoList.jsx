import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function ToDoList({ setToken }) {

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  }

  const token = localStorage.getItem('token');

  console.log(token);

  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/', { headers: { token: token } })
      .then(function (res) {
        if (res.status === 200) {
          setToDoList(res.data.toDoList)
        }
        else {
          alert('비정상 응답')
        }
      })

  }, [])

  return (
    <div>
      <button onClick={logout}>로그아웃</button><br /><br />
      <Link to="/post">추가</Link>
      <form>
        <table border="1">
          <thead>
            <tr>
              <td>번호</td>
              <td>To-Do</td>
            </tr>
            {toDoList.map((item, idx) => {
              <tr key={idx}>
                <th>{item.number}</th>
                <th>{item.toDo}</th>
              </tr>
            })}
          </thead>
          <tbody>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ToDoList;