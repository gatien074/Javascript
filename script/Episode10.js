// Demander le montant de la facture
let montantFacture = parseFloat(prompt("Quel est le montant de la facture ?"));

// Calculer le montant à payer avec ou sans remise
let montantAPayer;
if (montantFacture > 40000) {
  montantAPayer = montantFacture * 0.9; // Remise de 10%
  console.log("Vous bénéficiez d'une remise de 10%. Le montant à payer est de " + montantAPayer + " F.");
} else {
  montantAPayer = montantFacture;
  console.log("Le montant à payer est de " + montantAPayer + " F.");
}
