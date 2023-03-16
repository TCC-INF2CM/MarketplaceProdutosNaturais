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
        } else {
            feed[2].style.color = "red";
        }

        if (senha.length >= 8) {
            feed[0].style.color = "green";
        } else {
            feed[0].style.color = "red";
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