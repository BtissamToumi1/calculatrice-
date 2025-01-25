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
        if(valeur==="+"){
            positionPlus=table.length-1;
        }
        if(valeur==="-" ){
            positionMoins=table.length-1;
            
        }
        if(valeur===symboleDivision.innerText ){
            positionDivision=table.length-1;
        }
        if(valeur===symboleMultiplication.innerText){
            positionSoustraction=table.length-1;
        }
        console.log(calcul);
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
         if(positionPlus!=-1){
            let partie1=calcul.split(0,positionPlus);
                  partie1=parseInt(partie1);
            let partie2=calcul.split(positionPlus,calcul.length-1);
                  partie2=parseInt(partie2);
            output.innerText=partie1+partie2;            
         }
}

