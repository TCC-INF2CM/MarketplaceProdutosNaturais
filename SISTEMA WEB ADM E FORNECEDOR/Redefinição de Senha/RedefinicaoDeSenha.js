const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required'); 

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    mainPasswordValidate();
    comparePassword();
})

function setError(index) {
    campos[index].style.border ='2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError (index) {
    campos[index].style.border ='';
    spans[index].style.display = 'none';
  
}

function mainPasswordValidate(){
    if(campos[0].value.length < 8)
    {
        setError(0);
    }
    else{
        removeError(0);
        comparePassword();
    }
}

function comparePassword(){
    if(campos[0].value == campos[1].value && campos[1].value.length >=8)
    {
        removeError(1);
    }
    else{
        setError(1);
    }
}

function Entrar() {
    if (campos[0].value == campos[1].value) {
        window.alert("Senha Redefinida com sucesso!")
        window.location.href = "https://www.google.com.br";
    } else {
        window.alert("Os valores dos campos devem ser iguais! , tente novamente!");
    }
 
}

///// function eyeClick (){
    //let inputTypeIsPassword = passwordInput.type = 'password';
    //if(inputTypeIsPassword){
     //   showPassword
    //} else {
     //   hidePassword()
    //}
//}

//function showPassword(){
  //  passwordInput.setAttribute('type', 'text');
///}

//function hidePassword(){
  //  passwordInput.setAttribute('type', 'password'); //
// }