<<<<<<< Updated upstream
const label = document.getElementById('label')
const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
=======
const form = document.getElementById('form')
const username = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password2')
>>>>>>> Stashed changes

label.addEventListener('enviar', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const nameValue = name.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(nameValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(name, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(name)
    }

    if(emailValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email)
    }
   
    if(passwordValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(password, 'Preencha esse campo')

    } else if(passwordValue.length < 8) { 
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(password)
    }

    if(password2Value === '') {
        // mostrar erro
        // add classe
        setErrorFor(password2, 'Preencha esse campo')

    } else if(passwordValue !== password2Value) { 
        setErrorFor(password2, 'Senhas não coincidem')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(password2)
    }

}

function setErrorFor(input, message) {
    const label = input.parentElement;
    const small = form.querySelector('small')

    small.innerText = message

    label.className = 'form error'
}

function setSuccessFor(input) {
    const label = input.parentElement;

    label.className = 'form success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}
