let Level = 1;
let Vigo = 10;
let Conh = 10;
let Forti = 10;
let Vita = 10;
let Forc = 10;
let Dest = 10;
let Inte = 10;
let Fe = 10;
let Sort = 10;
let AlmasC = 0;

function lvUpVigo() {
    if (Vigo < 99) {
        Vigo++;
        Level++;
        lvVigor.innerHTML = Vigo;
        spanLevel.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`;
        spanLevelStats.innerHTML = ` ${Level}`
        Atr[0] = Vigo;
    }
    calcularAlmasC()
}
function lvDownVigo() {
    if (Vigo > 10) {
        Vigo = Vigo - 1;
        lvVigor.innerHTML = Vigo;
        Atr[0] = Vigo;
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
    }
    calcularAlmasC()
}
function lvDownConh() {
    if (Conh > 10) {
        Conh = Conh - 1;
        lvConhecimento.innerHTML = Conh;
        Atr[1] = Conh;
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
    }
    calcularAlmasC()
}
function lvDownForti() {
    if (Forti > 10) {
        Forti = Forti - 1;
        lvFortitude.innerHTML = Forti
        Atr[2] = Forti;
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
    
    for (var i = 1; i < Level; i++) {
        if (Level != 1) {
            if (Level < 13){
                AlmasC = AlmasC*1.025
            }else {
            AlmasC = 0.02*Level^3 + 3.06*Level^3 + 105.6*Level - 895
            }
        }
    }
    spanCustoAlma.innerHTML = ` ${AlmasC.toFixed()}`;
}

let Atr = [Vigo, Conh, Forti, Vita, Forc, Dest, Inte, Fe, Sort];




function salvarBuild() {
    if(sessionStorage.ID_USUARIO != undefined) {
        
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeServer: nomeVar,
                emailServer: emailVar,
                senhaServer: senhaVar,
                idUsuarioServer: idUsuario
            })
        })
    }
}


