var database = require("../database/config");

function salvarBuild(fkUser, nome) {
    instrucaoSql = `insert into Build (fkUser, nome) values ('${fkUser}' ,'${nome}');`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    salvarBuild
};