// Aguarda até que o documento HTML seja completamente carregado antes de executar o código JavaScript.
document.addEventListener("DOMContentLoaded", function () {
    // Obtém a referência ao elemento do formulário.
    const form = document.querySelector("form");
    
    // Obtém a referência ao campo de entrada de email pelo seu ID.
    const emailUsuario = document.getElementById("idemail");
    const nomeUsuario = document.getElementById("idnome");
    const senhaUsuario = document.getElementById("idsenha");
    const usernameUsuario = document.getElementById("idUsername");


    // Adiciona um ouvinte de evento para o evento "submit" no formulário.
    form.addEventListener("submit", function (e) {



        // email
        // Verifica se a função isEmailValid retorna falso para o valor do campo de email.
        if (!isEmailValid(emailUsuario.value)) {
            // Impede o envio do formulário, cancelando o evento de envio.
            e.preventDefault();

            // Exibe o erro de email inválido definindo o estilo "display" para "flex".
            document.querySelector(".erroEmail").style.display = "flex";
        } else {
            // Caso o email seja válido, esconde o erro.
            document.querySelector(".erroEmail").style.display = "none";
        }


        // senha
        if (!isSenhaValida(senhaUsuario.value)) {
            e.preventDefault();
            
            // Exibe o erro de senha inválida definindo o estilo "display" para "flex".
            document.querySelector(".erroSenha").style.display = "flex";
        } else {
            // Caso a senha seja válida, esconde o erro.
            document.querySelector(".erroSenha").style.display = "none";
        }


        //  nome
        if (!isNomeValid(nomeUsuario.value)) {
            e.preventDefault();

            // Exibe o erro de nome inválido definindo o estilo "display" para "flex".
            document.querySelector(".erroNome").style.display = "flex";
        } else {
            // Caso o nome seja válido, esconde o erro.
            document.querySelector(".erroNome").style.display = "none";
        }


        if (!isusernameValido(usernameUsuario.value)) {
            e.preventDefault();

            // Exibe o erro de nome inválido definindo o estilo "display" para "flex".
            document.querySelector(".erroUsername").style.display = "flex";
        } else {
            // Caso o nome seja válido, esconde o erro.
            document.querySelector(".erroUsername").style.display = "none";
        }


    });



    // Função que verifica se o email é válido.
    function isEmailValid(email) {
        // Verifica se o email contém a string "@gmail".
        // Isso é uma validação muito simples e não abrange todas as regras de validação de email.
        return email.includes("@");
    }


    

    function isSenhaValida(senha) {
        // Verifica se a senha possui pelo menos 5 caracteres.
     if (senha.length < 10) {
         return false;
  
     }
     // Verifica se a senha contém pelo menos uma letra, um número e um caractere especial.
     const letraRegex = /[a-zA-Z]/;
     const letraMRegex = /[A-Z]/;
     const numeroRegex = /[0-9]/;
     const caractereEspecialRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
 
     return letraRegex.test(senha) && numeroRegex.test(senha) && caractereEspecialRegex.test(senha) && letraMRegex.test(senha);
 
    
    }



     function isNomeValid(nome) {
        // Verifica se o nome tem pelo menos 7 caracteres, incluindo o espaço em branco.
        return nome.length >= 8 && nome.includes(" ");
    }


    function isusernameValido(username) {

     return username.length >= 5 && username.includes("_");
 
     }


});


function MostrarOcultarSenha(){
    var senha = document.getElementById("idsenha");
    if(senha.type == "password"){
        senha.type="text";
    } else {
        senha.type = "password"
    }
 }


 var estadoCachorro = "fraco"; // Inicialmente, o cachorro está fraco

 function mostrarOcultar(){
     var cachorro = document.getElementById("cachorro"); // id
 
     if (estadoCachorro === "fraco") {
         cachorro.src = "img/forte.png";
         estadoCachorro = "forte"; // Altera o estado para "forte"
     } else {
         cachorro.src = "img/fraco.png";
         estadoCachorro = "fraco"; // Altera o estado de volta para "fraco"
     }
 }
