import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function CenteredTabs({ value, onChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const tabNames = [
    "Portfolio",
    "About Me",
    "School",
    "Hobbies and interests",
    "Resume",
    "Contact",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        position: "fixed",
        top: 0,
        zIndex: 1100,
      }}
    >
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
      </Tabs>
    </Box>
  );
}
