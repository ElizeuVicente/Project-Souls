var database = require("../database/config");


function realizarConquest(idUser, conquest) {
    instrucaoSql = `
    delete from UserXConquista where fkUser = ${idUser} and fkConquista ;
    insert into UserXConquista (fkUser, fkConquista) values;
    `
    for (var i = 0; i < conquest.length - 1; i++) {
        instrucaoSql += `('${idUser}' ,'${conquest[i]}'),`
    }
    instrucaoSql += `('${idUser}' ,'${conquest[conquest.length - 1]}');`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function carregarConquest(idUsuario) {
    instrucaoSql = `select * from UserXConquista where fkUser = ${idUsuario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    realizarConquest,
    carregarConquest
};