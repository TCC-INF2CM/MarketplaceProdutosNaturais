function verificar(){
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

function entrar() {
    var campo1 = document.getElementById(`password`)

    var campo2 = document.getElementById(`password-two`)

    if (campo1.value == campo2.value) {

        window.location.href = "https://www.google.com.br";
    } else {
        window.alert("Os valores dos campos devem ser iguais! , tente novamente!");
    }

}

function finalizar(){

    window.alert(`Senha Redefinida`)
    
}



