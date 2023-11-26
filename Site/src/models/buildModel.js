var database = require("../database/config");

function salvarBuild(idUser, nomeBuild) {
    var instrucaoSQL = `insert into Build (fkUser, nome) values (${idUser}, ${nomeBuild});`

    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
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
    salvarBuild
};