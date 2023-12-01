var buildModel = require("../models/buildModel");

function listarArma(req, res) {
    buildModel.listarArma().then((resultado) => {
        res.status(200).json(resultado);
    });
}

function listarAnel(req, res) {
    buildModel.listarAnel().then((resultado) => {
        res.status(200).json(resultado);
    });
}

function listarArmadura(req, res) {
    buildModel.listarArmadura().then((resultado) => {
        res.status(200).json(resultado);
    });
}

function listarFeitico(req, res) {
    buildModel.listarFeitico().then((resultado) => {
        res.status(200).json(resultado);
    });
}

function listarMetricas(req, res) {
    buildModel.listarMetricas().then((resposta) => {
        res.status(200).json(resposta);
    });
}


function salvarBuild(req, res) {
    var nomeBuild = req.body.nomeBuildServer;
    var idUser = req.params.idUser;
    var Arma = req.body.ArmasServer;
    var Armadura = req.body.ArmadurasServer;
    var Anel = req.body.AneisServer;
    var Feitico = req.body.FeiticosServer;
    var Atributos = req.body.Atributos;
    var Level = req.body.Level;

    // Faça as validações dos valores
    if (nomeBuild == undefined) {
        res.status(400).send("O nome da sua Build esta undefined!");
    } else if (idUser == undefined) {
        res.status(400).send("Seu idUser esta undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        buildModel.salvarBuild(idUser, nomeBuild)
            .then(
                function (resultado) {
                    for (var i = 0; i < 4; i++) {
                        if (Arma[i] > -1) buildModel.salvarArma(idUser, resultado.insertId, Arma[i], i + 1)
                        if (Feitico[i] > -1) buildModel.salvarFeitico(idUser, resultado.insertId, Feitico[i], i + 1)
                        if (Armadura[i] > -1) buildModel.salvarArmadura(idUser, resultado.insertId, Armadura[i], i + 1)
                        if (Anel[i] > -1) buildModel.salvarAnel(idUser, resultado.insertId, Anel[i], i + 1)


                    }
                    buildModel.salvarAtributo(idUser, resultado.insertId, Level, Atributos[0], Atributos[1], Atributos[2], Atributos[3], Atributos[4], Atributos[5], Atributos[6], Atributos[7], Atributos[8])
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function selectArmDireita(req, res) {
    var ArmDireita = req.params.ArmDireita;

    buildModel.selectArmDireita(ArmDireita).then(
            function (resultado) {
                res.status(200).json(resultado);
                console.log(resultado);
            }
        );
}

function selectArmDireita2(req, res) {
    var ArmDireita2 = req.params.ArmDireita2;

    buildModel.selectArmDireita2(ArmDireita2).then(
            function (resultado) {
                res.status(200).json(resultado);
                console.log(resultado);
            }
        );
}

function selectArmEsquerda(req, res) {
    var ArmEsquerda = req.params.ArmEsquerda;

    buildModel.selectArmEsquerda(ArmEsquerda).then(
            function (resultado) {
                res.status(200).json(resultado);
                console.log(resultado);
            }
        );
}

function selectArmEsquerda2(req, res) {
    var ArmEsquerda2 = req.params.ArmEsquerda2;

    buildModel.selectArmEsquerda2(ArmEsquerda2).then(
            function (resultado) {
                res.status(200).json(resultado);
                console.log(resultado);
            }
        );
}

function listarBuild (req, res) {
    var idUser = req.params.idUser;

    buildModel.listarBuild(idUser).then((resposta) => {
        res.status(200).json(resposta);
    });


}




module.exports = {
    listarArma,
    listarFeitico,
    listarAnel,
    listarArmadura,
    salvarBuild,
    listarMetricas,
    selectArmDireita,
    selectArmDireita2,
    selectArmEsquerda,
    selectArmEsquerda2,
    listarBuild
};