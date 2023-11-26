var express = require("express");
var router = express.Router();

var buildController = require("../controllers/buildController");

router.post("/salvarAtributos/:idUser", function(req,res) {
    buildController.salvarAtributos(req, res);
});

router.post("/salvarBuild/:idUser", function(req,res) {
    buildController.salvarBuild(req, res);
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