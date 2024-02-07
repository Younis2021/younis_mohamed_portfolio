import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import HomePage from "./Home/HomePage";
import ProjectPage from "./Project/ProjectPage";
import "./page-transitions.css"; // Create this CSS file for animations

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={900}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/younis" element={<HomePage />} />
              <Route path="/projectPage/:projectId" element={<ProjectPage />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
    </div>
  );
};

export default App;
