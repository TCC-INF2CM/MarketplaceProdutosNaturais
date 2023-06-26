function verificar() {
    var senha = document.getElementById('senha').value;
    var feed = document.getElementsByClassName('feed')


    var maiscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeros = "0123456789";


    var m = [];
    var n = [];



    for (i = 0; i < senha.length; i++) {
        if (senha.length <= 8 || senha.value == "") {
            feed[0].style.color = "red";
        } else {
            feed[0].style.color = "green";
        }
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
    }
}

function entrar2() {
    
    var email = document.getElementById(`text`).value
    var pass = document.getElementById(`senha`).value    
    var botão = document.getElementById(`botão`)

    var emailADM = 'Adm@gmail.com';

    botão.addEventListener('click' , function entrar(){
        if(email.value == emailADM){
            window.location.replace = "https://www.twitch.tv/gaules";
        }
    }
    
    )
    





}
function esconder() {
    var input = document.getElementById(`senha`)
    var minhaDiv = document.getElementById(`minhaDiv`)
    var cond = true
    if (cond) {
        minhaDiv.style.display = "block"
    }
    else {
        minhaDiv.style.display = "none";
    }


}
const input = document.getElementById("senha");
const div = document.getElementById("minhaDiv");
document.addEventListener("click", function (event) {
    // Se o clique não foi no input nem na div, fecha a div
    if (event.target !== input && event.target !== div) {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
});


const usuario = [
    {
        login: 'fornecedor@gmail.com',
        pass: 'Fornecedor123'

    },
    {
        login: 'Adm@gmail.com',
        pass: 'Administrador123'
    }
]


function verify(){

    var email = window.getElementById(`text`).value
    var password = window.getElementById(`senha`).value

    for(let i in usuario){
        if(email == usuario[i].login){
            entrar()
        }else{
            
        }
    }

}