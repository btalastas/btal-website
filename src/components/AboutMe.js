import { Box, Container, Grid, Typography } from "@mui/material";
import MyTimeline from "./MyTimeline";

export default function AboutMe() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <Box sx={{ boxShadow: 10, p: 2 }}>
            <Typography variant="h2">Bjorn N. Talastas</Typography>
            <Typography paragraph>
              First gen american with Filipino descent. Lorem Ipsum
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderLeft: { md: 2, xs: 0 },
              boxShadow: 10,
              p: { xs: 1, sm: 2, md: 3 },
            }}
          >
            <MyTimeline />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
