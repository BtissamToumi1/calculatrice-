//les variables
const  buttonItem=document.querySelectorAll(".button-item");
const output=document.getElementById("input");
const clear=document.getElementById("clear");

//pour stocker les valeurs cliques par l'utilisateur
let table=[];
let valeur;
let positionPlus;
let positionMois;
let positionDivision;
let positionSoustraction
//boucle forEach pout recuperer la valeur clique
buttonItem.forEach(item =>{ item.addEventListener('click',function(){
    //recurerer le texte du div clique
    valeur=this.innerText;
    console.log(valeur)
    ajouter()
    output.innerText=valeur;
});
});

//pour supprimer les valeurs de la partie output
clear.addEventListener("click",function(){
    output.innerText="";
    table=[];
    console.log(table)
});

//pour ajouter une valeur dans le tableau table
function ajouter(){
    table.push(valeur);
    console.log(table);
    
}



