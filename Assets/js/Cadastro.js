document.getElementById('form-2').addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log('sub')
    const nome = document.getElementById('nome')
    const emai = document.getElementById('email-cad');
    const senha = document.getElementById('senha-cad');
    const erro = document.getElementById('erro2');

    if(emai.value == "" || senha.value == "" || nome.value == "") {
        erro.classList.add('most');
        document.getElementById('erro2').innerHTML = "Peemcha os dados"
    }
    else {
        location = './home.html';
    }
})