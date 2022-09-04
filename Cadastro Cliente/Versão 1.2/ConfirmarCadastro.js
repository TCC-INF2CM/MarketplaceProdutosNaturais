const form=document.getElementById('form')
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('password2')

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    checkInputs()
})

    function checkInputs(){
      const usernameValue=username.value.trim()
      const emailValue=email.value.trim()
      const passwordValue=password.value.trim()
      const password2Value=password2.value.trim()

      if(usernameValue === ''){
        setErrorFor(username, 'Preencha esse campo')
      }else{
        setSuccessFor(username)
      }

      if(emailValue === ''){
        setErrorFor(email, 'Preencha esse campo')

      }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email iválido')
      }else{setSuccessFor(email)}

      if(passwordValue===''){
        setErrorFor(password, 'Preencha o campo corretamente')
      }else{setSuccessFor(password)}

      if(password2===''){
        setErrorFor(password2, 'Preencha o campo')
      }else if(passwordValue !==password2Value){
        setErrorFor(password2, 'Senhas não coicidem')
      }else{setSuccessFor(password2)}

    }

    function setErrorFor(input, message){
        const formControl=input.parentElement;
        const small= formControl.querySelector('small')
        small.innerText=message
        formControl.className='form-control error'
    }

    function setSuccessFor(){
        const formControl=input.parentElement;
        formControl.className='form-control sucess'
    }

    function isEmail(email){
        return true;
    }