import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import QuoteScreen from './@modules/QuoteScreen/QuoteScreen'

function App() {
  return (
    <div className="App">
      <div className="background"></div>{" "}
      <Router>
        <Routes>
          <Route path="/" element={<QuoteScreen />}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;