import './App.css';
import { Officers } from './components/officers';
import { Home } from './components/home'
import './components/styles.css'
import ReactDOM from "react-dom/client";
import {navbar} from './components/navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (

    
    <div className='App'>
      <navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/officers" element = {<Officers />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
