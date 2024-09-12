import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function ToDoList() {

  const token = localStorage.getItem('token');

  const [toDoList, setToDolist] = useState([]);

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (token) {

      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.userId);
      console.log(decodedToken)

      axios.get('http://localhost:8081/', { headers: { Authorization: `Bearer ${token}` } })
        .then(function (res) {
          if (res.status === 200) {
            setToDolist(res.data.toDoList);
          } else {
            alert('비정상 응답');
          }
        });
    }
  }, []);


  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>번호</th>
            <th>To-Do</th>
          </tr>
        </thead>
        <tbody>
          {toDoList
            .filter(item => item.writer.id === userId) // 필터링 기준
            .map((item, idx) => (
              <tr key={idx}>
                <td>{item.number}</td>
                <td>{item.toDo}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoList;
