import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `I started training as an athlete from a very early age, always focusing on performance and learning about discipline and hard work.
  Throughout my career, I played for grassroots clubs in Brazil, such as Atlético MG, Ipatinga MG and others.
  Today, I continue this journey playing in the USA, where I constantly learn and seek to evolve every day.`,
  "Athlete",
  "My performance as a player",
  " "
);

hoverChangeExperience(
  ".zuplae",
  `I am currently graduating in Physical Education in Brazil and in Exercise Science in the USA.
I have experience in gyms as a physical trainer and personal trainer, serving various objectives, from sports performance to health and aesthetics.
With experience with more than 150 people, today I serve clients in more than 6 different countries.`,
  "Physical Trainer",
  "My role as a physical trainer",
  " "
);




