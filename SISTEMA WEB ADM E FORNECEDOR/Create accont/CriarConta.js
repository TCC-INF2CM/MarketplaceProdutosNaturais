const form = document.getElementById('form')
const input = querySelectorAll('.inf')

 form.addEventListener('enviar', (e)  => {
     e.preventDefault()
    
    checkInputs()
}  )

    function checkInputs(){

    const nameValue = uname.value.trim()
    const cnpjValue = cnpj.value.trim()
    const telValue = tel.value.trim()
    const cepValue = cep.value.trim()
    const cityValue = city.value.trim()
    const emailValue = email.value.trim()
    const email2Value = email2.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(nameValue === ''){
        //mostrar erro
        //adicionar classe error
        errorValidation(uname, 'Preencha esse campo')
    }else{
        
    }
 }

function errorValidation(input, message){
    const inf = input.parentElement;

    inf.className = 'inf error'
}

function enviar() {
    window.location.href = "http://127.0.0.1:5500/Login%20ADM%20e%20Fornecedor/login.html";
}
