import {
  Box,
  Card,
  CardContent,
  Container,
  Link,
  Typography,
} from "@mui/material";
import * as React from "react";

const projects = {
  Java: {
    1: {
      title: "Matching Job Applicants to Jobs",
      Description: "Placeholder",
      url: "https://github.com/btalastas/maximal-bipartite-graph-matching",
    },
    2: {
      title: "Shortest Approximate Path Between All Cities",
      Description: "Placeholder",
      url: "https://github.com/btalastas/traveling_salesman_problem",
    },
    3: { title: "MasonConnect", Description: "Placeholder", url: "" },
  },
  JavaScript: {
    1: {
      title: "Sports-Lookup",
      Description: "Placeholder",
      url: "https://github.com/btalastas/sports-lookup",
    },
  },
  C: {
    1: {
      title: "OS161 Kernel Development",
      Description: "Placeholder",
      url: "",
    },
    2: { title: "Task Controller", Description: "Placeholder", url: "" },
    3: { title: "Binary Bomb", Description: "Placeholder", url: "" },
  },
  Python: {
    1: {
      title: "Detecting Handwritten Images",
      Description: "Placeholder",
      url: "",
    },
    2: {
      title: "Detecting Sign Language",
      Description: "Placeholder",
      url: "",
    },
    3: {
      title: "Gender Bias in Headlines",
      Description: "Placeholder",
      url: "",
    },
  },
};

export default function Portfolio() {
  return (
    <Container maxWidth>
      {Object.keys(projects).map((language) => (
        <Box sx={{ borderBottom: 1, p: 2, mb: 2 }}>
          <Typography
            align="left"
            variant="h2"
            gutterBottom
            sx={{ textDecoration: "underline" }}
          >
            {language}
          </Typography>
          {Object.keys(projects[language]).map((item) => (
            <Card
              key={item}
              variant="outlined"
              sx={{
                marginBottom: 2,
                align: "center",
                width: "60%",
              }}
            >
              <CardContent>
                <Typography variant="h3" component="div">
                  {projects[language][item].title}
                </Typography>
                <Typography variant="body" color="text.secondary" paragraph>
                  {projects[language][item].Description}
                </Typography>
                {projects[language][item].url && (
                  <Link
                    href={projects[language][item].url}
                    target="_blank"
                    rel="noopener"
                  >
                    GitHub
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      ))}
    </Container>
  );
}
