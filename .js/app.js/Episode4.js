// Fonction pour vérifier le format de la date
function isValidDate(dateString) {
    // Vérifier si la date est au format JJ/MM/AAAA
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!dateRegex.test(dateString)) {
      return false;
    }
  
    // Extraire les jours, mois et années
    const [, day, month, year] = dateRegex.exec(dateString);
  
    // Vérifier la validité de la date
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return (
      date.getFullYear() === parseInt(year) &&
      date.getMonth() === parseInt(month) - 1 &&
      date.getDate() === parseInt(day)
    );
  }
  
  // Demander la date de naissance à l'utilisateur
  const birthDate = prompt("Veuillez saisir votre date de naissance (JJ/MM/AAAA) :");
  
  // Vérifier la validité de la date saisie
  if (isValidDate(birthDate)) {
    console.log("Date de naissance valide !");
  } else {
    console.error("Date de naissance non valide. Veuillez saisir la date au format JJ/MM/AAAA.");
  }
  