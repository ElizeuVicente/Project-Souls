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

module.exports = {
    listarArma,
    listarFeitico,
    listarAnel,
    listarArmadura
};