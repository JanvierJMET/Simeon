// 

/**
 * comme son nom l'indique, document.getElementById() est une fonction
 * qui permet de recuper le contenu d'un élément d'une page html dont
 * l'identifiant l'argument saisi à l'interieur des paranthèses.
 */

const espaceMessage= document.getElementById("message");
const bouton= document.getElementById("submit");
const namInput= document.getElementById("nom");
const ageInput= document.getElementById("age");
const parentalInput= document.getElementById("parental");
let isControlParentalActive;
let age, isMajor=18;
age=ageInput;


// création de fonctions
// pour créer une fonction on utilise le mot clé: function suivi du nom de la fontion puis vient les accolades EX

function valider(){
    espaceMessage.innerHTML= "Vous etes autorisé à entrer";
    // innerHTML permet d'afficher un message dans une balise d'un code html
}

function refuser(){
    alert("Dégage d'ici");
}

// parseInt, parseFloat permettent de convertir du texte en entier ou en réel. 

function convetion(){
    age= parseInt(ageInput.value);
    // isNaN= is note est nuber permet de savoir si c'est un nombre. 
    if(isNaN(age)){
        alert(" ce n'est pas un nombre");
        return;
    }

    isControlParentalActive= parentalInput.checked;

    if (age< isMajor && isControlParentalActive){
        refuser();
    } else {
       valider();
    }

    ageInput.value="";

}


bouton.addEventListener('click', convetion);

