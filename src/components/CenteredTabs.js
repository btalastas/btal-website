import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function CenteredTabs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const tabNames = [
    "About Me",
    "Portfolio",
    "School",
    "Hobbies and interests",
    "Resume",
    "Contact",
  ];

  const tabPaths = React.useMemo(
    () => [
      "/about-me",
      "/portfolio",
      "/school",
      "/hobbies-n-interests",
      "/resume",
      "/contact",
    ],
    []
  );

  const getValueFromPath = React.useCallback(
    (path) => {
      return tabPaths.indexOf(path);
    },
    [tabPaths] // Only re-create if tabPaths change
  );

  const [path, setPath] = React.useState(getValueFromPath(location.pathname));

  const handleChange = (event, newPath) => {
    setPath(newPath);
  };

  React.useEffect(() => {
    setPath(getValueFromPath(location.pathname));
  }, [getValueFromPath, location.pathname]);

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
          <Tab label={name} key={index} component={Link} to={tabPaths[index]} />
        ))}
      </Tabs>
    </Box>
  );
}
