import { Link, useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();
  let token = localStorage.getItem('token');
  let menu = '';

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/userhome')
  }

  if (token === null) {
    menu =
      <div>
        <Link to="/user/createaccount">회원가입</Link> |
        <Link to="/user/login"> 로그인</Link>
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