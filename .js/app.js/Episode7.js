// Tableau pour stocker les notes
const mathNotes = [];

// Demander à l'utilisateur de saisir ses notes
while (true) {
  const note = parseFloat(prompt("Veuillez saisir une note en Mathématiques (entre 0 et 20). Tapez 'stop' pour terminer."));

  // Vérifier si l'utilisateur veut arrêter de saisir des notes
  if (isNaN(note) || note < 0 || note > 20) {
    break;
  }

  // Ajouter la note au tableau
  mathNotes.push(note);
}

// Calculer la moyenne
const average = mathNotes.reduce((sum, note) => sum + note, 0) / mathNotes.length;

// Afficher la moyenne
console.log(`Votre moyenne en Mathématiques est : ${average.toFixed(2)}`);
