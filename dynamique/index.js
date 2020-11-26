//Constante des reponse vrai
const REPONSES = ["q1r2", "q2r2", "q3r4", "q4r3"];
//Constante qui recup tout le formulaire 
const FORM = document.querySelector(".form-quizz");
//Variable des reponse client
let clientReponses = [];
//Variable du check Tableau
let checkTableau = [];

FORM.addEventListener("submit", (event) => {
    //Stop au chargement de la page quand on click sur envoi
    event.preventDefault();
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
    //remet a 0 le compteur
    checkTableau = [];
}