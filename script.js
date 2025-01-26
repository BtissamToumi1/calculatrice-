//les variables
const buttonItem = document.querySelectorAll(".button-item");
const output = document.getElementById("input");
const symboleMultiplication = document.getElementById("multi");
const symboleDivision = document.getElementById("div");


//pour stocker les valeurs cliques par l'utilisateur
let table = [];
let calcul = "";
let valeur;
let positionPlus = -1;
let positionMoins = -1;
let positionDivision = -1;
let positionMultiplication = -1;
let positionPoint = -1;

//boucle forEach pout recuperer la valeur clique
buttonItem.forEach(item => {
    item.addEventListener('click', function () {

        //recurerer le contenu du div clique
        valeur = this.innerText;

        if ((valeur === "+" || valeur == "-" || valeur === symboleMultiplication.innerText || valeur === symboleDivision.innerText) && table.length === 0) {
            output.innerHTML = "Syntax Error!";
            table = [];
        }
        else {
            output.innerText = valeur;
            ajouter(valeur);
            calcul += valeur;

            //appel de fonction copier
            if (valeur === "+") {
                positionPlus = table.length - 1;
            }
            if (valeur === "-") {
                positionMoins = table.length - 1;
            }
            if (valeur === symboleDivision.innerText) {
                positionDivision = table.length - 1;
            }
            if (valeur === symboleMultiplication.innerText) {
                positionMultiplication = table.length - 1;
            }

        }

    });

});

//pour supprimer les valeurs de la partie output
function clearr() {
    output.innerHTML = "";
    table = [];
    calcul = "";
}

//pour ajouter une valeur dans le tableau table
function ajouter(a) {
    table.push(a);
    console.log(table);

}

//pour calculer l'addition
function resultat() {

    //pour calculer la somme
    if (positionPlus !== -1) {
        calcul.trim;

        // Utilisation de substring() pour obtenir les deux parties de la chaîne
        let partie1 = calcul.substring(0, positionPlus)
        let partie2 = calcul.substring(positionPlus+1, table.length);
      
        partie1 = parseFloat(partie1);// Récupère la partie avant le "+"
        partie2 = parseFloat(partie2);// Récupère la partie après le "+"
        console.log(partie2);

        let somme = partie1 + partie2;
        console.log(somme);
        output.innerHTML=somme;

        table = [];  // Remettre la table à zéro
        calcul = "";
        console.log(calcul);

        positionPlus=-1;

    }
    if (positionMoins !== -1) {
        calcul.trim;

        let partie3=calcul.substring(0, positionMoins);
        let partie4=calcul.substring(positionMoins+1, table.length);

        partie3 = parseFloat(partie3);    
        partie4 = parseFloat(partie4);
        console.log(partie3);
        console.log(partie4);
        
        //pour calculer la soustraction
        let soustraction = partie3 - partie4;
        console.log(soustraction);
        
        output.innerHTML = soustraction;
        console.log(output.innerHTML);
        
        //remettre le tableau a zero  
        table = [];
        calcul = "";

        positionMoins=-1;

    }

    //pour la partie division
    if (positionDivision !== -1) {
        calcul.trim;

        let partie5=calcul.substring(0, positionDivision);
        let partie6=calcul.substring(positionDivision+1, table.length);

        partie5 = parseFloat(partie5);
        partie6 = parseFloat(partie6);
        
        //pour calculer la division       
        let division = partie5 / partie6;
        output.innerHTML = division;

        //remettre le tableau a zero 
        table = [];
        calcul = "";

        positionDivision=-1;

    }
    //pour la partie multiplication
    if (positionMultiplication !== -1) {
        calcul.trim;

        let partie7=calcul.substring(0, positionMultiplication);
        let partie8=calcul.substring(positionMultiplication+1, table.length);
      
        partie7 = parseFloat(partie7);
        partie8 = parseFloat(partie8);

        //pour calculer le produit       
        let multiplication = partie7 * partie8;
        output.innerHTML = multiplication;

        //remettre le tableau a zero 
        table = [];
        calcul = "";

        positionMultiplication=-1;

    }
}