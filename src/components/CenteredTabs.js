import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function CenteredTabs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate();
  const [path, setPath] = React.useState(location.pathname);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const tabNames = [
    { name: "About Me", path: "/about-me" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "School", path: "/school" },
    { name: "Hobbies and interests", path: "/hobbies-n-interests" },
    { name: "Resume", path: "/resume" },
  ];

  const handleChange = (event, newPath) => {
    setPath(newPath);
    navigate(newPath);
  };

  React.useEffect(() => {
    if (path !== location.pathname) {
      setPath(location.pathname);
    }
  }, [location, path]);

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
        value={path}
        onChange={handleChange}
        centered={!isMobile} // Center tabs on larger screens
        variant={isMobile ? "scrollable" : undefined} // Make tabs scrollable on smaller screens
        scrollButtons={isMobile ? "auto" : false} // Auto show scroll buttons on small screens
        allowScrollButtonsMobile
        aria-label="scrollable centered tabs example"
      >
        {tabNames.map((name, index) => (
          <Tab
            label={name.name}
            key={index}
            value={name.path}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            sx={{
              transition: "color 0.3s, background-color 0.3s, filter 0.3s",
              color:
                hoveredIndex === index ? theme.palette.primary.main : "inherit",
              backgroundColor:
                hoveredIndex === index ? theme.palette.action.hover : "inherit",
              filter:
                hoveredIndex !== null && hoveredIndex !== index
                  ? "blur(2px)"
                  : "none",
              "&:hover": {
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.action.hover,
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
