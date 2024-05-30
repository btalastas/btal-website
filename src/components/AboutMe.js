import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import MyTimeline from "./MyTimeline";
import headshot from "../assets/pictures/headshot.png";
import Contact from "./Contact";

export default function AboutMe() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3} alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              mb: 2,
            }}
          >
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "background.paper",
                padding: 2,
                borderRadius: "50%",
                boxShadow: 3,
                width: 200,
                height: 200,
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                image={headshot}
                sx={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Card>
          </Box>

          <Box sx={{ boxShadow: 10, p: 2 }}>
            <Typography variant="h2">Bjorn N. Talastas</Typography>
            <Contact />
            <Typography variant="h4" gutterBottom>
              Hi nice to meet you!
            </Typography>
            <Typography paragraph>
              I am a recent graduate from George Mason Univeristy receiving my
              Bachelor's of Science in Computer Science. My academic tenure I
              focused on software development. Taking classes such as Data
              Structures and Analysis of Algorithms. Which were both taught in
              Java. I have a strong foundation with object orientated
              programming,time and space complexity of various algorithms as
              well as graph and set theory. I am well versed with low-level
              programming having taken courses in systems programming and
              operating systems. Having developed all C projects on GMU's Linux
              server, I am knowledgable on using the command line to SSH into a
              remote host, use vim to code programs, and GDB for debugging
              purposes. I have a strong interest in machine learning
              applications after taking a Data Mining class. This class showed
              me the possibililtes of machine learning algorithms such as
              K-Nearest Neighbors for classification, K-Means Clusters for
              clustering, and linear regression for predicitive analysis. I was
              exposed to many machine learning packages such as scipy,
              scikit-learn, pytorch, and many more. While also strengthening my
              python skills with using Numpy and Pandas.
            </Typography>
            <Typography paragraph>
              My journey has been long and unorthodox compared to my peers.
              After graduating from Robinson Secondary School, I went to NVCC
              while also working 30-40 hours at my first job. This proved to be
              a disaster as I was not able to focus on school and work at the
              same time. My grades plummented as a result and I got put into
              academic probabtion. I ended up taking a break from school to save
              up money while also joining a new company named MobileSentrix.
            </Typography>
            <Typography paragraph>
              I went back to school after some time and decided to finally take
              education seriously again. After only 7 years, I finally received
              my Associates of Science in Computer Science. I ended up applying
              to George Mason Univeristy and became a Patriot for the fall
              semester of 2021. I was still working part-time at MobileSentrix
              during the semester and full-time during breaks. Even working 20
              hours per weerk proved to be difficult taking a full course load
              at GMU.
            </Typography>
            <Typography paragraph>
              The last semester of my senior year I decided it was time to leave
              MobileSentrix. I enjoyed my time being employed there, but felt
              like the direction my career was going wasn't what I intended. So
              for my final semester I was unemployed and focused soley on my
              studies. I became anxious at the thought of the current job market
              and graduating in a few months. I applied to many jobs and
              internships hoping for a company to give me a chance.
            </Typography>
            <Typography paragraph gutterBottom>
              Graduation is upon me and I still didn't have any job offers on
              the table. I am still grateful at the fact that I was able to
              accomplish my goal of graduating from a 4-year univeristy. I am
              currently taking this time to figure out my future plans for
              myself. I have been contemplating on furthering my education and
              applying to a graduate program in maybe Software Engineering,
              Computer Engineering, or Data Science.
            </Typography>
            <Typography>
              If you are still reading, I would like to thank you for your time!
              I appreciate you spending your day reading up about myself. If you
              enjoyed your time here, feel free to send me an email so that we
              can connect!
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
