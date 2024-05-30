import * as React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import CenteredTabs from "./components/CenteredTabs";
import AboutMe from "./components/AboutMe";
import School from "./components/School";
import Resume from "./components/Resume";
import HobbiesInterests from "./components/HobbiesInterests";
import "./App.css";
import Portfolio from "./components/Portfolio";

const AppRoutes = () => {
  const routes = [
    { path: "/about-me", element: <AboutMe /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/school", element: <School /> },
    { path: "/hobbies-n-interests", element: <HobbiesInterests /> },
    { path: "/resume", element: <Resume /> },
    { path: "/", element: <AboutMe />, index: true },
  ];

  return useRoutes(routes);
};
function App() {
  return (
    <Router>
      <div className="App">
        <CenteredTabs />
        <div className="App-header">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
