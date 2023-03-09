import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/home'
import Exercicio2 from "./Components/Exercicio2/Exercicio2";
import Exercicio3 from "./Components/Exercicio3/Exercicio3";
import Exercicio4 from "./Components/Exercicio4/Exercicio4";
import Exercicio5 from "./Components/Exercicio5/Exercicio5";

import './style/style.css';

export default function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Exercicio2" element={<Exercicio2/>}/>
              <Route path="/Exercicio3" element={<Exercicio3/>}/>
              <Route path="/Exercicio4" element={<Exercicio4/>}/>
              <Route path="/Exercicio5" element={<Exercicio5/>}/>
          </Routes>
      </Router>
    </>
  );
}


