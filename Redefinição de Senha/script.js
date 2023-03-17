function entrar() {
    var campo1 = document.getElementById(`password`)

    var campo2 = document.getElementById(`password-two`)

    if (campo1.value == campo2.value) {

        window.location.href = "https://www.google.com.br";
    } else {
        window.alert("Os valores dos campos devem ser iguais! , tente novamente!");
    }

}
