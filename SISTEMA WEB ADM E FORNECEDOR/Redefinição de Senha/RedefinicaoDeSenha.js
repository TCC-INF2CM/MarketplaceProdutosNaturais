const form = document.getElementById('form');
const campos = document.querySelectorAll('.senha');
const spans = document.querySelectorAll('.span-required'); 
const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

// REGEX SENHA
//  (?=.*\d)              // deve conter ao menos um dígito
//  (?=.*[a-z])           // deve conter ao menos uma letra minúscula
//  (?=.*[A-Z])           // deve conter ao menos uma letra maiúscula
//  (?=.*[$*&@#])         // deve conter ao menos um caractere especial
//  [0-9a-zA-Z$*&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados
//  $/

// Verificar se os campos foram preenchidos 
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    mainPasswordValidate();
    comparePassword();
})

// Mostrar erro (borda dos inputs em cor vermelha)
function setError(index) {
    campos[index].style.border ='2px solid #e63636';
    spans[index].style.display = 'block';
}

// Remover erro
function removeError (index) {
    campos[index].style.border ='2px solid #228B22';
    spans[index].style.display = 'none';
}


// SENHAS TERAO QUE TER 1 NUMERO, 1 CARATER ESPECIAL E 1 LETRA MAISUCULA
function mainPasswordValidate(){
    if(!senhaRegex.test(campos[0].value))
    {
        setError(0);
    }
    else{
        removeError(0);
        comparePassword();
    }
}

// Comparação de senhas
function comparePassword(){
    if(campos[0].value == campos[1].value && campos[1].value.length >=8)
    {
        removeError(1);
    }
    else{
        setError(1);
    }
}



// Verificaçãp dos campos senhas para enviar email
function Entrar() {

    if (senhaRegex.test(campos[0 && 1].value) && campos[0 && 1].value.length >= 8 && campos[0].value === campos[1].value) {
       window.alert("Senha Redefinida com sucesso!")
       window.location.href = "#";

    } else {
        window.alert("As senhas devem ser iguais e com no minimo 8 caracteres!");
    }
}
