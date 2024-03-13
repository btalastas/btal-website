import * as React from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
} from "@mui/material";
import lebron from "../assets/pictures/lebron.jpg";
import novak from "../assets/pictures/novak.jpg";
import ufc from "../assets/pictures/ufc.jpg";
import belmo from "../assets/pictures/belmonte.jpg";
import fortnite from "../assets/pictures/fortnite.jpg";
import palworld from "../assets/pictures/palworld.jpg";
import wow from "../assets/pictures/World_of_Warcraft.png";
import bfmv from "../assets/pictures/bfmv.jpg";
import mcr from "../assets/pictures/mcr.jpg";
import paramore from "../assets/pictures/paramore.png";
import drake from "../assets/pictures/drake.jpg";
import asap from "../assets/pictures/asap.jpg";
import skrillex from "../assets/pictures/skrillex.jpg";
import zedsdead from "../assets/pictures/zedsdead.jpg";
import porter from "../assets/pictures/porter.jpg";
import op from "../assets/pictures/onepiece.jpg";
import eightySix from "../assets/pictures/86.jpg";
import darkKnight from "../assets/pictures/darkknight.jpg";

const categories = {
  Sports: [
    {
      // https://i.ytimg.com/vi/HtJ_esFrI_Q/mqdefault.jpg
      name: "Basketball",
      description: `I’ve been watching basketball ever since I was a child in kindergarten. 
      Ordering buffalo wings with my dad and watching the Washington Wizards play like they usually do. 
      My favorite team would have to be the Washington Wizards due to me growing up in the DMV area for my life. 
      In terms of players, Lebron James is my number one. Followed by James Harden and Tyrese Haliburton.`,
      pic: [lebron],
    },
    {
      // https://media.cnn.com/api/v1/images/stellar/prod/240121065512-novak-djokovic-australian-open-0121.jpg?c=16x9&q=h_833,w_1480,c_fill
      name: "Tennis",
      description: `Tennis has always had a special place in my heart. My dad played tennis in high school and has competed in state tournaments. 
      My dad loved tennis so much that he decided to name me after a famous tennis player Bjorn Borg. 
      Tennis is a sport that I believe mental fortitude plays a huge part on becoming victorious. 
      Being able to stay calm, reassess the situation, playing to their strength, and come back from being down two sets. 
      This is why Novak Djokovic is undeniably the greatest tennis player of all time. 
      With 24 grand slams under his belt, his longevity, and resilience, plays a testament to him being the best of the best.`,
      pic: [novak],
    },
    {
      // https://www.mmafighting.com/2023/8/30/23851041/charles-oliveira-dials-back-trash-talk-islam-makhachev-rematch-mistake-ufc-294
      name: "MMA",
      description: `MMA has been a new sport that I have been following closely.
      It is a sport that closely relates back to the times of the colosseum of ancient Rome. 
      They are many different fighting organizations around the world. 
      The one I follow the most is the American organization UFC.`,
      pic: [ufc],
    },
    {
      // https://www.jasonbelmonte.com/wp-content/uploads/2023/02/Belmonte.Jason_2020PBAWorld-scaled.jpg
      name: "Bowling",
      description: `Bowling is another sport that has a place in my heart. 
      Going with my dad for his league nights and playing on the arcade while watching my dad bowl strikes. 
      It is currently the only sport I play due to reasons. Bowling may seem like an easy sport. 
      Throw the ball down the lane and knock down pins. But as you start learning more about bowling, you’ll find yourself in a rabbit hole. 
      The different oil patterns they lay down on the lane, the different core designs of the ball, 
      the different cover stock formulas of the ball, and how all these plays apart on how the ball reacts when you throw your ball. 
      My current high score is 243. My two balls that I currently possess is an asymmetrical pearl Dark Code from Storm, 
      and a symmetrical pearl Raw from Hammer.`,
      pic: [belmo],
    },
  ],
  Games: [
    {
      // https://cdn2.unrealengine.com/blade-2560x1440-2560x1440-d4e556fb8166.jpg
      name: "Fortnite",
      description: `Fortnite is a battle royale style game created by the game studio Epic Games. 
      This innovative game took the concept of the battle royale genre and added a unique building mechanic to the game. 
      This game has been a success since its release back in 2017. They have collaborated with different companies and included their IPs as skins you can purchase. 
      Some examples would be Goku from Dragon Ball Z, The Teenage Mutant Ninja Turtles, and Peter Griffin from Family Guy to name a few. 
      Epic Games is also the creator of the game engine Unreal Engine. 
      With the development of the newest version of Unreal Engine, Epic Games allows creators to create their own maps through the game engine and publish them for the public to play. `,
      pic: [fortnite],
    },
    {
      // https://en.wikipedia.org/wiki/Palworld
      name: "Palworld",
      description: `Palworld takes the popular survival style games and includes the appeal of monster capturing into one. 
      Players can build bases, capture pals, and have them work on your base. Different pals have different working traits. 
      Which allows players to have different combinations of pals to improve the efficiency of their base. 
      There has been a lot of controversy surrounding the release of this game. 
      People think that the monsters in the game look very similar to the popular franchise Pokémon created by Nintendo. 
      Nintendo cares deeply about their intellectual property. They have been known to send cease and desist orders to have them stop production. 
      The fact that this game was able to release on steam shows that Nintendo didn’t have any grounds for a cease and desist. `,
      pic: [palworld],
    },
    {
      // https://en.wikipedia.org/wiki/World_of_Warcraft
      name: "World Of Warcraft",
      description: `World of Warcraft or known as WOW is a massively multiplayer online role-playing game. 
      You can create a character of various races and different classes. Inspired by dungeon & dragons and its predecessor Warcraft III, WOW has been a popular online game for the past 20 years. 
      Being able to work together with other players to tackle the same goal is what brings people to this game. `,
      pic: [wow],
    },
  ],
  Music: [
    {
      // https://en.wikipedia.org/wiki/The_Poison
      // https://en.wikipedia.org/wiki/The_Black_Parade
      // https://en.wikipedia.org/wiki/Riot!
      name: "Rock/Metal",
      description: `Rock and metal are a genre that was popular in the 20th century but has taken a back seat in terms of popularity. 
      I enjoy listening to the different instruments and vocals that each band produces. 
      Some of the lyrics from the early 2000’s and 90’s resonates with me as well. 
      Some bands that I still enjoy to this day are Bullet for my Valentine, My Chemical Romance, Green Day, Blink-182, and Paramore to name a few.`,
      pic: [bfmv, mcr, paramore],
    },
    {
      // https://en.wikipedia.org/wiki/Take_Care_%28album%29
      // https://en.wikipedia.org/wiki/Live._Love._ASAP
      name: "Rap/Hip-Hop/R&B",
      description: `The catchy beats and innovative lyrics are a reason why people enjoy this genre. 
      Nodding to the beat, trying to remember complex lyrics, are some of the reasons why I enjoy this genre. 
      Some artists that I enjoy listening to are Drake, ASAP Rocky, Juice WRLD, Tory Lanez, and Lil Peep.`,
      pic: [drake, asap],
    },
    {
      // https://en.wikipedia.org/wiki/Scary_Monsters_and_Nice_Sprites
      // https://i1.sndcdn.com/artworks-000193310758-k0v11a-t500x500.jpg
      // https://www.amazon.com/Worlds-Porter-Robinson/dp/B00L5VZJPE
      name: "EDM",
      description: `There has been a rise in popularity with EDM genre this century. EDM is an umbrella term that encompasses a lot of different styles of music. 
      The usage of computer music software allows producers to create music without knowing how to play the instrument. 
      This genre is popular in the festival scene as it allows people to come together and dance to music that they all enjoy. 
      The main sub-genres that fall under EDM are dubstep, trap, drum-n-bass, techno, and house music. 
      Each of these sub-genres also include different derivatizations that have appeared as time has passed.`,
      pic: [skrillex,zedsdead,porter],
    },
  ],
  Cinemas: [
    {
      // https://m.media-amazon.com/images/M/MV5BM2YwYTkwNjItNGQzNy00MWE1LWE1M2ItOTMzOGI1OWQyYjA0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg
      name: "One Piece",
      description: `One piece is by far my favorite story of any medium of all time. It was first published in 1997 by mangaka Eiichiro Oda. 
      To this day it is still releasing new chapters every week. It is about a boy named Monkey D. Luffy who aspires to become the King of Pirates. 
      The storytelling, worldbuilding, and character development, is what makes this story cherished by many worldwide.`,
      pic: [op]
    },
    {
      // https://en.wikipedia.org/wiki/86_%28novel_series%29#/media/File:86_light_novel_volume_1_cover.jpg
      name: "86",
      description: `86 was originally a light novel series which was adapted into an anime series. 
      This story takes place in a dystopian world where automated machines take the role of soldiers in the military. 
      There are many though provoking themes within this story. Some include war and its impact, racism and discrimination, and dehumanization. 
      The cinematography as well as what the character’s go though is what makes this anime one of my favorites.`,
      pic: [eightySix],
    },
    {
      // https://www.amazon.com/Knight-Trilogy-Batman-Begins-Widescreen/dp/B0927GFMB7
      name: "Dark Knight Trilogy",
      description: `The trilogy directed by the famous Christopher Nolan is about the story of Bruce Wayne and his alter identity Batman. 
      Out of all the superheroes in both the Marvel and DC universes, Batman is my favorite. The eccentric billionaire who is also a genius, can act as Gotham City’s vigilante. 
      The fact that Batman doesn’t have any superpowers compared to the rest of superheroes is why he’s my favorite. Having to rely on his physical prowess and gadgets that he devised himself.`,
      pic: [darkKnight],
    },
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
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {item.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center", // Center the images container
                        flexWrap: "wrap", // Allow the images to wrap
                        "& > :not(style)": {
                          m: 1, // Margin for each image
                          width: 250, // Smaller width for each image
                          height: "auto", // Adjust height automatically
                        },
                      }}
                    >
                      {Array.isArray(item.pic) &&
                        item.pic.map((imageSrc, imageIndex) => (
                          <CardMedia
                            component="img"
                            image={imageSrc}
                            alt={`${item.name}-${imageIndex}`}
                            key={imageIndex}
                          />
                        ))}
                    </Box>
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
