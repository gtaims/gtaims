import './App.css';
import { Officers } from './components/officers';
import { Home } from './components/home'
import './components/styles.css'
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (

      <BrowserRouter>
      
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/officers" element = {<Officers />} />
        </Routes>

      </BrowserRouter>

  );
}

export default App;
