// Demander à l'utilisateur de saisir un mot de passe
const password = prompt("Veuillez saisir un mot de passe :");

// Fonction pour vérifier la validité du mot de passe
function isValidPassword(pwd) {
  // Vérifier la longueur du mot de passe
  if (pwd.length < 8) {
    return false;
  }

  // Vérifier la présence d'au moins une majuscule
  if (!/[A-Z]/.test(pwd)) {
    return false;
  }

  // Vérifier la présence d'au moins un chiffre
  if (!/\d/.test(pwd)) {
    return false;
  }

  // Si tous les critères sont remplis, le mot de passe est valide
  return true;
}

// Vérifier la validité du mot de passe saisi
if (isValidPassword(password)) {
  console.log("Mot de passe valide !");
} else {
  console.error("Mot de passe non valide. Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre.");
}
