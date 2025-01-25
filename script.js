const  buttonItem=document.querySelectorAll(".button-item");
const output=document.getElementById("input");
const clear=document.getElementById("clear");

//boucle forEach pout recuperer la valeur clique
buttonItem.forEach(item =>{ item.addEventListener('click',function(){
    //recurerer le texte du div clique
    const valeur=this.innerText;
    console.log(valeur)
    output.innerText=valeur;
});
});

//pour supprimer les valeurs de la partie output

clear.addEventListener("click",function(){
    output.innerText="";
})
