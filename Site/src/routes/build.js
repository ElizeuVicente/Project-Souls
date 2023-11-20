var express = require("express");
var router = express.Router();

var buildController = require("../controllers/buildController");


router.post("/salvarBuild", function (req, res) {
    buildController.salvarBuild(req, res);
});

module.exports = router;