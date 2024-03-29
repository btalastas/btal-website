import * as React from "react";
import CenteredTabs from "./components/CenteredTabs";
import AboutMe from "./components/AboutMe";
import School from "./components/School";
import Resume from "./components/Resume";
import HobbiesInterests from "./components/HobbiesInterests";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabContent = [
    <AboutMe />,
    <School />,
    <HobbiesInterests />,
    <Resume />,
    <Contact />,
  ];
  return (
    <div className="App">
      <CenteredTabs value={value} onChange={handleChange} />
      <body className="App-header">{tabContent[value]}</body>
    </div>
  );
}

export default App;
