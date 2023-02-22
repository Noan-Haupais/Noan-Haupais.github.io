// Définir une variable pour stocker le nombre de visites
 let visiteurs = 0;

 // Fonction pour incrémenter le compteur de visites
 function incrementerCompteur() {
   visiteurs++;
   // Enregistrer le nombre de visites dans le stockage local du navigateur
   localStorage.setItem("visiteurs", visiteurs);
 }

 // Vérifier si le nombre de visites est stocké dans le stockage local
 if (localStorage.getItem("visiteurs")) {
   // Si le nombre de visites est stocké, le récupérer
   visiteurs = parseInt(localStorage.getItem("visiteurs"));
 } else {
   // Sinon, initialiser le nombre de visites à 0
   localStorage.setItem("visiteurs", 0);
 }

 // Appeler la fonction pour incrémenter le compteur de visites
 incrementerCompteur();

 // Afficher le nombre de visites sur la page
 const compteur = document.getElementById("compteur-visiteurs");
 compteur.innerText = `Nombre de visiteurs : ${visiteurs}`;