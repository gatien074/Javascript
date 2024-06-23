// Demander le nom de l'utilisateur
let nom = prompt("Quel est votre nom ?");

// Demander le sexe de l'utilisateur
let sexe = prompt("Quel est votre sexe ? (homme/femme)");

// Afficher le message de bienvenue en fonction du sexe
if (sexe.toLowerCase() === "homme") {
  console.log("Bonjour monsieur " + nom);
} else if (sexe.toLowerCase() === "femme") {
  console.log("Bonjour madame " + nom);
} else {
  console.log("Désolé, je n'ai pas compris votre sexe.");
}
