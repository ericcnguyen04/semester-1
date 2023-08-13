import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Components/Home'
import Biology from './Components/Biology'

function App() {
  return (
    <Router>

      <div>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />

          <Route 
            path="/biology"
            element={<Biology />}
          />

          <Route
            path="/english"
            element={<English />}
          />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
