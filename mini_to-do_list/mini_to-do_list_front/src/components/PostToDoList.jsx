import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Post() {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({ number: '', toDo: '', details: '' })

  const { number, toDo, details } = inputs;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const postToDo = (evt) => {

    evt.preventDefault();
    // let formdata = new FormData(document.getElementById('post'));
    axios.post('http://localhost:8081/post', {}, { params: { number: number, toDo: toDo, details: details } })
      .then(function (res) {
        if (res.status === 200) {
          alert('등록 완료')
        }
        else ('등록 취소')
      })
    navigate('/')
  }


  return (

    <div>
      <h3>To-Do 추가</h3>
      <form id="post" onSubmit={postToDo}>
        To-Do 번호: <input type="number" name="number" value={number} onChange={onChange} /><br /><br />
        To-Do: <input type="text" name="toDo" value={toDo} onChange={onChange} /><br /><br />
        상세 내용: <textarea name="details" value={details} onChange={onChange} /><br /><br />
        <input type="submit" value="등록"></input>
      </form>
    </div>
  )
}