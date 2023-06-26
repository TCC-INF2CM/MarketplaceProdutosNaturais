
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