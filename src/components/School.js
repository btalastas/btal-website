import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import nvcc from "../assets/icons/nvcc.jpeg";
import gmu from "../assets/icons/gmu.png";

function CourseworkGrid({ coursework }) {
  return (
    <Box pl={7}>
      {" "}
      {/* Adjust left padding to align with other list items */}
      <Grid container spacing={1}>
        {coursework.map((course, index) => (
          <Grid item xs={4} key={index}>
            {/* Wrapping the text in a ListItemText for consistent styling */}
            <ListItemText primary={`• ${course}`} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default function NestedList() {
  const [open, setOpen] = React.useState(null);

  const handleClick = (id) => {
    setOpen(open === id ? null : id);
  };

  const schools = [
    {
      id: 1,
      text: "Northern Virginia Community College",
      icon: nvcc,
      degree: "Associate of Science, Computer Science",
      details: {
        yearsAttended: "Aug 2014 - May 2021",
        coursework: [
          "Intro to CS",
          "Calculus",
          "Linear Algebra",
          "Chemistry I/II",
        ],
        gpa: "N/A",
      },
    },
    {
      id: 2,
      text: "George Mason University",
      icon: gmu,
      degree: "Bachelor of Science, Computer Science",
      details: {
        yearsAttended: "Aug 2021 - Present",
        coursework: [
          "Algorithms Analysis",
          "Operating Systems",
          "Data Structures",
          "Data Mining",
          "Computer Vision",
          "Software Engineering",
          "Synthesis of Ethics and Law for the Computing Professional",
          "Computer Communications and Networking",
          "Database Concepts",
          "Secure Programming and Systems",
        ],
        gpa: "3.15",
      },
    },
  ];

  return (
    // <List>
    //   {schools.map((item) => (
    //     <ListItem key={item.id}>
    //       <ListItemIcon>
    //         {/* Use any icon here. For a bullet point, you might use a dot or circle. */}
    //         {/* For example, using Material Icons: */}
    //         {/* <FiberManualRecordIcon fontSize="small" /> */}
    //         {/* Make sure to import the icon at the top if you use one. */}
    //         <img src={item.icon} alt="Icon" style={{ width: 24, height: 24 }} />
    //       </ListItemIcon>
    //       <ListItemText primary={item.text} />
    //     </ListItem>
    //   ))}
    // </List>
    <List>
      {schools.map((school) => (
        <React.Fragment key={school.id}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleClick(school.id)}>
              <ListItemIcon>
                <img
                  src={school.icon}
                  alt="Icon"
                  style={{ width: 24, height: 24 }}
                />
              </ListItemIcon>
              <ListItemText primary={school.text} />
              {open === school.id ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={open === school.id} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText inset primary={`Degree: ${school.degree}`} />
              </ListItem>
              <ListItem>
                <ListItemText
                  inset
                  primary={`Years Attended: ${school.details.yearsAttended}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText inset primary="Relevant Coursework" />
                <CourseworkGrid coursework={school.details.coursework} />
              </ListItem>
              <ListItem>
                <ListItemText inset primary={`GPA: ${school.details.gpa}`} />
              </ListItem>
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
}
