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
let positionMultiplication=-1;
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
            positionMultiplication=table.length-1;
        }
        
    }
    
});

});

//pour supprimer les valeurs de la partie output
function clearr(){
    console.log(4);
    
    output.innerHTML="";
    table=[];
    calcul="";
    console.log(table);
    console.log(calcul);
    
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
            
            // Utilisation de substring() pour obtenir les deux parties de la chaîne
            let partie1=calcul.substring(0,positionPlus);
            let partie2=calcul.substring(positionPlus+1,table.length); 
            // if(positionPoint===-1){
            // Convertir les deux parties en nombres
            partie1 = parseFloat(partie1);// Récupère la partie avant le "+"
            partie2 = parseFloat(partie2);// Récupère la partie après le "+"
            console.log(partie2);
            
            //  }else{
            //     if()
            //  }
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
                partie3=parseFloat(calcul.substring(0,positionMoins));
                  console.log(partie3);
                  
            let partie4;
                partie4=parseFloat(calcul.substring(positionMoins+1,table.length));
                   console.log(partie4);
                   
                   
            let soustraction=partie3 - partie4;       
            output.innerText=soustraction; 
            console.log(soustraction);
            
           table=[];   
           calcul="";
                   
       } 

       //fonction division
       if(positionDivision!==-1){
        calcul.trim;
        let partie1;
        partie1=parseFloat(calcul.substring(0,positionDivision));
          console.log(partie1);
          
        let partie2;
        partie2=parseFloat(calcul.substring(positionDivision+1,table.length));
           console.log(partie2);
           
           
    let division=partie1 / partie2;       
    output.innerText=division; 
    console.log(division);
    
   table=[];   
   calcul="";
           
} 
    //fonction multiplication
    if(positionMultiplication!==-1){
        calcul.trim;
        let partie1;
        partie1=parseFloat(calcul.substring(0,positionMultiplication));
          console.log(partie1);
          
        let partie2;
        partie2=parseFloat(calcul.substring(positionMultiplication+1,table.length));
           console.log(partie2);
           
           
    let multiplication=partie1 * partie2;       
    output.innerText=multiplication; 
    console.log(multiplication);
    
   table=[];   
   calcul="";
           
} 
}

//pour copier le contenu de table dans la chaine
function copier(){

}
