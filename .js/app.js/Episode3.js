// Demander le nom de l'utilisateur
const userName = prompt("Quel est votre nom ?");

// Demander le nombre d'enfants de l'utilisateur
const numChildren = parseInt(prompt("Combien d'enfants avez-vous ?"));

// Afficher un résumé
if (numChildren === 0) {
  console.log(`${userName}, vous n'avez pas d'enfant.`);
} else if (numChildren === 1) {
  console.log(`${userName}, vous avez 1 enfant.`);
} else {
  console.log(`${userName}, vous avez ${numChildren} enfants.`);
}
