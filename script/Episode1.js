
// Episode1
console.log("Mbolo js")

// Episide2
// Demander le nom de l'utilisateur
let nom = prompt("Quel est votre nom ?")


// Demander le sexe de l'utilisateur
let sexe = prompt("Quel est votre sex ?")


// Demander le premier nombre
let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));

// Demander le deuxième nombre
let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));

// Calculer la somme
let somme = nombre1 + nombre2;

// Afficher la somme en alerte
alert("La somme de " + nombre1 + " et " + nombre2 + " est : " + somme);

// Afficher le message de bienvenue en fonction du sexe
if (sexe.toLowerCase() === "homme") {
    console.log("Bonjour monsieur " + nom);
  } else if (sexe.toLowerCase() === "femme") {
    console.log("Bonjour madame " + nom);
} else {
  console.log("Désolé, je n'ai pas compris votre sexe.");
}




