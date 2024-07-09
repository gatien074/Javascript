// Tableau des jours de la semaine
const daysOfWeek = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

// Demander à l'utilisateur de saisir le numéro du jour
const dayNumber = parseInt(prompt("Veuillez saisir le numéro du jour (1-7) :"));

// Vérifier si le numéro saisi est valide
if (dayNumber >= 1 && dayNumber <= 7) {
  // Afficher le jour correspondant
  console.log(`Le jour correspondant au numéro ${dayNumber} est ${daysOfWeek[dayNumber - 1]}.`);
} else {
  console.error("Numéro de jour invalide. Veuillez saisir un nombre entre 1 et 7.");
}
