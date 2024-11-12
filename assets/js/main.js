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
  `Comecei a treinar como atleta desde muito cedo, sempre com foco na performance e aprendendo sobre disciplina e trabalho duro.
  Ao longo da minha trajetória, passei por clubes de base no Brasil, como Atlético MG, Ipatinga MG e outros.
  Hoje, continuo essa jornada jogando nos EUA, onde aprendo constantemente e busco evoluir a cada dia.`,
  "Atleta",
  "Minha atuação como jogador",
  " "
);

hoverChangeExperience(
  ".zuplae",
  `Atualmente, estou graduando em Educação Física no Brasil e em Exercise Science nos EUA.
Tenho experiência em academias como preparador físico e personal trainer, atendendo a diversos objetivos, desde performance esportiva até saúde e estética.
Com experiência com mais de 150 pessoas, hoje atendo clientes em mais de 6 países diferentes.`,
  "Preparador Físico",
  "Minha atuação como preparador físico",
  " "
);




