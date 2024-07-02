import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Home/Home';
import Main from './Main/Main';
import 'semantic-ui-css/semantic.min.css';


const App = () => {
  return (
    <Router basename='/verce.ai'>
      <Routes>
        <Route exact path="/verce.ai" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
