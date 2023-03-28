const form = document.getElementById('form')
const uname = document.getElementById('uname')
const cnpj = document.getElementById('CNPJ')
const tel = document.getElementById('tel')
const cep = document.getElementById('cep')
const city = document.getElementById('city')
const email = document.getElementById('email')
const email2 = document.getElementById('email2')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

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