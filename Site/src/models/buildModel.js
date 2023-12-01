var database = require("../database/config");

function selectArmDireita(ArmDireita) {
    var instrucaoSQL = `
    select tipo, peso, DanoFisico, DanoMagico, DanoFlamejante, DanoEletrico from Armas where idArma = ${ArmDireita}; 
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

function selectArmDireita2(ArmDireita2) {
    var instrucaoSQL = `
    select tipo, peso, DanoFisico, DanoMagico, DanoFlamejante, DanoEletrico from Armas where idArma = ${ArmDireita2}; 
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

function selectArmEsquerda(ArmEsquerda) {
    var instrucaoSQL = `
    select tipo, peso, DanoFisico, DanoMagico, DanoFlamejante, DanoEletrico from Armas where idArma = ${ArmEsquerda}; 
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

function selectArmEsquerda2(ArmEsquerda2) {
    var instrucaoSQL = `
    select tipo, peso, DanoFisico, DanoMagico, DanoFlamejante, DanoEletrico from Armas where idArma = ${ArmEsquerda2}; 
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}




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
    insert into Atributos values (${idBuild}, ${idUser}, ${Level}, ${Vigor}, ${Conhecimento}, ${Fortitude}, ${Vitalidade}, ${Forca}, ${Destreza}, ${Inteligencia}, ${Fe}, ${Sorte})
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
    var query = `
    SELECT
  SUBSTRING_INDEX(GROUP_CONCAT(Vigor ORDER BY Contagem_Vigor DESC), ',', 1) AS Moda_Vigor,
  SUBSTRING_INDEX(GROUP_CONCAT(Conhecimento ORDER BY Contagem_Conhecimento DESC), ',', 1) AS Moda_Conhecimento,
  SUBSTRING_INDEX(GROUP_CONCAT(Fortitude ORDER BY Contagem_Fortitude DESC), ',', 1) AS Moda_Fortitude,
  SUBSTRING_INDEX(GROUP_CONCAT(Vitalidade ORDER BY Contagem_Vitalidade DESC), ',', 1) AS Moda_Vitalidade,
  SUBSTRING_INDEX(GROUP_CONCAT(Forca ORDER BY Contagem_Forca DESC), ',', 1) AS Moda_Forca,
  SUBSTRING_INDEX(GROUP_CONCAT(Destreza ORDER BY Contagem_Destreza DESC), ',', 1) AS Moda_Destreza,
  SUBSTRING_INDEX(GROUP_CONCAT(Inteligencia ORDER BY Contagem_Inteligencia DESC), ',', 1) AS Moda_Inteligencia,
  SUBSTRING_INDEX(GROUP_CONCAT(Fe ORDER BY Contagem_Fe DESC), ',', 1) AS Moda_Fe,
  SUBSTRING_INDEX(GROUP_CONCAT(Sorte ORDER BY Contagem_Sorte DESC), ',', 1) AS Moda_Sorte
FROM (
  SELECT
    Vigor,
    Conhecimento,
    Fortitude,
    Vitalidade,
    Forca,
    Destreza,
    Inteligencia,
    Fe,
    Sorte,
    COUNT(*) AS Contagem_Vigor,
    COUNT(*) AS Contagem_Conhecimento,
    COUNT(*) AS Contagem_Fortitude,
    COUNT(*) AS Contagem_Vitalidade,
    COUNT(*) AS Contagem_Forca,
    COUNT(*) AS Contagem_Destreza,
    COUNT(*) AS Contagem_Inteligencia,
    COUNT(*) AS Contagem_Fe,
    COUNT(*) AS Contagem_Sorte
  FROM Atributos
  GROUP BY Vigor, Conhecimento, Fortitude, Vitalidade, Forca, Destreza, Inteligencia, Fe, Sorte
) AS Contagens;

  `

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function listarArma() {
    var query = `select idArma, nome, tipo from Armas;`

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function listarFeitico() {
    var query = `select idFeitico, nome, tipo from Feiticos;`

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function listarAnel() {
    var query = `select idAnel, nome from Anel;`

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function listarArmadura() {
    var query = `select idArmaduras, nome, tipo from Armaduras;`

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function listarBuild(idUser) {
    var query = `
    Select Build.nome, Atributos.Nivel from Build join Atributos on Build.idBuild = Atributos.fkBuild 
    where Build.fkUser = ${idUser};`

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
    listarMetricas,
    selectArmDireita,
    selectArmDireita2,
    selectArmEsquerda,
    selectArmEsquerda2,
    listarBuild
};