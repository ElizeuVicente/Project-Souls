function cadastrar() {

    var nomeVar = inUserName.value;
    var emailVar = inEmail.value;
    var senhaVar = inSenha.value;
    var confirmacaoSenhaVar = inSenhaConfirm.value;


    if (nomeVar == "" || emailVar == "" || senhaVar == "") {
        cardError.style.display = `block`
    } else {
        if (emailVar.indexOf("@") == -1 || emailVar.endsWith(".com") == false) {

            cardError.innerHTML = "email inválido"
            cardError.className = "invalido"


            if (emailVar.indexOf("@") == -1) {

                msgError.innerHTML = `Está faltando o @`


            }
            else if (emailVar.endsWith(".com") == false) {

                msgError.innerHTML = `Está faltando o ".com"`

            }

        }

        else if (!/[!@#\$%\^&\*\(\)\-_\+=\[\]{};':"\\|,.<>\/?]/.test(senhaVar)) {
            msgError.innerHTML = 'Senha inválida!'
            msgError.innerHTML += ' A senha deve conter pelo menos um caractere especial.'
            msgError.className = "invalido"

        }

        else if (senhaVar.length < 8) {
            msgError.innerHTML = 'Senha inválida!'
            msgError.innerHTML += ' Precisa ter ao menos 8 dígitos'
            msgError.className = 'invalido'

        }

        else if (confirmacaoSenhaVar != senhaVar) {
            msgError.innerHTML = `A senha de confirmação não corresponde à senha inserida. Por favor, tente novamente`
            msgError.className = "invalido"

        }
        window.location = 'login.html'
    }


    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
        })
    })

}