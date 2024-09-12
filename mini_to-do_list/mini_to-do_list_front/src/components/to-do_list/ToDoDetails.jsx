import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";

export default function ToDoDetails() {

  const navigate = useNavigate();

  const { todonum } = useParams();
  const [toDoDetails, setToDoDetails] = useState({ number: '', toDo: '', details: '' })
  const { number, toDo, details } = toDoDetails;

  const onChange = (evt) => {

    const { name, value } = evt.target;
    setToDoDetails({
      ...toDoDetails,
      [name]: value
    })

  }

  useEffect(() => {

    axios.get('http://localhost:8081/tododetails/' + todonum)
      .then(function (res) {
        if (res.status === 200) {
          setToDoDetails(res.data.toDoDetails)
        }
        else {
          alert('비정상 응답')
        }
      })
  }, [])

  const edit = (evt) => {

    evt.preventDefault();

    axios.put('http://localhost:8081/tododetails/' + todonum, toDoDetails)
      .then(function (res) {
        if (res.status === 200) {
          alert('수정 완료')
          navigate('/')
        }
      })
  }

  const del = () => {

    axios.delete('http://localhost:8081/tododetails/' + todonum)
      .then(function (res) {
        if (res.status === 200) {
          alert('삭제 완료')
          navigate('/')
        }
      })
  }

  return (

    <div>
      <h3>상세 내용</h3>
      <form onSubmit={edit}>
        <table border="1">
          <tbody>
            <tr>
              <td>우선 순위</td>
              <td><input type="text" name="number" value={number} onChange={onChange} /></td>
            </tr>
            <tr>
              <td>To-Do</td>
              <td><input type="text" name="toDo" value={toDo} onChange={onChange} /></td>
            </tr>
            <tr>
              <td>상세 내용</td>
              <td><textarea name="details" value={details} onChange={onChange} /></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="수정" />
        <input type="button" value="삭제" onClick={del} />
      </form>
    </div>
  )
}