import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import nvcc from "../assets/icons/nvcc.jpeg";
import gmu from "../assets/icons/gmu.png";

export default function NestedList() {
  const schools = [
    { id: 1, text: "Northern Virginia Community College", icon: nvcc },
    { id: 2, text: "George Mason University", icon: gmu },
  ];

  return (
    <List>
      {schools.map((item) => (
        <ListItem key={item.id}>
          <ListItemIcon>
            {/* Use any icon here. For a bullet point, you might use a dot or circle. */}
            {/* For example, using Material Icons: */}
            {/* <FiberManualRecordIcon fontSize="small" /> */}
            {/* Make sure to import the icon at the top if you use one. */}
            <img src={item.icon} alt="Icon" style={{ width: 24, height: 24 }} />
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
}
