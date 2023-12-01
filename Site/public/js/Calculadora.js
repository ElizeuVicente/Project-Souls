var Level = 1;
var Vigo = 10;
var Conh = 10;
var Forti = 10;
var Vita = 10;
var Forc = 10;
var Dest = 10;
var Inte = 10;
var Fe = 10;
var Sort = 10;
var AlmasC = 0;

var Hp = 403;
var Fp = 93;
var Stamina = 91;
var EquipLoad = 50;
var Peso = 0;

var DanoArmaD = Forc * (Forc - 9);
var DanoArmaE = Forc * (Forc - 9);
var DanoArmaD2 = Forc * (Forc - 9);
var DanoArmaE2 = Forc * (Forc - 9);

var ResFisica = Vita * (Vita - 9);
var ResMagica = Vita * (Vita - 9);
var ResFlamejante = Vita * (Vita - 9);
var ResEletrica = Vita * (Vita - 9);

var DanoFisico = 0;
var DanoMagico = 0;
var DanoFlamejante = 0;
var DanoEletrica = 0;

var Atr = [Vigo, Conh, Forti, Vita, Forc, Dest, Inte, Fe, Sort];
var MetAtr = []

function lvUpVigo() {
    legendaChart.style.opacity = `1`
    legendaChart.innerHTML = `
    A média de nivels de atributos usadas pelos usuarios são:<br>
    <div>
        <div>Vigor: ${MetAtr[0]}</div> 
        <div>Conhecimento: ${MetAtr[1]}</div>
        <div>Fortitude: ${MetAtr[2]}</div>
    </div>
    
    
    <div>
        <div>Vitalidade: ${MetAtr[3]}</div>
        <div>Força: ${MetAtr[4]}</div>
        <div>Destreza: ${MetAtr[5]}</div>
    </div>

    <div>
        <div>Inteligencia: ${MetAtr[6]}</div>
        <div>Fé: ${MetAtr[7]}</div>
        <div>Sorte: ${MetAtr[8]}</div>
    </div>
    `
    
    
    if (Vigo < 99) {
        Vigo++;
        Level++;
        lvVigor.innerHTML = Vigo;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`
        Atr[0] = Vigo;

        if (Vigo < 15) Hp += 35
        else if (Vigo < 26) Hp += 44
        else if (Vigo < 44) Hp += 15
        else Hp += 2

        document.getElementById('spanHp').innerHTML = Hp
    }
    calcularAlmasC()
}
function lvDownVigo() {
    if (Vigo > 10) {
        Vigo = Vigo - 1;
        lvVigor.innerHTML = Vigo;
        Atr[0] = Vigo;

        if (Vigo < 15) Hp -= 35
        else if (Vigo < 26) Hp -= 44
        else if (Vigo < 44) Hp -= 15
        else Hp -= 2
        document.getElementById('spanHp').innerHTML = Hp
    }
    if (Level > 1 && Vigo >= 10) {
        Level = Level - 1;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
    }
    calcularAlmasC()
}


function lvUpConh() {
    if (Conh < 99) {
        Conh++;
        Level++;
        lvConhecimento.innerHTML = Conh;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
        Atr[1] = Conh;

        if (Conh < 28) Fp += 5
        else if (Conh <= 35) Fp += 10
        else Fp += 2

        document.getElementById('spanFp').innerHTML = Fp
    }
    calcularAlmasC()
}
function lvDownConh() {
    if (Conh > 10) {
        Conh = Conh - 1;
        lvConhecimento.innerHTML = Conh;
        Atr[1] = Conh;

        if (Conh < 28) Fp -= 5
        else if (Conh <= 35) Fp -= 10
        else Fp -= 2

        document.getElementById('spanFp').innerHTML = Fp
    }
    if (Level > 1 && Conh >= 10) {
        Level = Level - 1;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
    }
    calcularAlmasC()
}


function lvUpForti() {
    if (Forti < 99) {
        Forti++;
        Level++;
        lvFortitude.innerHTML = Forti;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
        Atr[2] = Forti;

        if (Forti < 40) Stamina += 2
        EquipLoad++

        document.getElementById('spanEquipLoad').innerHTML = `${Peso}(${EquipLoad})`;
        document.getElementById('spanStamina').innerHTML = Stamina;
    }
    calcularAlmasC()
}
function lvDownForti() {
    if (Forti > 10) {
        Forti = Forti - 1;
        lvFortitude.innerHTML = Forti
        Atr[2] = Forti;

        if (Forti < 40) Stamina -= 2
        EquipLoad--

        document.getElementById('spanEquipLoad').innerHTML = `${Peso}(${EquipLoad})`;;
        document.getElementById('spanStamina').innerHTML = Stamina;
    }
    if (Level > 1 && Forti >= 10) {
        Level = Level - 1;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
    }
    calcularAlmasC()
}


function lvUpVita() {
    if (Vita < 99) {
        Vita++;
        Level++;
        lvVitalidade.innerHTML = Vita;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;

        Atr[3] = Vita;
    }
    calcularAlmasC()
}
function lvDownVita() {
    if (Vita > 10) {
        Vita = Vita - 1;
        lvVitalidade.innerHTML = Vita;
        Atr[3] = Vita;
    }
    if (Level > 1 && Vita >= 10) {
        Level = Level - 1;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
    }
    calcularAlmasC()
}


function lvUpForc() {
    if (Forc < 99) {
        Forc++;
        Level++;
        lvForca.innerHTML = Forc;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
        Atr[4] = Forc;
    }
    calcularAlmasC()
}
function lvDownForc() {
    if (Forc > 10) {
        Forc = Forc - 1;
        lvForca.innerHTML = Forc
        Atr[4] = Forc;
    }
    if (Level > 1 && Forc >= 10) {
        Level = Level - 1;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
    }
    calcularAlmasC()
}

function lvUpDest() {
    if (Dest < 99) {
        Dest++;
        Level++;
        lvDestreza.innerHTML = Dest;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
        Atr[5] = Dest;
    }
    calcularAlmasC()
}
function lvDownDest() {
    if (Dest > 10) {
        Dest = Dest - 1;
        lvDestreza.innerHTML = Dest;
        Atr[5] = Dest;
    }
    if (Level > 1 && Dest >= 10) {
        Level = Level - 1;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
    }
    calcularAlmasC()
}


function lvUpInt() {
    if (Inte < 99) {
        Inte++;
        Level++;
        lvInteligencia.innerHTML = Inte;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
        Atr[6] = Inte;
    }
    calcularAlmasC()
}
function lvDownInt() {
    if (Inte > 10) {
        Inte = Inte - 1;
        lvInteligencia.innerHTML = Inte;
        Atr[6] = Inte;
    }
    if (Level > 1 && Inte >= 10) {
        Level = Level - 1;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
    }
    calcularAlmasC()
}


function lvUpFe() {
    if (Fe < 99) {
        Fe++;
        Level++;
        lvFe.innerHTML = Fe;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
        Atr[7] = Fe;
    }
    calcularAlmasC()
}
function lvDownFe() {
    if (Fe > 10) {
        Fe = Fe - 1;
        lvFe.innerHTML = Fe;
        Atr[7] = Fe;
    }
    if (Level > 1 && Fe >= 10) {
        Level = Level - 1;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
    }
    calcularAlmasC()
}


function lvUpSo() {
    if (Sort < 99) {
        Sort++;
        Level++;
        lvSorte.innerHTML = Sort;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
        Atr[8] = Sort;
    }
    calcularAlmasC()
}
function lvDownSo() {
    if (Sort > 10) {
        Sort = Sort - 1;
        lvSorte.innerHTML = Sort;
        Atr[8] = Sort;
    }
    if (Level > 1 && Sort >= 10) {
        Level = Level - 1;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
    }
    calcularAlmasC()
}

function calcularAlmasC() {
    AlmasC = 673;

    chartAtr.data.datasets[0].data = Atr;
    chartAtr.update();

    for (var i = 1; i < Level; i++) {
        if (Level != 1) {
            if (Level < 13) {
                AlmasC = AlmasC * 1.025
            } else {
                AlmasC = 0.02 * Level ^ 3 + 3.06 * Level ^ 3 + 105.6 * Level - 895
            }
        }
    }
    spanCustoAlma.innerHTML = ` ${AlmasC.toFixed()}`;
}

function listar() {
    listarArma()
    listarArmadura()
    listarAnel()
    listarFeitico()
}

function listarMetricas() {

    

    fetch("/build/listarMetricas", {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((resposta) => {
                console.log(resposta)
                MetAtr.push(resposta[0].Vigor)
                MetAtr.push(resposta[0].Conhecimento)
                MetAtr.push(resposta[0].Fortitude)
                MetAtr.push(resposta[0].Vitalidade)
                MetAtr.push(resposta[0].Forca)
                MetAtr.push(resposta[0].Destreza)
                MetAtr.push(resposta[0].Inteligencia)
                MetAtr.push(resposta[0].Fe)
                MetAtr.push(resposta[0].Sorte)
                chartAtr.update()
                
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    return MetAtr;

    
}

function listarArma() {
    fetch("/build/listarArma", {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((armas) => {
                armas.forEach((armas) => {
                    selArmDireita.innerHTML += `<option value='${armas.idArma}'>${armas.tipo}: ${armas.nome}</option>`;
                    selArmEsquerda.innerHTML += `<option value='${armas.idArma}'>${armas.tipo}: ${armas.nome}</option>`;
                    selArmDireita2.innerHTML += `<option value='${armas.idArma}'>${armas.tipo}: ${armas.nome}</option>`;
                    selArmEsquerda2.innerHTML += `<option value='${armas.idArma}'>${armas.tipo}: ${armas.nome}</option>`;
                });
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function listarArmadura() {
    fetch("/build/listarArmadura", {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((armaduras) => {
                armaduras.forEach((armaduras) => {
                    if (armaduras.tipo == 'Capacete') selArmCabeca.innerHTML += `<option value='${armaduras.idArmaduras}'>${armaduras.tipo}: ${armaduras.nome}</option>`;
                    else if (armaduras.tipo == 'Peitoral') selArmTorso.innerHTML += `<option value='${armaduras.idArmaduras}'>${armaduras.tipo}: ${armaduras.nome}</option>`;
                    else if (armaduras.tipo == 'Manopla') selArmMao.innerHTML += `<option value='${armaduras.idArmaduras}'>${armaduras.tipo}: ${armaduras.nome}</option>`;
                    else if (armaduras.tipo == 'Perneira') selArmPerna.innerHTML += `<option value='${armaduras.idArmaduras}'>${armaduras.tipo}: ${armaduras.nome}</option>`;


                });
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function listarAnel() {
    fetch("/build/listarAnel", {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((aneis) => {
                aneis.forEach((aneis) => {
                    selAnel1.innerHTML += `<option value='${aneis.idAnel}'>${aneis.nome}</option>`;
                    selAnel2.innerHTML += `<option value='${aneis.idAnel}'>${aneis.nome}</option>`;
                    selAnel3.innerHTML += `<option value='${aneis.idAnel}'>${aneis.nome}</option>`;
                    selAnel4.innerHTML += `<option value='${aneis.idAnel}'>${aneis.nome}</option>`;
                });
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function listarFeitico() {
    fetch("/build/listarFeitico", {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((feiticos) => {
                feiticos.forEach((feiticos) => {
                    if (feiticos.tipo != null) {
                        selMag1.innerHTML += `<option value='${feiticos.idFeitico}'>${feiticos.tipo}: ${feiticos.nome}</option>`;
                        selMag2.innerHTML += `<option value='${feiticos.idFeitico}'>${feiticos.tipo}: ${feiticos.nome}</option>`;
                        selMag3.innerHTML += `<option value='${feiticos.idFeitico}'>${feiticos.tipo}: ${feiticos.nome}</option>`;
                        selMag4.innerHTML += `<option value='${feiticos.idFeitico}'>${feiticos.tipo}: ${feiticos.nome}</option>`;
                    }
                });
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function salvarBuild() {
    var nomeBuild = inNomeBuild.value
    var idUser = sessionStorage.ID_USUARIO;

    var armas = [
        document.getElementById(`selArmDireita`).value,
        document.getElementById(`selArmEsquerda`).value,
        document.getElementById(`selArmDireita2`).value,
        document.getElementById(`selArmEsquerda2`).value,
    ]
    var feiticos = [
        document.getElementById(`selMag1`).value,
        document.getElementById(`selMag2`).value,
        document.getElementById(`selMag3`).value,
        document.getElementById(`selMag4`).value,
    ]

    var armaduras = [
        document.getElementById(`selArmCabeca`).value,
        document.getElementById(`selArmTorso`).value,
        document.getElementById(`selArmMao`).value,
        document.getElementById(`selArmPerna`).value,
    ]

    var anel = [
        document.getElementById(`selAnel1`).value,
        document.getElementById(`selAnel2`).value,
        document.getElementById(`selAnel3`).value,
        document.getElementById(`selAnel4`).value,
    ]

    if (sessionStorage.ID_USUARIO != undefined) {

        fetch(`/build/salvarBuild/${idUser}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeBuildServer: nomeBuild,
                Level: Level,
                Atributos: Atr,
                ArmadurasServer: armaduras,
                ArmasServer: armas,
                AneisServer: anel,
                FeiticosServer: feiticos

            })
        });
    } else alert("Para salvar sua build é necessario realizar o login");

    window.location = "./index.html";
}


function selectArmDireita() {
    var ArmDireita = document.getElementById(`selArmDireita`).value;
  
    if (ArmDireita != undefined) {
        fetch(`/build/selectArmDireita/${ArmDireita}`,
            { cache: 'no-store' })
            .then(function (resultado) {
                console.log("ESTOU NO THEN DO selectArmDireita()!");

                if (resultado.ok) {
                    console.log(resultado);

                    resultado.json().then(json => {
                        console.log(json);
                        console.log(JSON.stringify(json));
                        DanoArmaD = json.DanoFisico + json.DanoMagico + json.DanoFlamejante + json.DanoEletrico;
                        Peso += json.peso

                    });

                } else {
                    console.log("Houve um erro ao tentar realizar a busca da Arma direita");

                    resultado.text().then(texto => {
                        console.error(texto);
                    });
                }
            }).catch(function (erro) {
                console.log(erro);
            });
    }
}
