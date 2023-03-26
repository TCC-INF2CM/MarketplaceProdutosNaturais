function verificar() {
    var senha = document.getElementById('senha').value;
    var feed = document.getElementsByClassName('feed')


    var maiscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeros = "0123456789";


    var m = [];
    var n = [];

    

    for (i = 0; i < senha.length; i++) {
        m.push(maiscula.indexOf(senha.charAt(i)))
        var maxM = Math.max.apply(null, m)
        if (maxM >= 0) {
            feed[1].style.color = "green";
        } else {
            feed[1].style.color = "red";
        }

        n.push(numeros.indexOf(senha.charAt(i)))
        var maxN = Math.max.apply(null, n)
        if (maxN >= 0) {
            feed[2].style.color = "green";
        } else{
            feed[2].style.color = "red";
        }

        if (senha.length <= 8 || senha.value == "") {
            feed[0].style.color = "red";
        } else {
            feed[0].style.color = "green";
        }
        
        if(feed = ""){
            feed.style.color = "red"
        }else{
            feed.style.color = "green"
        }

    }
}

function entrar(){
    window.location.href = "https://www.google.com.br";
}

var text = document.getElementById('text')
var botão = document.getElementById('botão')

text.addEventListener("input" , function() {
    if(text.value !== "" ){
        var minhaF = function verificar(){}
        minhaF() 
        botão.disabled = false        
    }else{
        
        botão.disabled = true
        
    }
}

)

function esconder(){
    var input = document.getElementById(`senha`)
    var minhaDiv = document.getElementById(`minhaDiv`)
    var cond = true
    if(cond){
        minhaDiv.style.display = "block" 
    }
    else{
        minhaDiv.style.display = "none";
    }
    

}
const input = document.getElementById("senha");
const div = document.getElementById("minhaDiv");
document.addEventListener("click", function(event) {
    // Se o clique não foi no input nem na div, fecha a div
    if (event.target !== input && event.target !== div) {
      div.style.display = "none";
    }else{
      div.style.display = "block";
    }
  });