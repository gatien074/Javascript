// Demander à l'utilisateur de saisir son adresse e-mail
const emailInput = prompt("Veuillez saisir votre adresse e-mail :");

// Fonction pour vérifier la validité de l'adresse e-mail
function isValidEmail(email) {
  // Utiliser une expression régulière pour vérifier le format de l'adresse e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Vérifier la validité de l'adresse e-mail saisie
if (isValidEmail(emailInput)) {
  console.log("Adresse e-mail valide !");
} else {
  console.error("Adresse e-mail non valide. Veuillez réessayer.");
}
