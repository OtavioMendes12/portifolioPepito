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
  `Comencé a entrenar como deportista desde muy temprana edad, siempre enfocándome en el rendimiento y aprendiendo sobre la disciplina y el trabajo duro.
  A lo largo de mi carrera jugué en clubes de base de Brasil, como Atlético MG, Ipatinga MG y otros.
  Hoy continúo este viaje jugando en Estados Unidos, donde aprendo constantemente y busco evolucionar cada día.`,
  "Atleta",
  "Mi actuación como jugador",
  " "
);

hoverChangeExperience(
  ".zuplae",
  `Actualmente me estoy graduando en Educación Física en Brasil y en Ciencias del Ejercicio en Estados Unidos.
Tengo experiencia en gimnasios como preparador físico y entrenador personal, atendiendo diversos objetivos, desde el rendimiento deportivo hasta la salud y la estética.
Con experiencia con más de 150 personas, hoy atiendo a clientes en más de 6 países diferentes.`,
  "Entrenador Físico",
  "Mi papel como preparador físico",
  " "
);




