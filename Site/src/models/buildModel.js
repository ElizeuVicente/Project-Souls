var database = require("../database/config");

function salvarArma(idUser, idBuild, Arma, Slot) {
    var instrucaoSQL = `
    insert into ArmaxBuild values (${Arma}, ${idBuild}, ${idUser}, ${Slot})
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

function salvarFeitico(idUser, idBuild, Feitico, Slot) {
    var instrucaoSQL = `
    insert into FeiticoxBuild values (${Feitico}, ${idBuild}, ${idUser}, ${Slot})
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

function salvarAnel(idUser, idBuild, Anel, Slot) {
    var instrucaoSQL = `
    insert into AnelxBuild values (${Anel}, ${idBuild}, ${idUser}, ${Slot})
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

function salvarArmadura(idUser, idBuild, Armadura, Slot) {
    var instrucaoSQL = `
    insert into ArmaduraxBuild values (${Armadura}, ${idBuild}, ${idUser}, ${Slot})
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

function salvarAtributo(idUser, idBuild, Level, Vigor, Conhecimento, Fortitude, Vitalidade, Forca, Destreza, Inteligencia, Fe, Sorte) {
    var instrucaoSQL = `
    insert into Atributos values (${idBuild}, ${idUser}, null, ${Level}, ${Vigor}, ${Conhecimento}, ${Fortitude}, ${Vitalidade}, ${Forca}, ${Destreza}, ${Inteligencia}, ${Fe}, ${Sorte})
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

function salvarBuild(idUser, nomeBuild) {
    var instrucaoSQL = `insert into Build (fkUser, nome) values (${idUser}, '${nomeBuild}');`

    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}


function listarMetricas() {
    var query = `select round(avg(Vigor)) as Vigor, round(avg(Conhecimento)) as Conhecimento, round(avg(Fortitude)) as Fortitude, round(avg(Vitalidade)) as Vitalidade, round(avg(Forca)) as Forca, round(avg(Destreza)) as Destreza, round(avg(Inteligencia)) as Inteligencia, round(avg(Fe)) as Fe, round(avg(Sorte)) as Sorte from Atributos;`

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function listarArma() {
    var query = `select * from Armas;`

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function listarFeitico() {
    var query = `select * from Feiticos;`

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function listarAnel() {
    var query = `select * from Anel;`

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function listarArmadura() {
    var query = `select * from Armaduras;`

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

module.exports = {
    listarArma,
    listarFeitico,
    listarAnel,
    listarArmadura,
    salvarBuild,
    salvarArma,
    salvarFeitico,
    salvarAnel,
    salvarArmadura,
    salvarAtributo,
    listarMetricas
};