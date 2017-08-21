/**
 * Virement de compte à compte
 */
// constructeur du compte

let Compte=function(solde=0,numeroCompte=0){
	this.numeroCompte=numeroCompte;
	this.solde=solde;
	this.decouvert=100;
	
    this.retirer=function(montant) {
		if (montant < 0) {
			console.log("Erreur : le montant à  retirer est negatif !");
		} else {
    	if ((this.solde + this.decouvert) >= montant) {
			if (this.solde >= montant) {
				this.solde -= montant;
				console.log("Retrait effectue de " + montant + "sur le compte n°:  " +this.numeroCompte+ "qui a maintenant un solde de :" + this.solde);
			} else {
				console.log("Erreur : Le solde est insuffisant !");
			}
		}
		}	
	}
	
	
    this.verser=function(montant){
    	if (montant >= 0) {
    		this.solde += montant;
    		console.log("Versement effectue de " + montant );
    	} else {
    		console.log("Erreur : vous ne pouvez pas verser un montant negatif !");
    	}
}
}
	
// tests sur fonction verser
compteCrediteur= new Compte(300,1200202);
console.log("Le compte n°:"+compteCrediteur.numeroCompte+ "  a un solde initial de : " +compteCrediteur.solde);
compteCrediteur.verser(200);
console.log("Le compte  n° :"+compteCrediteur.numeroCompte+ " a maintenant un solde de " + compteCrediteur.solde);
// tests sur fonction retirer
compteDebiteur= new Compte(400,1211202);
console.log("Le compte n° :" +compteDebiteur.numeroCompte+ " a un solde initial de : " +compteDebiteur.solde);
compteDebiteur.retirer(100);
console.log("Le compte  n° :"+compteDebiteur.numeroCompte+" a maintenant un solde de " + compteDebiteur.solde);



