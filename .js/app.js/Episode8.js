// Tableau pour stocker les informations des élèves
const students = [];

// Demander les informations des élèves
while (true) {
  const name = prompt("Veuillez saisir le nom de l'élève (tapez 'stop' pour terminer) :");

  // Vérifier si l'utilisateur veut arrêter de saisir des élèves
  if (name.toLowerCase() === "stop") {
    break;
  }

  const average = parseFloat(prompt(`Veuillez saisir la moyenne de ${name} :`));

  // Ajouter les informations de l'élève au tableau
  students.push({ name, average });
}

// Trouver l'élève avec la meilleure moyenne
const topStudent = students.reduce((best, student) => {
  if (!best || student.average > best.average) {
    return student;
  }
  return best;
}, null);

// Afficher les informations du premier de la classe
if (topStudent) {
  console.log(`Le premier de la classe est ${topStudent.name} avec une moyenne de ${topStudent.average.toFixed(2)}.`);
} else {
  console.log("Aucun élève n'a été saisi.");
}
