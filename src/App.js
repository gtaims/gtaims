import './App.css';
import { Officers } from './components/officers';
import { Home } from './components/home'
import './components/styles.css'
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';



import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (

      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/officers" element = {<Officers />} />
        </Routes>
      </Router>
  );
}

export default App;