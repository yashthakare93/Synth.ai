import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Home/Home';
import Main from './Main/Main';
import 'semantic-ui-css/semantic.min.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verce.ai" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
