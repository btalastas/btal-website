import { Box, Container, Typography } from "@mui/material";
import MyTimeline from "./MyTimeline";

export default function AboutMe() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 2,
        mt: 4,
        mb: 4,
      }}
    >
      <Box sx={{ flex: 1, boxShadow: 10 }}>
        <Typography variant="h2">Bjorn N. Talastas</Typography>
        <Typography paragraph>
          First gen american with Filipino descent. Lorem Ipsem
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          borderLeft: 2,
          p: { xs: 1, sm: 2, md: 3 },
          boxShadow: 10,
        }}
      >
        <MyTimeline />
      </Box>
    </Container>
  );
}
