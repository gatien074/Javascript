// Définir l'opération mathématique
let nombre1 = 5;
let nombre2 = 1;
let operation = "+" ;
let reponseCorrecte = nombre1 + nombre2;

// Demander la réponse à l'utilisateur jusqu'à ce qu'elle soit correcte
let reponse;
do {
  reponse = parseInt(prompt("Combien font " + nombre1 + " " + operation + " " + nombre2 + " ?"));
  if (reponse !== reponseCorrecte) {
    console.log("Désolé, ce n'est pas la bonne réponse. Réessayez.");
  }
} while (reponse !== reponseCorrecte);

console.log("Bravo, vous avez trouvé la bonne réponse !");
