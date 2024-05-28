import * as React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
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

  const tabNames = [
    { name: "About Me", path: "/about-me" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "School", path: "/school" },
    { name: "Hobbies and interests", path: "/hobbies-n-interests" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
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
          <Tab label={name.name} key={index} value={name.path} />
        ))}
      </Tabs>
    </Box>
  );
}
