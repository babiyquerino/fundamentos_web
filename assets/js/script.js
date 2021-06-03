/*
Escopo Global = Var
Escopo Local = Let
Escopo Global Constante = Const

Case Sensitive: Linguagem que reconhece letras maiusculas e minisculas

Acesso por Tag: getElementTagName()
Acesso pot Id: getEelementById()
Acesso por Nome: getElementsByName()
Acesso por Classe: getElementsByClassName()
Acesso por Seletor: queryselector()
*/

let nome = window.document.getElementById ("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOK = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector ("mapa")

nome.style.width= "100%"
email.style.width="100%"

function validaNome () {
    let txtNome = document.querySelector("txtNome")
    if(nome.value.length <=2 ) {
        txtNome.innerHTML="Nome inválido!"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML="Nome Válido!"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

    function validaEmail() {
        let txtEmail = document.querySelector ("#email")
        if (email.value.indexOf("@") == -1 || email.value.indexOf (".") ) {
            txtEmail .innerHTML = "E-mail inválido"
            txtEmail.style,color = "red"
         } else {
            txtNome.innerHTML="E-mail Válido!"
            txtNome.style.color = "green"
            emailOk = true
    }
}
function validaAssunto () {
    let txtAssunto = document.querySelector ("assunto")
    if  (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true 

    }
}

function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk ==true) {
        alert ( "Formulário enviado com sucesso!")
    } else {
        alert ("Preencha o fomrulário corretamente antes de enviar!")
          }
        }

        function mapazoom () {
            mapa.style.width = "800px"
            mapa.style.height = "600px"

        }
        function mapanormal () {
            mapa.style.width = "400px"
            mapa.style.height = "250px"
        }
