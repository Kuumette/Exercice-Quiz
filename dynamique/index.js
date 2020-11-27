//Constante des reponse vrai
const REPONSES = ["q1r2", "q2r2", "q3r4", "q4r3"];
//Constante qui recup tout le formulaire 
const FORM = document.querySelector(".form-quizz");
//Constante qui recup ma classe resultat et mon h2
const TITRERESULTAT = document.querySelector(".resultat h2");
//Constante qui recup ma classe aide
const AIDERESULTAT = document.querySelector(".aide");
//Constante qui recup ma classe note
const NOTERESULTAT = document.querySelector(".note");
//constante qui recupere toute mais classe block 
const ALLQUESTION = document.querySelectorAll(".block1, .block2, .block3, .block4")
//Variable des reponse client
let clientReponses = [];
//Variable du check Tableau
let checkTableau = [];

FORM.addEventListener("submit", (e) => {
    //Stop au chargement de la page quand on click sur envoi
    e.preventDefault();
    //Pour i = 1; i <= reponse par pas de 1
    for (let i = 1; i <= REPONSES.length; i++) {
        //Recup les reponse du client 
        clientReponses.push (
            document.querySelector(`input[name="q${i}"]:checked`).value
        );
    }
    //Apelle de ma fonction verif
    verif(clientReponses);
    //Remet a 0 le compteur
    clientReponses = [];
});
//Fonction verif
function verif(tableau) {
    //Pour i < longueur tableau par pas de 1
    for(let i = 0; i < tableau.length; i++) {
        //Si reponse juste
        if(tableau[i] === REPONSES[i]) {
            //Alors retourne vrai
            checkTableau.push(true);
        //Sinon
        } else {
            //Retourne faux
            checkTableau.push(false);
        }
    }
    console.log(checkTableau);
    //Apelle de ma fonction afficheResultat
    afficheResultat(checkTableau);
    //appelle de ma fonction changement de couleur
    colorErrors(checkTableau);
    //remet a 0 le compteur
    checkTableau = [];
}
//Fonction Affiche resultat
function afficheResultat(tableau) {
    //Constante NBFAUX qui me filtre mais element qui sont egale a faux
    const NBFAUX = tableau.filter((element) => element === false).length;

    switch (NBFAUX) {
        //Dans le cas ou 0 faux 
        case 0:
            //Ecrire dans ma classe resultat de mon html
            TITRERESULTAT.innerText = "🤩 YEP C'est toi le meilleur !!";
            //Ecrire dans ma classe aide de mon html
            AIDERESULTAT.innerText = "";
            //Ecrire dans ma classe note de mon html
            NOTERESULTAT.innerText = "4 Bonnes reponses sur 4";
            break;
        //Dans le cas ou 1 faux 
        case 1:
            //Ecrire dans ma classe resultat de mon html
            TITRERESULTAT.innerText =  "😞 Aiieee Tu y est presque";
            //Ecrire dans ma classe aide de mon html
            AIDERESULTAT.innerText = "Veuillez recommencer il y à 3 bonnes reponses";
            //Ecrire dans ma classe note de mon html
            NOTERESULTAT.innerText = "3 Bonnes reponses sur 4";
            break;
        //Dans le cas ou 2 faux 
        case 2:
            //Ecrire dans ma classe resultat de mon html
            TITRERESULTAT.innerText = "😢 Tu as reussi la moitier";
            //Ecrire dans ma classe aide de mon html
            AIDERESULTAT.innerText = "Veuillez recommencer il y à 2 bonnes reponses";
            //Ecrire dans ma classe note de mon html
            NOTERESULTAT.innerText = "2 Bonnes reponses sur 4";
            break;
        //Dans le cas ou 3 faux 
        case 3:
            //Ecrire dans ma classe resultat de mon html
            TITRERESULTAT.innerText = "😭 ARFF 1 de juste";
            //Ecrire dans ma classe aide de mon html
            AIDERESULTAT.innerText = "Retente ta chance";
            //Ecrire dans ma classe note de mon html
            NOTERESULTAT.innerText = "1 Bonne reponse sur 4";
            break;
        //Dans le cas ou 4 faux 
        case 4:
            //Ecrire dans ma classe resultat de mon html
            TITRERESULTAT.innerText = "☠️ Tu est nul !!";
            //Ecrire dans ma classe aide de mon html
            AIDERESULTAT.innerText = "Arrete tout !!";
            //Ecrire dans ma classe note de mon html
            NOTERESULTAT.innerText = "0 Bonne reponse sur 4";
            break;
        default:
            "Oups bizzard";
    }
}
//fonction colorERRORS
function colorErrors(tableau) {
    //pour i < tableau par pas de 1
	for (let i = 0; i < tableau.length; i++) {
        //si i et egale a vrai 
		if (tableau[i] === true) {
            //alors je change de couleur en or
            ALLQUESTION[i].style.boxShadow = "5px 5px 10px #d5b903";
        //sinon
		} else {
            //je change de couleur en rose
            ALLQUESTION[i].style.boxShadow = "5px 5px 10px #ae004d";
            //Ajout de la vibration si ces faux
            ALLQUESTION[i].classList.add("echec");
            //reset l'animation apres 300 milisecondes
            setTimeout(() =>{
                ALLQUESTION[i].classList.remove("echec");
            }, 300);
            
		}
	}
}

ALLQUESTION.forEach((question) => {
    question.addEventListener("click", () => {
        question.style.boxShadow =  "5px 5px 10px rgba(255, 255, 255, 0.5)";
    })
})
