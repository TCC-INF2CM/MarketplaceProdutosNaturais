const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required'); 
const emailRegex = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,4})+$/;

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    emailValidate();
})

function setError(index) {
    campos[index].style.border ='2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError (index) {
    campos[index].style.border ='';
    spans[index].style.display = 'none';
  
}


function emailValidate(){
    if(!emailRegex.test(campos[0].value))
    {
        setError(0);
    } else {
        removeError(0);
    }
}

function sendEmail(){
    if(emailRegex.value = "")
    {
        window.alert("Digite um email válido");   

    } else {
        window.alert("Email enviado com sucesso");
        window.location.href = "https://www.google.com.br"
    }
    
}