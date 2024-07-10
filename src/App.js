import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from "./Components/NavigationBar";
import Task from "./Components/Task";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Task />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}