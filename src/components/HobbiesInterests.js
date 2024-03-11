import * as React from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const categories = {
  Sports: [
    {
      name: "Basketball",
      description: `I’ve been watching basketball ever since I was a child in kindergarten. 
      Ordering buffalo wings with my dad and watching the Washington Wizards play like they usually do. 
      My favorite team would have to be the Washington Wizards due to me growing up in the DMV area for my life. 
      In terms of players, Lebron James is my number one. Followed by James Harden and Tyrese Haliburton.`,
    },
    {
      name: "Tennis",
      description: `Tennis has always had a special place in my heart. My dad played tennis in high school and has competed in state tournaments. 
      My dad loved tennis so much that he decided to name me after a famous tennis player Bjorn Borg. 
      Tennis is a sport that I believe mental fortitude plays a huge part on becoming victorious. 
      Being able to stay calm, reassess the situation, playing to their strength, and come back from being down two sets. 
      This is why Novak Djokovic is undeniably the greatest tennis player of all time. 
      With 24 grand slams under his belt, his longevity, and resilience, plays a testament to him being the best of the best.`,
    },
    {
      name: "MMA",
      description: `MMA has been a new sport that I have been following closely.
      It is a sport that closely relates back to the times of the colosseum of ancient Rome. 
      They are many different fighting organizations around the world. 
      The one I follow the most is the American organization UFC.`,
    },
    {
      name: "Bowling",
      description: `Bowling is another sport that has a place in my heart. 
      Going with my dad for his league nights and playing on the arcade while watching my dad bowl strikes. 
      It is currently the only sport I play due to reasons. Bowling may seem like an easy sport. 
      Throw the ball down the lane and knock down pins. But as you start learning more about bowling, you’ll find yourself in a rabbit hole. 
      The different oil patterns they lay down on the lane, the different core designs of the ball, 
      the different cover stock formulas of the ball, and how all these plays apart on how the ball reacts when you throw your ball. 
      My current high score is 243. My two balls that I currently possess is an asymmetrical pearl Dark Code from Storm, 
      and a symmetrical pearl Raw from Hammer.`,
    },
  ],
  Games: [
    { name: "Fortnite", description: "" },
    { name: "Bloodborne", description: "" },
    { name: "Palworld", description: "" },
    { name: "World Of Warcraft", description: "" },
    { name: "Runescape", description: "" },
  ],
  Music: [
    { name: "Rock/Metal", description: "" },
    { name: "Rap/Hip-Hop/R&B", description: "" },
    { name: "EDM", description: "" },
  ],
  Cinemas: [
    { name: "One Piece", description: "" },
    { name: "86", description: "" },
    { name: "Dark Knight Trilogy", description: "" },
    { name: "The Prestige", description: "" },
    { name: "(500) Days of Summer", description: "" },
  ],
};

export default function HobbiesInterests() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={3}>
          {Object.keys(categories).map((categoryKey) => (
            <Grid item xs={12} key={categoryKey}>
              <Typography gutterBottom variant="h4" component="h2">
                {categoryKey}
              </Typography>
              {categories[categoryKey].map((item, index) => (
                <Card key={index} sx={{ marginBottom: 2 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
