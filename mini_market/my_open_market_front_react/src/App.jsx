import { Link, BrowserRouter } from "react-router-dom"
import Router from './Router';

function App() {

  return (

    <div className="App container d-flex justify-content-center align-items-center vh-100 text-center">
      <div className="row align-items-center mb-3">
        <h3>Open Market</h3>
        <hr />
        <BrowserRouter>
          <Link to="/login">Open Market 시작</Link>
          <Router />
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App
