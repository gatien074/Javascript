// Demander à l'utilisateur de saisir son nom, prénom et sexe
const userName = prompt("Quel est votre nom ?");
const userFirstName = prompt("Quel est votre prénom ?");
const userGender = prompt("Quel est votre sexe (M/F) ?");

// Créer un objet pour stocker les informations de l'utilisateur
const userInfo = {
  nom: userName,
  prenom: userFirstName,
  sexe: userGender
};

// Ajouter la propriété "titre" en fonction du sexe
if (userGender.toUpperCase() === "M") {
  userInfo.titre = "M.";
} else {
  userInfo.titre = "Mme";
}

// Afficher l'objet en console
console.log(userInfo);
