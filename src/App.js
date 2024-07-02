import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Home/Home';
import Main from './Main/main';
import 'semantic-ui-css/semantic.min.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Verse.ai" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
