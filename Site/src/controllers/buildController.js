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

function salvarBuild(req,res) {
    var nomeBuild = req.body.nomeBuildServer;
    var idUser = req.params.idUser;
    var Arma = req.body.ArmasServer;
    var Armadura = req.body.ArmadurasServer;
    var Anel = req.body.AneisServer;
    var Feitico = req.body.FeiticosServer;
    var Atributos = req.body.Atributos;

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
                    buildModel.salvarArma(idUser, resultado.insertId, Arma)
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


module.exports = {
    listarArma,
    listarFeitico,
    listarAnel,
    listarArmadura,
    salvarBuild
};