function logar() {
    var emailVar = inEmail.value;
    var senhaVar = inSenha.value;

    if (emailVar == "" || senhaVar == "") {
        const cardError = document.getElementById("cardError")
        cardError.style.display = `block`;
        return;
    }

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!");

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.ID_USUARIO = json.idUser
                sessionStorage.NOME_USUARIO = json.nome
                setTimeout(function () {
                    window.location = "./index.html";
                }); // apenas para exibir o loading
            });

        } else {
            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                //finalizarAguardar(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    });

    return false;

}