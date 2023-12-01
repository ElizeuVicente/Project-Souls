var express = require("express");
var router = express.Router();

var buildController = require("../controllers/buildController");

router.get("/selectArmDireita/:ArmDireita", function(req,res) {
    buildController.selectArmDireita(req, res);
});

router.get("/selectArmDireita2/:ArmDireita2", function(req,res) {
    buildController.selectArmDireita2(req, res);
});

router.get("/selectArmEsquerda/:ArmEsquerda", function(req,res) {
    buildController.selectArmEsquerda(req, res);
});

router.get("/selectArmEsquerda2/:ArmEsquerda2", function(req,res) {
    buildController.selectArmEsquerda2(req, res);
});




router.post("/salvarAtributos/:idUser", function(req,res) {
    buildController.salvarAtributos(req, res);
});

router.post("/salvarBuild/:idUser", function(req,res) {
    buildController.salvarBuild(req, res);
});

router.get("/listarBuild/:idUser", function (req, res) {
    buildController.listarBuild(req, res);
});


router.get("/listarMetricas", function (req, res) {
    buildController.listarMetricas(req, res);
});

router.get("/listarArma", function (req, res) {
    buildController.listarArma(req, res);
});

router.get("/listarFeitico", function (req, res) {
    buildController.listarFeitico(req, res);
    
});

router.get("/listarArmadura", function (req, res) {
    buildController.listarArmadura(req, res);
    
});

router.get("/listarAnel", function (req, res) {
    buildController.listarAnel(req, res);
    
});

module.exports = router;