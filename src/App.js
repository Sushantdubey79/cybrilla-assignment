import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import Fav from "./components/Fav"
import Header from './components/header'
import Addfav from './components/addFav';


function App() {
  return (
    <div>
      <Header></Header>
    <Router>

      <Routes>

      <Route exact path="/" element={<Fav />} />
      <Route path="/addfav" element={<Addfav />} />


      </Routes>

    </Router>
    </div>
  );
}

export default App;
