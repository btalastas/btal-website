import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";

export default function Contact() {
  return (
    <Container>
      <Box
        sx={{
          color: "#cfe8fc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <List sx={{ display: "flex", justifyContent: "center" }}>
              <ListItem
                sx={{ display: "inline-flex", width: "auto", paddingRight: 2 }}
              >
                <ListItemIcon sx={{ color: "white" }}>
                  <Email />
                </ListItemIcon>
                <Link href="mailto:btalasta@gmu.edu" sx={{ color: "#7dc6e8" }}>
                  Email
                </Link>
              </ListItem>
              <ListItem
                sx={{ display: "inline-flex", width: "auto", paddingRight: 2 }}
              >
                <ListItemIcon sx={{ color: "whitesmoke" }}>
                  <LinkedIn />
                </ListItemIcon>
                <Link
                  href="https://www.linkedin.com/in/btalastas/"
                  sx={{ color: "#7dc6e8" }}
                >
                  Linkedin
                </Link>
              </ListItem>

              <ListItem
                sx={{ display: "inline-flex", width: "auto", paddingRight: 2 }}
              >
                <ListItemIcon sx={{ color: "whitesmoke" }}>
                  <GitHub />
                </ListItemIcon>
                <Link
                  href="https://github.com/btalastas"
                  sx={{ color: "#7dc6e8" }}
                >
                  Github
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
