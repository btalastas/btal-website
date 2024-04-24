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
      <Box color="#cfe8fc">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
          color="#cfe8fc"
        >
          <Grid item xs={12} sm={6} md={4}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Email color="primary" />
                </ListItemIcon>
                <Link href="mailto:btalasta@gmu.edu">Email me</Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LinkedIn color="primary" />
                </ListItemIcon>
                <Link href="https://www.linkedin.com/in/btalastas/">
                  Linkedin
                </Link>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <GitHub color="primary" />
                </ListItemIcon>
                <Link href="https://github.com/btalastas">Github</Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
