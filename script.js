const  buttonItem=document.querySelectorAll(".button-item");
const output=document.getElementById("input");
//boucle forEach

buttonItem.forEach(item =>{ item.addEventListener('click',function(){
    //recurerer le texte du div clique
    const valeur=this.innerText;
    console.log(valeur)
    output.innerText=valeur;
});
});
