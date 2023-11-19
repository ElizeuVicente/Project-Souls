var database = require("../database/config");

function salvarBuild(fkUser, nome) {
    instrucaoSql = 'insert into (fkUser, nome) Build values'

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}