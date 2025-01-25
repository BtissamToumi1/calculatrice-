//les variables
const  buttonItem=document.querySelectorAll(".button-item");
const output=document.getElementById("input");
const symboleMultiplication=document.getElementById("multi");
const symboleDivision=document.getElementById("div");


//pour stocker les valeurs cliques par l'utilisateur
let table=[];
let calcul="";
let valeur;
let positionPlus=-1;
let positionMoins=-1;
let positionDivision=-1;
let positionSoustraction=-1;
let positionPoint=-1;

//boucle forEach pout recuperer la valeur clique
buttonItem.forEach(item =>{ item.addEventListener('click',function(){

    //recurerer le texte du div clique
    valeur=this.innerText;
    
    if((valeur==="+" || valeur=="-" || valeur===symboleMultiplication.innerText || valeur===symboleDivision.innerText) && table.length===0){
        output.innerHTML="Syntax Error!";
        table=[];
    }
    else{
        output.innerText=valeur;
        ajouter(valeur);
         calcul+=valeur;
        //appel de fonction copier
        copier
        if(valeur==="+"){
            positionPlus=table.length-1;
            console.log(positionPlus);
        }
        if(valeur==="-"){
            positionMoins=table.length-1;
            
        }
        if(valeur===symboleDivision.innerText ){
            positionDivision=table.length-1;
        }
        if(valeur===symboleMultiplication.innerText){
            positionSoustraction=table.length-1;
        }
        
    }
    
});

});

//pour supprimer les valeurs de la partie output
function clear(){
    output.innerText="";
    table=[];
    console.log(table)
}

//pour ajouter une valeur dans le tableau table
function ajouter(a){
    table.push(a);
    console.log(table);
    
}

//pour calculer l'addition
function resultat(){
         //pour calculer la somme
         if (positionPlus !== -1) {
            calcul.trim;
            console.log(calcul);
            
            // Utilisation de slice() pour obtenir les deux parties de la chaîne
            let partie1 = calcul.slice(0, positionPlus);  // Récupère la partie avant le "+"
            let partie2 = calcul.slice(positionPlus); // Récupère la partie après le "+"
        
            // Convertir les deux parties en nombres
            partie1 = parseInt(calcul.substring(0, positionPlus));
            partie2 = parseInt(calcul.substring(positionPlus+1,table.length));
        
            let somme = partie1 + partie2;
                console.log(somme);
                output.innerText = somme;
        
            table = [];  // Remettre la table à zéro
            calcul="";
            console.log(calcul);
            
        }
             if(positionMoins!==-1){
                calcul.trim;
            let partie3;
                partie3=parseInt(calcul.substring(0,positionMoins));
                  console.log(partie3);
                  
            let partie4;
                partie4=parseInt(calcul.substring(positionMoins+1,table.length));
                   console.log(partie4);
                   
                   
            let soustraction=partie3 - partie4;       
            output.innerText=soustraction; 
            console.log(soustraction);
            
           table=[];   
           calcul="";
           console.log(calcul);
                   
       } 
}

//pour copier le contenu de table dans la chaine
function copier(){

}
