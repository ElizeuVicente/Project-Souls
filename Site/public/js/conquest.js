var conquest = [];

function progredirDS1() {

    var conquista;
    var cDs1 = 0;
    conquest = [];
    for (var i = 123; i <= 163; i++) {
        conquista = document.getElementById(`C${i}`);

        if (document.getElementById(`C163`).checked) conquista.setAttribute("checked", "true")

        if (conquista.checked) {
            console.log(`A Conquista C${i} de DS1 foi verificada`)
            conquest.push(conquista.id.replace("C", ""));
            cDs1++


            var largura = 100 - (2.43902439024 * cDs1)
            progressDs1.style.width = `${largura}%`
        }
    }

    if (cDs1 == 0) progressDs1.style.width = `100%`


}

function progredirDS2() {
    var conquista;
    var cDs2 = 0;
    conquest = [];
    for (var i = 164; i <= 201; i++) {
        conquista = document.getElementById(`C${i}`);

        if (document.getElementById(`C201`).checked) conquista.setAttribute("checked", "true")

        if (conquista.checked) {
            console.log(`A Conquista C${i} de DS1 foi verificada`)
            conquest.push(conquista.id.replace("C", ""));
            cDs2++


            var largura = 100 - (2.63157894737 * cDs2)
            progressDs2.style.width = `${largura}%`
        }
    }

    if (conquest.length == 0) progressDs2.style.width = `100%`
    else if (conquest.length == 38) progressDs2.style.width = `0%`

}

function progredirDS3() {
    var conquista;
    conquest = [];
    for (var i = 202; i <= 244; i++) {
        conquista = document.getElementById(`C${i}`);

        if (document.getElementById(`C244`).checked) conquista.setAttribute("checked", "true")

        if (conquista.checked) {
            console.log(`A Conquista C${i} de DS1 foi verificada`)
            conquest.push(conquista.id.replace("C", ""));


            var largura = 100 - (2.32558139535 * (conquest.length))
            progressDs3.style.width = `${largura}%`
        }
    }

    if (conquest.length == 0) progressDs3.style.width = `100%`
    else if (conquest.length == 43) progressDs3.style.width = `0%`
}

function carregarConquest(ID_USUARIO) {
    if (ID_USUARIO != undefined) {
        fetch(`/conquest/carregarConquest/${ID_USUARIO}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (resposta) {


            if (resposta.ok) {
                console.log(resposta)
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    for (var i = 0; i < json.length; i++) {
                        if (document.querySelector(`#C${json[i].fkConquista}`) != null)
                            document.querySelector(`#C${json[i].fkConquista}`).checked = true
                    }
                    if (window.location.href.includes("DS1")) {
                        progredirDS1();
                    } else if (window.location.href.includes("DS2")) {
                        progredirDS2();
                    } else
                        progredirDS3();

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

    }
}


function realizarConquest() {
    if (sessionStorage.ID_USUARIO != undefined) {

        fetch("/conquest/realizarConquest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUserServer: sessionStorage.ID_USUARIO,
                conquestServer: conquest
            })
        })

    } else alert('Para salvar suas conquistas você realizou, é necessario fazer o login')
}


