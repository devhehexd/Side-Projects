import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function CreateAccount() {

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({ id: '', password: '', email: '' });

  const { id, password, email } = userInfo;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  const createAccount = () => {

    axios.post('http://localhost:8081/createaccount', {}, { params: { id: id, password: password, email: email } })
      .then(function (res) {
        if (res.status === 200) {
          alert('회원가입이 완료되었습니다');
        }
        else {
          alert('가입 취소');
        }
        navigate('/');
      })
  }


  return (
    <div>
      <h1>회원가입</h1>
      <table border="1">
        <tbody>
          <tr>
            <td>ID</td>
            <td><input type="text" name="id" value={id} onChange={onChange} /></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="password" name="password" value={password} onChange={onChange} /></td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input type="email" name="email" value={email} onChange={onChange} /></td>
          </tr>
          <tr>
          </tr>
        </tbody>
      </table>
      <button onClick={createAccount}>회원가입</button>
    </div>
  );
}

export default CreateAccount;