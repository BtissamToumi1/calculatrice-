const  buttonItem=document.querySelectorAll(".button-item");
//boucle forEach

buttonItem.forEach(item =>{ item.addEventListener('click',function(){
    //recurerer le texte du div clique
    const valeur=this.innerText;
    console.log(valeur)
});
});