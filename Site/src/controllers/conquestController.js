var conquestModel = require("../models/conquestModel");

function realizarConquest(req, res){
    var idUser = req.body.idUserServer;
    var conquest = req.body.conquestServer;

    conquestModel.realizarConquest(idUser, conquest)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao registrar a conquista! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function carregarConquest(req,res) {
    var idUser = req.params.idUsuario;
    
    conquestModel.carregarConquest(idUser)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao registrar a conquista! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );

}


    


module.exports = {
    realizarConquest,
    carregarConquest
}