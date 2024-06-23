// Demander le nombre à l'utilisateur
let nombre = parseInt(prompt("Entrez un nombre :"));

// Afficher la table de multiplication
console.log("Table de multiplication de " + nombre + " :");
for (let i = 1; i <= 10; i++) {
  let produit = nombre * i;
  console.log(nombre + " x " + i + " = " + produit);
}
