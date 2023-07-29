const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const emailRegex = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,4})+$/;
const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
// const spans = document.querySelectorAll('.span-required');

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
    nomeValidate();
    cpfValidate();
    telefoneValidate();
    datanascValidate();
    emailValidate();
    compareEmail();
    mainPasswordValidate();
    comparePassword();
}  )

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

//Validação do campo nome (caracteres)
function nomeValidate(){
    if(campos[0].value.length < 10)
    {
        setError(0);
    } else{
        removeError(0);
    }
}

// Validação CPF (Mascara) 
function cpfValidate(){
    $('#CPF').mask('999.999.999-99')
    
}


// Validação Telefone (Mascara)
function telefoneValidate(){
    $('#telefone').mask('(99) 99999-9999');
}

// Validação dos campos de Email
function emailValidate(){
    if(!emailRegex.test(campos[4].value))
    {
        setError(4);
    } else {
        removeError(4);
    }
}

// Comparação dos Email
function compareEmail(){
    if(campos[5].value == campos[4].value && campos[4])
    {
        removeError(5);
    }
    else{
        setError(5);
    }
}

// Validação dos campos de Senha
function mainPasswordValidate(){
    if(!senhaRegex.test(campos[6].value))
    {
        setError(6);
    }
    else{
        removeError(6);
        comparePassword();
    }
}

// Comparação de senhas
function comparePassword(){
    if(campos[7].value == campos[6].value && campos[6].value.length >=8)
    {
        removeError(7);
    }
    else{
        setError(7);
    }
}

//function checkInputs(){
//    const nameValue = uname.value.trim()
//    const cnpjValue = cnpj.value.trim()
//    const telValue = tel.value.trim()
//    const cepValue = cep.value.trim()
//    const cityValue = city.value.trim()
//    const emailValue = email.value.trim()
//    const email2Value = email2.value.trim()
//    const passwordValue = password.value.trim()
//    const password2Value = password2.value.trim()
//    if(nameValue === ''){
//    mostrar erro
//    adicionar classe error
//    errorValidation(uname, 'Preencha esse campo')
//    }else{        
//    }
//    }

//    function errorValidation(input, message){
//    const inf = input.parentElement;
//    inf.className = 'inf error'
// }

//    var tel = document.getElementById('telefone');
//    if (tel.value.length === 0) {
//    tel.value += "("
//    } else if (tel.value.length == 4){
//    tel.value += ")"
//    } else if (tel.value.length == 10){
//    tel.value += "-"
//    }


// Mascara CPF ("." & "-")
// function cpfValidate(){
//    var cpf = document.getElementById('CPF');
//   if (cpf.value.length == 3 || cpf.value.length == 7 ) {
//       cpf.value += ".";
//    } else if (cpf.value.length == 11) {
//        cpf.value += "-";
//    }   
//}