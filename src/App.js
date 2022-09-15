import logo from './logo.svg';
import './App.css';
import Loginp from './Components/Login'
import Home from './Components/Home'
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
     <h1>Application</h1>
      <Router>
        <Routes>
          
          <Route   path="Login" element={<Loginp/>} />           
          <Route   path="Home" element={<Home/>} />           

        </Routes>
      </Router>
      {/* <Loginp/> */}
      
    </>
  );
}

export default App;
