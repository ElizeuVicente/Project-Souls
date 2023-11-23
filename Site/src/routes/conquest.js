var express = require("express");
var router = express.Router();

var conquestController = require("../controllers/conquestController");


router.post("/realizarConquest", function (req, res) {
    conquestController.realizarConquest(req, res);
});

router.get("/carregarConquest/:idUsuario", function (req, res) {
    conquestController.carregarConquest(req, res);
    
});

module.exports = router;