// demander la moyenne de l'élève
let moyenne = parseFloat(prompt("Quelle est votre moyenne ?"));

// Déterminer la mention en fonction de la moyenne
if (moyenne >= 0 && moyenne < 10) {
  console.log("Mention : Passable");
} else if (moyenne >= 10 && moyenne < 12) {
  console.log("Mention : Assez-Bien");
} else if (moyenne >= 12 && moyenne < 14) {
  console.log("Mention : Bien");
} else if (moyenne >= 14 && moyenne < 16) {
  console.log("Mention : Très Bien");
} else if (moyenne >= 16 && moyenne <= 20) {
  console.log("Mention : Excellent");
} else {
  console.log("Erreur : la moyenne doit être comprise entre 0 et 20.");
}