const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required'); 
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

// Validação CPF
function cpfValidate(){
//   $('#CPF').mask('999.999.999-99');
   $(document).ready(function(){
    
    var cpf_field = '#CPF';
        var cpf = $(cpf_field).val();
        if(cpf.length == 11){
            var v = [];

            //Calcula o primeiro dígito de verificação.
            v[0] = 1 * cpf[0] + 2 * cpf[1] + 3 * cpf[2];
            v[0] += 4 * cpf[3] + 5 * cpf[4] + 6 * cpf[5];
            v[0] += 7 * cpf[6] + 8 * cpf[7] + 9 * cpf[8];
            v[0] = v[0] % 11;
            v[0] = v[0] % 10;

            //Calcula o segundo dígito de verificação.
            v[1] = 1 * cpf[1] + 2 * cpf[2] + 3 * cpf[3];
            v[1] += 4 * cpf[4] + 5 * cpf[5] + 6 * cpf[6];
            v[1] += 7 * cpf[7] + 8 * cpf[8] + 9 * v[0];
            v[1] = v[1] % 11;
            v[1] = v[1] % 10;

            //Retorna Verdadeiro se os dígitos de verificação são os esperados.
            if ((v[0] != cpf[9]) || (v[1] != cpf[10])){
                $(cpf_field).css("border","2px solid red");
                $(cpf_field).focus();
            }else{
                $(cpf_field).css("border","2px solid green");
            }
        }else{
            $(cpf_field).css("border","2px solid red");
            $(cpf_field).focus();
            
        }
    });
}


// Validação Telefone (Mascara)
function telefoneValidate(){
    $('#telefone').mask('(99) 99999-9999');
    removeError(2);
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
    if(campos[7].value === campos[6].value && campos[6].value.length >=8)
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