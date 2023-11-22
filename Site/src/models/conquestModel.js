var database = require("../database/config");

function realizarConquest(fkUser, fkConquista) {
    instrucaoSql = `insert into UserXConquista (fkUser, fkConquista) values ('${fkUser}' ,'${fkConquista}');`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    realizarConquest
};