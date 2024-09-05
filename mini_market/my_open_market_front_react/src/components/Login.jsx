import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({ id: '', passowrd: '' });

  const { id, password } = inputs;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const login = () => {
    axios.post('http://localhost:8081/login', {}, { params: { id: id, password: password } })
      .then(function (res) {
        if (res.status === 200) {
          if (res.data.isAuthenticated) {
            localStorage.setItem('token', res.data.token);
            navigate('/login')
          }
          else {
            alert('로그인 실패')
          }
        }
        else {
          alert('비정상 응답')
        }
      })
  }

  let token = localStorage.getItem('token');
  let menu = '';

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/userhome')
  }

  if (token === null) {
    menu =
      <div>
        <h2>로그인</h2>
        <hr />
        ID: <input type="text" name="id" value={id} onChange={onChange} /><br />
        Password: <input type="password" name="password" value={password} onChange={onChange} /><br />
        <button onClick={login}>로그인</button>
      </div>
  }
  else {
    menu =
      <div>
        <button class="" onClick={logout}>로그아웃</button> |
        <Link to="/user/userinfo"> 내 정보확인</Link> |
        <Link to="/board/allproductlist">전체 상품 목록</Link>
      </div>
  }

  return (
    <div>
      {menu}
    </div>
  )
}