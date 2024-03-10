import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function CenteredTabs({ value, onChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const tabNames = ["About me", "School", "Hobbies and interests", "Resume"];

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={onChange}
        centered={!isMobile} // Center tabs on larger screens
        variant={isMobile ? "scrollable" : undefined} // Make tabs scrollable on smaller screens
        scrollButtons={isMobile ? "auto" : false} // Auto show scroll buttons on small screens
        allowScrollButtonsMobile
        aria-label="scrollable centered tabs example"
      >
        {tabNames.map((name, index) => (
          <Tab label={name} key={index} />
        ))}
        {/* <Tab label="About me" />
        <Tab label="School" />
        <Tab label="Hobbies and interests" />
        <Tab label="Resume" /> */}
      </Tabs>
    </Box>
  );
}
