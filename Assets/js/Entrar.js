addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log('sub')
    const emai = document.getElementById('email-log');
    const senha = document.getElementById('senha-log');
    const erro = document.getElementById('erro1');

    if(emai.value == "exemple11@exemple.com" && senha.value == "123456") {
        location.href = './home.html'
    }
    else if(emai.value == "" || senha.value == ""){
        erro.classList.add('most')
        document.getElementById('erro1').innerHTML = "Peemcha os dados"
    }
    else{
        erro.classList.add('most')
        document.getElementById('erro1').innerHTML = "Senha ou Email Incoretos"
    }
})
