import { Link, useNavigate } from "react-router-dom";

export default function UserHome() {

  const navigate = useNavigate();
  // let token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div>
      <h3>Open Market</h3>
      <hr />
      <button onClick={logout}>로그아웃 </button> |
      <Link to="/member/info"> 내 정보확인</Link> |
      <Link to="/board/boardlist"> 글 목록</Link>
    </div>
  )
}