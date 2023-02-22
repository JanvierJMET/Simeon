

// let est un mot clé permettant de créer les variables en JS

let numberOfSeasons=6;
let numberOfEpisodes= 12;
let episodeTime=45 , commertialTime=5 , totalShowTime=50;

// const est un mot clé permettant de créer les constantes en JS
const hoursPerDay= 24, minutesPerHour=60, secondPerMinute= 60;
console.log("salut... je suis dans la place");
/** créer un objet 
 * c'est aussi une liste
*/
let episode={
    title: "l'annatomie du monde",
    duration: 55, hasBeenWatched
};

let episodeTitle= episode.title, episodeDuration= episode.duration;

// creer une classe d'objet:
/** une classe permet de regrouper un ensemble d'objet. */
class Episode{
    // un contructeur est une fonction qui crée des objet.
    constructor(title, duration, hasBeenWatched){
        //  this.NomVariable= Argument permet d'affecter les arguments du constructeur aux variables de l'objet qui sera créé.
        this.title=title;
        this.duration=duration;
        this.hasBeenWatched=hasBeenWatched;
    }
    //  il est possible de créer des fonctions à l'intérieur d'une classe. pour se faire , on utilise plus 'function'; juste le nom pui{}
    // si l'on veut faire appel à cette méthode d'instance, on fait: nomInstance.nomFonction().
    // il est possible de créer des fonctions ou méthodes static en précédant le nom de la fontion du mot clé 'static'
    //  l'avantage des méthodes statics est qu'on a pas bésoin de créer une instance avant de les appeler.
    // EX d'appel de methode statics: Math.floor(0.54): Math est une classe et floor() est une methode static de cette classe.

    // puis qu'on a pas besoin de créer une instance d'une classe avant d'appeler les methodes statique de cette classe, cette classe n'aura pas besoin d'un constructor!
    

};

// les condition c'est comme en C
// opérateurs de comparaison: < ,=< ,> >=, ==, ===(egalitéstricte: 5==="5" retourne false)
// !=(différent), !===(difference stricte)
// les connecteurs logiaue: &&(et: les deux assertion doivent etre vrai), ||( ou), !(non...)


//  la codition switch : syntaxe:
/**
 * switch (variable de discution){
 *      case 'premier cas':  actions;
 *          break;
 *      .
 *      .
 *      case 'nnieme cas':   actions;
 *          break;
 * }
 */


// la boucle for: syntaxe: for(i=0; i< nobre limite; i++ ){  instructions;}
//  pour les tableau, for(i in nomDuTableau){ instructions;}
//  ou encore for(element of tableauDElements){ instructions;}

// la condition while: syntaxe while(condition){ instructions;}




// création de nouvelles instance des objets Episode.

let firstEpisode= new Episode("le monde", 60, true);
let secondEpisode= new Episode("création du monde", 58, true);
let thirdEpisode= new Episode("l'HOMME", 57, false);
let forthEpisode= new Episode("la soufrance", 56, true);

// création de tableau: on utilise [] les indices commencent à 0

let episodes=[firstEpisode, secondEpisode, thirdEpisode];
// pour connetre la longueur d'un tableau on utilise length

let n= episodes.length;

// push permet d'ajouter un élément au tableau

episodes.push(forthEpisode);

// unshift perment de suprimer un élément du tableau
// sa syntaxe est la même que push.

// pop() permet de suprimer le dernier élémement du tableau.
// il n'a pas d'argument et il a la même sytaxe que push et unshift.





